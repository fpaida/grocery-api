const db = require("../../db");
const queries = require("./queries");

// GET - Filter products by category
const getProducts = (req, res) => {
    const { category } = req.query;

    if (category) {
        db.query(
            queries.getProductsByCategory,
            [category],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.status(200).json(results.rows);
            }
        );
    } else {
        db.query(queries.getProducts, (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).json(results.rows);
        });
    }
};

// GET - Retrieve distinct product names for drop-down list
const getDistinctProductNames = (req, res) => {
    db.query(queries.getDistinctProductNames, (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results.rows);
    });
};

// GET - Retrieve one product by product name
const getProductByName = (req, res) => {
    const { name } = req.params;

    db.query(
        queries.getProductByName,
        [name],
        (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).json(results.rows[0]);
        }
    );
};

// POST - Add a product
const addProduct = (req, res) => {
    const { product_name, category, price, quantity } = req.body;

    db.query(
        queries.addProduct,
        [product_name, category, price, quantity],
        (error, results) => {
            if (error) {
                throw error;
            }

            res.status(201).json(results.rows[0]);
        }
    );
};

// PUT - Update a product
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);

    const { product_name, category, price, quantity } = req.body;

    db.query(
        queries.updateProduct,
        [product_name, category, price, quantity, id],
        (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).json(results.rows[0]);
        }
    );
};

module.exports = {
    getProducts,
    getDistinctProductNames,
    getProductByName,
    addProduct,
    updateProduct,
    

};