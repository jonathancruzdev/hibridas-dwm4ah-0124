import reactLogo from './assets/react.svg'
import archivoJSX from './assets/jsx.png'

function App() {
  const titulo = <h1> Introducción a React</h1>
  const texto = 'texto generico';
  let numero = 1;
  let logueado  = true;

  const personas = [
    { id:1, name: 'José', mail: 'jose@gmail.com' },
    { id:2, name: 'Lucas', mail: 'lucas@gmail.com' },
    { id:3, name: 'Sofia', mail: 'sofia@gmail.com' }
  ]
  return (
    <>
      {titulo}
      <p> { texto.toUpperCase() } </p>

      <p> { numero +1  }</p>

      <p> { sumarNumero(2) }   </p>

      <button  onClick={guardar}  className='btn'  type="button"> Guardar  </button>


      <img src={archivoJSX} className="responsive" title={texto} alt="Logo"  height="128  " />
      <hr />
      <img src={reactLogo} className="logo" alt="Vite logo" />

      <hr />
      <h2>Renderizado de Listas</h2>
      {
        // Bloque de Código JS
        personas.map( persona => {
          return <p key={persona.id}> {persona.name } - { persona.mail} </p>
        })
      }

      <hr />

      {
        // Bloque de código JS
        logueado == true ? (
          <h2>Bienvenido</h2>
        ) : (
          <h2> Acceso restringido</h2>
        )
      }

    </>
  )
}




function sumarNumero(numero){
  return numero + 10
}

function guardar(){
  const fecha = new Date().toLocaleDateString();
  localStorage.setItem('fecha',  fecha );
  console.log(fecha);
}

export default App
