const express = require('express');

const router = express.Router();

const {

    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct

} = require('../controllers/productController');


// CREATE

router.post('/products/add', createProduct);


// GET ALL

router.get('/', getProducts);


// GET SINGLE

router.get('/products/:id', getSingleProduct);


// UPDATE

router.put('/products/update/:id', updateProduct);


// DELETE

router.delete('/products/:id', deleteProduct);


module.exports = router;