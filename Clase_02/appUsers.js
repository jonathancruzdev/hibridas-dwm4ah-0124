function getUsers(){
    return new Promise ( (resolve, reject) => {
        setTimeout(  ()=> {
            const users = [
                {id: 1, name: 'Mateo'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'Rocio'},
                {id: 4, name: 'Julieta'}
            ]
            resolve(users);
        }, 2000)
    })

} 

function getUserByName(name, users){
    return new Promise (  (resolve, reject) => {
        setTimeout( () =>{
            const user = users.find(  item => item.name.toLowerCase() === name.toLowerCase() );
            if( user){
                resolve(user);
            } else {
                reject( new Error('No se encontro el usuario') )
            }
        }, 1000)
    })
    
}

function getPostByUserId(userId){
    return new Promise( (resolve, reject) => {
        setTimeout(  () => {
            const posts = [
                { id:1, userId: 1, title: 'Posteo 1'},
                { id:2, userId: 1, title: 'Posteo 2'},
                { id:3, userId: 2, title: 'Posteo 3'},
                { id:4, userId: 3, title: 'Posteo 4'},
                { id:5, userId: 1, title: 'Posteo 5'}
            ]

            const userPosts = posts.filter( post => post.userId == userId)
            resolve(userPosts);
        }, 2000 )
    })
}



getUsers()
.then( users => {
    console.table(users)
    return users
})
.then( users => {
    return getUserByName('Rocio', users)
})
.then( user => {
    console.log(user)
})
.catch( error => {
    console.error(error)
})