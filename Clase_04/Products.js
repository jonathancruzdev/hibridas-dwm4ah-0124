// Mi modelo de Datos
/*
    - Un arreglo con la lista de Productos
    - addProduct( product ) : Recibe un objeto product
    - getProducts (): retorna el arreglo de products
    - getProductById( id) : Retorna el product por id  
*/
const fs = require('fs/promises');

// list = [ {id: 1 , name: 'Tv32', price: 123 }, {id: 2 , name: 'PS4', price: 230 } ]

class ProductsManager {
    path = 'data.json';
    
    constructor(){
        this.list = [];

    }
    // Lee el Json Local y los asigna al list;
    readJSON(){

    }
    // Guarda en formato JSON el arreglo this.list
    saveJSON(){

    }
    // {id: 1 , name: 'Tv32', price: 123}
    addProduct( product ){
        const { name, price, pic} = product;
        const lastProduct = this.list.length;
        const id = lastProduct + 1
        this.list.push({
            name,
            price,
            pic
        });

        this.saveJSON();
    }
    getProducts(){
        return this.list;
    }
    // Buscar el producto por id y retorna
    getProductById( id){

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

// 1. Exportar