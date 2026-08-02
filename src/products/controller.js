const db = require("../../db");
const queries = require("./queries");

// Get all products
const getProducts = (req, res) => {
    db.query(queries.getProducts, (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results.rows);
    });
};

module.exports = {
    getProducts,
};