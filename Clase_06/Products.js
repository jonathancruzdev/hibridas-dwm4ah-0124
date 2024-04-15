// Mi modelo de Datos
//const fs = require('fs/promises');
import fs from 'fs/promises';

export class ProductsManager {
    path = 'productos.json';
    static lastId = 1;
    
    constructor(){
        this.list = [];
    }
    // Guarda en formato JSON el arreglo this.list
    async saveJSON(){
        const dataString = JSON.stringify( this.list);
        await fs.writeFile( this.path, dataString, null, 2 );
    }
    addProduct( product ){
        const { name, price } = product;

        if(  !name ) {
            return 'Falta el campo Nombre';
        }

        if(  !price ) {
            return 'Falta el campo Precio';
        }

        const id = this.lastId
        this.list.push({
            id,
            name,
            price
        });

        this.saveJSON();
        this.lastId + 1
    }
    async getProducts(){
        try {
            const res = await fs.readFile( this.path, 'utf-8' );
            const products = JSON.parse( res);
            this.list = products;
            return this.list;

        } catch (error) {
            console.error('Error', error)
            return {'status': 500 }
        }


    }
    // Buscar el producto por id y retorna
    async getProductById( id ){
        try {
            const res = await fs.readFile( this.path, 'utf-8' );
            const products = await JSON.parse( res);
            const product = products.data.find( item => item.id == id );
            return product;

        } catch (error) {
            console.error('Error', error)
            return error
        }
    }
    // Buscar el producto por id y actulizar los campos
    updateProduct( id, product ){


        this.saveJSON();
    }
    // Busca el producto por y lo elimina
    deleteProduct( id){

        this.saveJSON();
    }
}
