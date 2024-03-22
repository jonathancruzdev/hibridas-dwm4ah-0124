// Creamos una clases UseManager
/*
    - un arreglo con la lista de usuario
    - addUser( user ) : Recibe un objeto usuario
    - getUsers (): retorna el arreglo de usuarios
    - getUserById( id) : Retorna el usuario por id  
*/
// { id: 1, name: 'Juan', email: 'juan@mail.com'}
class UserManager {
    constructor( list ){
        this.list = list;
    }

    addUser( user ){
        this.list.push( user );
    }
    getUsers(){
        return this.list;
    }
    
    getUserById( id){

    }
}

const manager = new UserManager([]);

manager.addUser({
    id: 1,
    name: 'Lucas',
    email: 'lucas@mail.com'
})

manager.addUser({
    id: 2,
    name: 'Rocio',
    email: 'rocio@mail.com'
})

console.table( manager.getUsers( ));