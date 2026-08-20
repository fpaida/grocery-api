# CMPS262 Grocery API Backend

## Description

This project is the backend API for the Grocery Web Application I developed for CMPS262 at Point Park University.

The API was built with Node.js, Express, and PostgreSQL. It allows the frontend application to retrieve grocery products, filter products by category, add new products, and update existing products.

The main goal of this project was to learn how a frontend application communicates with a backend REST API and how the API interacts with a PostgreSQL database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [API Documentation](#api-documentation)
- [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [Authentication and Security](#authentication-and-security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Course](#course)
- [Project Links](#project-links)

## Features

- Retrieve all grocery products
- Filter products by category
- Retrieve distinct product names
- Retrieve a product by its name
- Add new grocery products
- Update existing grocery products
- Store product data in PostgreSQL
- Return product information in JSON format
- Accept requests from the frontend using CORS
- Run locally or as a deployed API on Render

## Technologies

The backend was built using:

- Node.js
- Express.js
- PostgreSQL
- `pg` for PostgreSQL connections
- CORS
- dotenv
- REST API
- Render
- Git
- GitHub

## Installation and Setup

### Requirements

Before running the API locally, you need:

- Node.js
- npm
- PostgreSQL
- Git

### Clone the Repository

```bash
git clone https://github.com/fpaida/grocery-api.git
cd grocery-api
```

### Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

The main dependencies used by this project are:

```text
cors
dotenv
express
pg
```

### Environment Variables

The application uses environment variables for the PostgreSQL database connection.

The database credentials should be stored in an environment file and should not be committed to GitHub.

### Start the API

Run:

```bash
npm start
```

The application uses port `8003` when running locally unless a different port is provided through the `PORT` environment variable.

The local API can then be accessed at:

```text
http://localhost:8003/api/v1/products
```

## API Documentation

The base route for the product API is:

```text
/api/v1/products
```

### GET All Products

```http
GET /api/v1/products
```

Returns all grocery products from the PostgreSQL database ordered by product ID.

Example response:

```json
[
  {
    "product_id": 1,
    "product_name": "Bananas",
    "category": "Produce",
    "price": "2.99",
    "quantity": 20
  }
]
```

### GET Products by Category

```http
GET /api/v1/products?category=Produce
```

The optional `category` query parameter can be used to return products from a specific category.

For example:

```text
/api/v1/products?category=Produce
```

### GET Distinct Product Names

```http
GET /api/v1/products/names
```

Returns the distinct product names stored in the database.

This endpoint is used by the frontend to create the product drop-down list on the Update Data page.

Example response:

```json
[
  {
    "product_name": "Apples"
  },
  {
    "product_name": "Bananas"
  }
]
```

### GET Product by Name

```http
GET /api/v1/products/name/:name
```

Returns one product that matches the product name.

For example:

```text
GET /api/v1/products/name/Bananas
```

The frontend uses this endpoint to retrieve the current information for a product selected from the update drop-down.

### POST Add Product

```http
POST /api/v1/products
```

Adds a new grocery product to the PostgreSQL database.

Example request body:

```json
{
  "product_name": "Bananas",
  "category": "Produce",
  "price": 2.99,
  "quantity": 20
}
```

A successful request returns the newly created product with HTTP status `201`.

### PUT Update Product

```http
PUT /api/v1/products/:id
```

Updates an existing grocery product using its product ID.

Example:

```text
PUT /api/v1/products/1
```

Example request body:

```json
{
  "product_name": "Bananas",
  "category": "Produce",
  "price": 3.49,
  "quantity": 25
}
```

A successful request returns the updated product with HTTP status `200`.

## Database Setup

The API uses PostgreSQL to store grocery product information.

The `products` table used by the API contains the following fields:

| Field | Purpose |
| --- | --- |
| `product_id` | Unique ID for each product |
| `product_name` | Name of the grocery product |
| `category` | Product category |
| `price` | Product price |
| `quantity` | Product quantity |

The API uses parameterized PostgreSQL queries when working with user-provided values.

For example, a new product is inserted using:

```sql
INSERT INTO products
(product_name, category, price, quantity)
VALUES ($1, $2, $3, $4)
RETURNING *;
```

The numbered parameters are replaced with the values received by the API.

The database connection is configured in:

```text
db.js
```

## Project Structure

```text
grocery-api/
├── db.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── src/
    └── products/
        ├── controller.js
        ├── queries.js
        └── routes.js
```

### Main Files

**server.js**

Creates the Express application, enables CORS and JSON request handling, and connects the product routes to `/api/v1/products`.

**db.js**

Contains the PostgreSQL database connection configuration.

**routes.js**

Defines the API routes for GET, POST, and PUT requests.

**controller.js**

Handles incoming requests, communicates with the database, and sends JSON responses back to the client.

**queries.js**

Contains the SQL queries used to retrieve, insert, filter, and update grocery products.

## Authentication and Security

This version of the Grocery API does not currently require user authentication.

The API uses CORS so that the frontend web application can communicate with the backend.

Express JSON middleware is also used to process JSON request bodies:

```javascript
app.use(cors());
app.use(express.json());
```

The PostgreSQL queries use parameterized values such as `$1`, `$2`, and `$3` instead of placing user input directly into SQL queries.

Database credentials and other sensitive configuration should be stored in environment variables and should not be committed to the GitHub repository.

Authentication such as JWT or API keys could be added in a future version if the application is expanded.

## Deployment

The Grocery API is deployed on Render.

The live API is available at:

```text
https://grocery-api-o3m1.onrender.com/api/v1/products
```

The application uses:

```javascript
const port = process.env.PORT || 8003;
```

This allows Render to provide the production port while the application can still use port `8003` during local development.

Changes are tracked with Git and pushed to GitHub:

```bash
git add .
git commit -m "Update Grocery API"
git push origin main
```

The GitHub repository is connected to the deployed backend project.

## Contributing

This project was created for my CMPS262 coursework, but contributions can be made using the normal GitHub workflow.

1. Fork the repository.
2. Clone the repository.
3. Create a new branch.
4. Make and test the changes.
5. Commit the changes.
6. Push the branch to GitHub.
7. Create a pull request.

When making changes, use clear commit messages and test the API before submitting a pull request.

## License

This project was created for educational purposes as part of my CMPS262 coursework at Point Park University.

This project is licensed under the MIT License.

## Author

Fabrice Paida  
Applied Computer Science - Networking & Security  
Point Park University

## Course

**Course:** CMPS262  
**Instructor:** Professor Jeff Seaman  
**Institution:** Point Park University  
**Semester:** Summer 2026

## Project Links

**Backend Repository:**  
https://github.com/fpaida/grocery-api

**Live Grocery API:**  
https://grocery-api-o3m1.onrender.com/api/v1/products

**Frontend Repository:**  
https://github.com/fpaida/web

**Live Web Application:**  
https://fpaida.github.io/web/