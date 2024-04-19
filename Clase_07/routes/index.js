// Importamos los Routers 
import usersRouter from './usersRouter.js'
import productsRouter from './productsRouter.js'
import cartRouter from './cartRouter.js'

// Está función recibe la apliacación como parámetro de entrada
export function routerAPI(app){
	// Definimos los endPoints
    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
    app.use('/cart', cartRouter);
}