const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: "products",
        },
      ],
    });

    if (!tagData) {
      res
        .status(404)
        .json({ message: `No tag found for the id : ${req.params.id}` });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [rowsAffected] = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );

    if (rowsAffected) {
      res.status(200).json({ message: "Tag updated successfully" });
    } else {
      res
        .status(404)
        .json({ message: `No tag found for the id : ${req.params.id}` });
    }
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const rowsAffected = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rowsAffected === 0) {
      return res
        .status(404)
        .json({ message: `No tag found for the id : ${req.params.id}` });
    }
    return res.status(200).json({ message: "Tag deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

module.exports = router;
