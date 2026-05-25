require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./config/DbConnect");
const productsRoutes = require("./routes/productsRouter");

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use(productsRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// Render Dynamic Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});