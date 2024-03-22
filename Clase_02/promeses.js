function opAsincrona(numero){
    return new Promise ( (resolve, reject) => {
        setTimeout( ()=>{
            if( isNaN( numero )){
                reject( new Error('Paramerto invalido'));
            } else {
                const resultado = numero * 2;
                resolve(resultado);
            }
        },4000 )
    })

}



console.log('Inicio del programa');
opAsincrona('dasds')
.then( resp => {
    console.log(resp)
    console.log('FIN del Programa');
}).catch( error => {
    console.error(error);
})
