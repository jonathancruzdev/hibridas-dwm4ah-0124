import express from "express";
import { createProduct, getProducts, getProductsById } from "../controllers/productController.js";
const router = express.Router();

router.use( express.json());

// Retorna todos los productos
router.get('/', getProducts)

// Retorna el producto por ID
router.get('/:id', getProductsById)

// Agregar un Producto
router.post('/', createProduct)

// Actualizar Producto
//router.put('/', updateProduct)

// Eliminar Productos
//router.delete('/:id', deleteProduct)

export default router;