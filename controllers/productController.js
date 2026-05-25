const Product = require('../models/Product');


// CREATE PRODUCT

exports.createProduct = async(req,res)=>{

    try {

        const products = await Product.insertMany(req.body);

        res.send(products);

    } catch (error) {

        res.send(error);

    }

};


// GET ALL PRODUCTS

exports.getProducts = async(req,res)=>{

    try {

        const products = await Product.find();

        res.send(products);

    } catch (error) {

        res.send(error);

    }

};



// GET SINGLE PRODUCT

exports.getSingleProduct = async(req,res)=>{

    try {

        const product = await Product.findById(req.params.id);

        res.send(product);

    } catch (error) {

        res.send(error);

    }

};



// UPDATE PRODUCT

exports.updateProduct = async(req,res)=>{

    try {

        const product = await Product.findByIdAndUpdate(

            req.params.id,
            req.body,
            { returnDocument:'after' }

        );

        res.send(product);

    } catch (error) {

        res.send(error);

    }

};



// DELETE PRODUCT

exports.deleteProduct = async(req,res)=>{

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.send("Product Deleted");

    } catch (error) {

        res.send(error);

    }

};