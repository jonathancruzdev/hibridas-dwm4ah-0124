/*
    2. Rquerir ProductJS
    3. Instanciar el Objeto const manager = new ProductsManager();
    4. Agregar Producot
*/
console.log('APP SERVER');
const express = require('express');
const { ProductsManager } = require('./Products');
const app = express();

app.get('/', (request, response ) => {
    response.send('Hola!');
})

app.get('/contactos', (req, res ) => {
    res.send('<h2> Contactos </h2>');
})

app.get('/productos', (req, res ) => {
    // Saldria desde la DB
    const data = [ {id: 1 , name: 'Tv32', price: 123 }, {id: 2 , name: 'PS4', price: 230 } ]
    res.json(data);
})

app.get('/productos/:id' , (request, response) => {
    
    const id = request.params.id;
    console.log('Id:', id);

    response.json( request.params );
})


app.listen( 3000, () =>{
    console.log('Servidor escuchando en el puerto 3000');
})