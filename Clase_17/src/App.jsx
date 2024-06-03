import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Post from './components/Post'


function App() {
  const [posts, setPost] = useState([]);
  const [ filtro, setFiltro] = useState('');

  const [ loading, setLoading] = useState(true);

  // funcion que se ejecuta, array de dependencia
  useEffect(  () => {
    fetchAPI();


  }, [filtro] )

  const fetchAPI = async () => {
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch( endPoint );
    const data = await response.json();

    
    setPost(data)

  }
  



  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useEffect</h1>
   
    
      <hr />

      {
        posts.map(  post => (
          <Post title={post.title} body={post.body} id={2} />
        ) )
      }

      


      <p className="read-the-docs">
        Aplicaciones Híbridas
      </p>
    </>
  )
}

export default App
