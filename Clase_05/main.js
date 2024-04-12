const express = require('express');
const app = express();
const port = 3000;
const products = [
    { id:1, name: 'Mate', price: 230},
    { id:2, name: 'Taza', price: 350},
    { id:3, name: 'Bombilla', price: 500}
]
app.use( express.json() );
// Retorna todos los productos
app.get('/products', (req, res) => {
    res.status(200).json(  products );
    console.log('GET: Products');
})
// Retorna Producto por ID
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json(  products );

    console.log('GET: Product ID ' + id);
})

// Agregar un Producto
app.post('/products', (req, res) => {
    const product = req.body;
    res.status(200).json(  product );

    console.log('POST: Products', product)
})


app.listen( 3000, () =>{
    console.log('Servidor escuchando en el puerto ' + port);
})
