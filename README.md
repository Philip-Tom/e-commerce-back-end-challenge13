# E-commerce Back End

This repository contains the back end for an e-commerce website built using Express.js API and Sequelize ORM to interact with a MySQL database.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Product Routes](#product-routes)
  - [Category Routes](#category-routes)
  - [Tag Routes](#tag-routes)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

Internet retail, also known as e-commerce, is a significant sector within the industry. This project aims to provide a functional back end for an e-commerce website using the latest technologies. The back end allows for the creation, reading, updating, and deletion `(CRUD)` operations on categories, products, and tags.

## Installation

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/Philip-Tom/e-commerce-back-end-challenge13.git
   ```
2. Install dependencies by running
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:

   ```b
   DB_NAME=your_db_name
   DB_USER=db_username
   DB_PW=db_password
   ```

4. Create the database using the schema provided in `db/schema.sql`.
5. Seed the database by running
   ```bash
   npm run seed
   ```

## Usage

1. Start the server by running 
    ```bash
    npm start
    ```
2. Use Insomnia Core or similar tools to test the API routes:

- `GET` routes for categories, products, and tags.
- `POST`, `PUT`, and `DELETE` routes for categories, products, and tags.

## API Endpoints

### Product Routes

- `GET /api/products`: Returns a list of all products, including their associated categories and tags.
- `GET /api/products/:id`: Returns a single product by ID, including its associated category and tags.
- `POST /api/products`: Creates a new product. Request body example:
  ```json
  {
    "product_name": "Basketball",
    "price": 200.0,
    "stock": 3,
    "tagIds": [1, 2, 3, 4]
  }
  ```
- `PUT /api/products/:id` : Updates a product by ID.
- `DELETE /api/products/:id` : Deletes a product by ID.

### Category Routes

- `GET /api/categories`: Returns a list of all categories, including their associated products.
- `GET /api/categories/:id`: Returns a single category by ID, including its associated products.
- `POST /api/categories`: Creates a new category. Request body example:
  ```json
  {
    "category_name": "New Category"
  }
  ```
- `PUT /api/categories/:id`: Updates a category by ID.
- `DELETE /api/categories/:id`: Deletes a category by ID.

### Tag Routes

- `GET /api/tags`: Returns a list of all tags, including their associated products.
- `GET /api/tags/:id`: Returns a single tag by ID, including its associated products.
- `POST /api/tags`: Creates a new tag. Request body example:
  ```json
  {
    "tag_name": "New Tag"
  }
  ```
- `PUT /api/tags/:id`: Updates a tag by ID.
- `DELETE /api/tags/:id`: Deletes a tag by ID.


## Walkthrough Video

https://github.com/Philip-Tom/e-commerce-back-end-challenge13/assets/147503829/1a31df72-a844-459e-bcce-290467bc83d0



## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.

## Questions

If you have any questions or need further assistance, feel free to reach out:

- GitHub: [Philip-Tom](https://github.com/Philip-Tom/)
