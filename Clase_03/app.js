const modulo = require('./utiles');
const fs = require('fs/promises');
const os = require('os');

console.log('Plataforma '+ os.platform() );
console.log('CPU ' + os.cpus().length);


fs.readFile('notas.txt').then( data => {
    console.log(data.toString)
})

// Para usar el fs en lectura
 async function leer() {
    const data = await fs.readFile('notas.txt');
    const texto = data.toString();
    console.log(texto);

    const nuevoTexto = texto + ' Nuevo contenido';
    fs.writeFile('notas.txt', nuevoTexto);
}


// Version con callback

fs.readFile('notas.txt', function( error, data ) {
    if( error ){
        console.error(error);
    } else {
        console.log(data.toString())
    }
});



const users = [
    {id:1, name: 'Juan'},
    {id:2, name: 'Lucas'},
    {id:3, name: 'Zoe'},
]

modulo.mostrar( users )

leer();
