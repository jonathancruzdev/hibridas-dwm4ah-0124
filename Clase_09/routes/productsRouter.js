import express from "express";
import { createProduct, getProducts, getProductById, deleteProductById, updateProductById } from "../controllers/productController.js";
const router = express.Router();

router.use( express.json());

// Retorna todos los productos
router.get('/', getProducts)

// Retorna el producto por ID
router.get('/:id', getProductById)

// Agregar un Producto
router.post('/', createProduct)

// Actualizar Producto
router.put('/:id', updateProductById)

// Eliminar Productos
router.delete('/:id', deleteProductById)

export default router;