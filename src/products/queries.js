const getProducts =
    "SELECT * FROM products ORDER BY product_id ASC";

const getProductsByCategory =
    "SELECT * FROM products WHERE category = $1 ORDER BY product_id ASC";

const getDistinctProductNames =
    "SELECT DISTINCT product_name FROM products ORDER BY product_name ASC";

const getProductByName =
    "SELECT * FROM products WHERE product_name = $1 ORDER BY product_id ASC LIMIT 1";

const addProduct =
    "INSERT INTO products (product_name, category, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *";

const updateProduct =
    "UPDATE products SET product_name = $1, category = $2, price = $3, quantity = $4 WHERE product_id = $5 RETURNING *";

module.exports = {
    getProducts,
    getProductsByCategory,  
    getDistinctProductNames,
    getProductByName,
    addProduct,
    updateProduct
};