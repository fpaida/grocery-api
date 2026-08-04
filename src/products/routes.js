const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// GET
router.get("/", controller.getProducts);

// POST
router.post("/", controller.addProduct);

// PUT
router.put("/:id", controller.updateProduct);

module.exports = router;