import express from "express";

export const router = express.Router();


// Retorna todos los productos
router.get('/', async (req, res) => {
    console.log('GET: Products');
    res.status(200).json(  {msg: 'GET Products'} );
})
// Retorna Producto por ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('GET: Product ID ' + id);
    res.status(200).json(  {msg: id} );

})

// Agregar un Producto
router.post('/', (req, res) => {
    const product = req.body;
    res.status(200).json(  product );
    console.log('POST: Products', product)
})

// Actualizar Producto
router.put('/', async (req, res) => {
    const product = req.body;
    res.status(200).json(  {msg:  product} );
    console.log('PUT: Products', product)
})

// Eliminar Productos
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('DELETE: Product ID ' + id);
    res.status(200).json(  {msg: id} );
})

