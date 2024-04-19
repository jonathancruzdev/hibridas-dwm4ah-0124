import express from "express";
import { routerAPI }  from "./routes/index.js";
const app = express();
const port = 3000;


app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send('<h1> CRUD de Productos </h1>');
})

// Llamo al RouterAPI y le paso la aplicación
routerAPI(app);


app.listen( 3000, () =>{
    console.log('Servidor escuchando en el puerto ' + port);
})
