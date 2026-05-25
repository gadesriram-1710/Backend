require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

// Dummy Products Data
const products = [
  {
    id: 1,
    title: "Laptop",
    price: 50000,
    category: "Electronics",
  },
  {
    id: 2,
    title: "Mobile",
    price: 20000,
    category: "Electronics",
  },
  {
    id: 3,
    title: "Shoes",
    price: 3000,
    category: "Fashion",
  },
];

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Backend Running Successfully",
  });
});

app.get("/products", (req, res) => {
  res.json(products);
});

// Port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});