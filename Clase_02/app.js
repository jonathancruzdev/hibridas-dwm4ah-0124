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


 async function realizarOperacion() {
    try {
        const resultado = await opAsincrona('jaja');
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }

}

realizarOperacion();

