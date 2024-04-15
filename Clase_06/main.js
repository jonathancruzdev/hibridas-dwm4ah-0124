import express from "express";
import { ProductsManager } from "./Products.js";
const app = express();
const port = 3000;
const manager = new ProductsManager();

app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send('<h1> CRUD de Productos </h1>');
})

// Retorna todos los productos
app.get('/products', async (req, res) => {
    const products = await manager.getProducts();
    console.log( products);
    const data = {
        data: products.data,
        msg: 'ok',
        vesion: '1.2.0'
    }
    res.status(200).json(  data );
    console.log('GET: Products');
})
// Retorna Producto por ID
app.get('/products/:id', async (req, res) => {
    const id = req.params.id;

    const product = await manager.getProductById(id)
    if( product){
        res.status(200).json(  product );
    } else {
        res.status(404).json({data: [], msg:'Product not found'})
    }
    console.log('GET: Product ID ' + id);
})

// Agregar un Producto
app.post('/products', (req, res) => {
    const product = req.body;
    // Llamar al method addProduct(product)
    res.status(200).json(  product );

    console.log('POST: Products', product)
})


app.listen( 3000, () =>{
    console.log('Servidor escuchando en el puerto ' + port);
})
