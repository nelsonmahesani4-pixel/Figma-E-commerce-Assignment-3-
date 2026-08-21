const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());


// Home
app.get("/", (req, res) => {
  res.send("SHOP.CO Backend is running");
});


// GET all products
app.get("/api/products", (req, res) => {

  fs.readFile("./data/products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Error reading products"
      });
    }

    const products = JSON.parse(data);

    res.json(products);
  });

});


// GET single product
app.get("/api/products/:id", (req, res) => {

  fs.readFile("./data/products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Error reading products"
      });
    }

    const products = JSON.parse(data);

    const product = products.find(
      (item) => item.id === Number(req.params.id)
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json(product);
  });

});


// POST product
app.post("/api/products", (req, res) => {

  const newProduct = req.body;

  fs.readFile("./data/products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Error reading products"
      });
    }

    const products = JSON.parse(data);

    products.push(newProduct);

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(products, null, 2),
      (err) => {

        if (err) {
          return res.status(500).json({
            message: "Error saving product"
          });
        }

        res.status(201).json({
          message: "Product added successfully",
          product: newProduct
        });

      }
    );

  });

});


// DELETE product
app.delete("/api/products/:id", (req, res) => {

  const id = Number(req.params.id);

  fs.readFile("./data/products.json", "utf8", (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Error reading products"
      });
    }

    const products = JSON.parse(data);

    const newProducts = products.filter(
      (product) => product.id !== id
    );

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(newProducts, null, 2),
      (err) => {

        if (err) {
          return res.status(500).json({
            message: "Error deleting product"
          });
        }
        res.json({
          message: "Product deleted successfully"
        });

      }
    );

  });

});

app.use("/images", express.static("images"));
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});