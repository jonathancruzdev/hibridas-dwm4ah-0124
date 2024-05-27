
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef, useState } from 'react';

function App() {
  const titulo = <h1>Clase 15 - hooks</h1>
  const materia = 'Aplicaciones Hibridas | 2024';
  let logueado = true;
  const inputRef = useRef(null);
  const [ lista, setLista ] = useState(['Jose', 'Carlos'])
  //const lista = ['José', 'María'];

  /*
    - Recibe el valor inicial;
    - Retornar un arreglo con un variable y un funcion para actualizar el estado
  */
  const [ nombre, setNombre  ] = useState('Hola!')

  const saludar = () =>{
    //alert('Hola!');
    // Modificando el Estado
    setNombre('Hola José');
  }

  function enviar(e){
    e.preventDefault();
    console.log('enviando Formulario');


    console.log(inputRef);
    inputRef.current.focus();
    let nombre =  inputRef.current.value;

    console.log(nombre);

    //console.log( lista);
    //lista.push(nombre)
    //setLista(   lista  )
  
    // limpio el valor
    inputRef.current.value = '';

    console.log(lista);

  }

  return (
    <>
      { titulo  } 
      
      { nombre }

      {
        logueado == true ? (
            <img src={reactLogo} className="logo react" alt="React logo" />
        ) : (
          <h2> No estás logueado</h2>
        )
      }

      <form onSubmit={enviar}>
        <label>Nombre</label>
        <input ref={inputRef}  type="text" />
        <button type='submit'> Enviar</button>
      </form>

      <button onClick={saludar} type='button'> Saluar</button>

      <hr />

      <ul>
        {
          lista.map(  (item, index) => {
            return <li key={index}> {item} </li>
          } )
        }
      </ul>


      <p className="read-the-docs">
        { materia.toUpperCase() }
      </p>
    </>
  )
}

export default App
