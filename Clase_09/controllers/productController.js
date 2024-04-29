
import Product from "../models/productModel.js";

async function createProduct( req, res  ){
    try {

        const product = req.body;

        if( product.name.trim() == ''){

        }
        
        const newProduct = new Product(req.body);
        await newProduct.save();

        res.status(200).json({ newProduct});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function getProducts( req, res){
    try {
        
        const products = await Product.find()
        res.status(200).json({ message: 'Ok', data: products});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const getProductsById = async (req, res) => {
    try {
        
        const id = req.params.id;
        const products = await Product.findById(id)
        res.status(200).json({ message: 'Ok', data: products});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}
// Exporto las funciones
export { createProduct, getProducts, getProductsById}