import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Post from './components/Post'
import Lista from './components/Lista';
import Item from './components/Item';

import { DataContextProvider } from './contexts/dataContext';

import ComponenteA from './components/ComponenteA';

function App() {
  
  const [ users, setUsers ] = useState([]);
  const [ posts, setPost] = useState([]);
  const [ filtro, setFiltro] = useState('');
  const [ loading, setLoading] = useState(true);
  const [ msg, setMsg ] = useState('');
  // funcion que se ejecuta, array de dependencia
  useEffect(  () => {
    fetchAPI();
  }, [filtro] )

  const fetchAPI = async () => {

    const endPoint = 'http://localhost:3000/users';
    
    try {
      const response = await fetch( endPoint );
      const data = await response.json();
      if( data.message != 'Ok'){
        setMsg('No se pudo completar la solicitud');
      }
      const users = data.data;
      console.log(users);
      
      setUsers(users)
    } catch (error) {
      console.error(error);
      setMsg('Upss ocurrio un error en el Servidor 😒');
    }
  }
  



  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Context</h1>
      
      <DataContextProvider>
        <ComponenteA></ComponenteA>
        <ComponenteA></ComponenteA>
        <ComponenteA></ComponenteA>

      </DataContextProvider>



      <hr />
      {/* <Item name="Carlos" email="carlos@mail.com" />  */}
      <Lista>
        {
          users.map( user => (
            <Item key={user._id} name={user.name} email={user.email} /> 
          ))
        }
        
        

      </Lista>
      {
        posts.map(  post => (
          <Post title={post.title} body={post.body} id={2} />
        ) )
      }
      <p className="read-the-docs">
        { msg}
      </p>
      <p className="read-the-docs">
        Aplicaciones Híbridas
      </p>
    </>
  )
}

export default App
