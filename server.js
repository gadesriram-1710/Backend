const express = require('express');
const app = express();

const cors = require('cors');

const connectDB = require('./config/DbConnect');
const productsRoutes = require('./routes/productsRouter');

app.use(express.json());


connectDB();

app.use(productsRoutes);

app.listen(5000,()=>{
   console.log("server started");
});
