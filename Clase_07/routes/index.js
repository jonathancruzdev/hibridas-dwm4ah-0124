// Importamos los Routers 
import usersRouter from 'userRouter.js'
import productsRouter from 'productsRouter.js'


// Está función recibe la apliacación como parámetro de entrada
function routerAPI(app){
	// Definimos los endPoints
    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
}

export default routerAPI;