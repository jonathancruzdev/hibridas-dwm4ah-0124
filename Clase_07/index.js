import express from "express";
const app = express();
const port = 3000;


app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send('<h1> CRUD de Productos </h1>');
})

// Retorna todos los productos
app.get('/products', async (req, res) => {
    console.log('GET: Products');

    res.status(200).json(  {} );
})
// Retorna Producto por ID
app.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    console.log('GET: Product ID ' + id);
    res.status(200).json(  {id} );

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
