function opAsincrona(numero, callback){

    setTimeout( ()=>{
        const r = numero *2;
        callback(r);
    },4000 )
}

function mostrar( resultado){
    console.log(resultado);
}

console.log('Inicio del programa');
const resultado = opAsincrona(2, mostrar );

console.log('FIN del Programa');