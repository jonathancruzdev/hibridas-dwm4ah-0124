// Modelo de Producto
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Es obligatorio el nombre'],
        minlength: [5, 'El nombre de contener 5 caracteres como minimo'],
        maxlength: 64
    },
    price: Number,
    stock: Number,
    img: String
})


const Product = mongoose.model('Product', productSchema);
// Exporto el Objeto Product

export default Product