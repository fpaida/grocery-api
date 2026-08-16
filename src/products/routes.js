const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// GET - Distinct product names for drop-down
router.get("/names", controller.getDistinctProductNames);

// GET - Retrieve one product by product name
router.get("/name/:name", controller.getProductByName);

// GET - All products
router.get("/", controller.getProducts);

// POST - Add product
router.post("/", controller.addProduct);

// PUT - Update product
router.put("/:id", controller.updateProduct);

module.exports = router;