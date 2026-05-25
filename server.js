require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/DbConnect");
const productRoutes = require("./routes/productsRouter");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", productRoutes);

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});