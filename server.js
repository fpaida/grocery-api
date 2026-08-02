const express = require("express");
const cors = require("cors");

const productRoutes = require("./src/products/routes");

const app = express();
const port = 8003;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Grocery API");
});

app.use("/api/v1/products", productRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});