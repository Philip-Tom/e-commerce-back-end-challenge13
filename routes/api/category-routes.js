const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: Product,
    });

    if (!categoryData) {
      res
        .status(404)
        .json({ message: `No category found for id : ${req.params.id}` });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updatedRowCount] = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (updatedRowCount !== 0) {
      return res.status(200).json({ message: "Category updated successfully" });
    }

    return res
      .status(404)
      .json({ message: `Category not found for id : ${req.params.id}` });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRowCount = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedRowCount === 0) {
      res
        .status(404)
        .json({ message: `No category found for id : ${req.params.id}` });
      return;
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

module.exports = router;
