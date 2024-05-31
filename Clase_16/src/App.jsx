import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// importo los componentes
import Hijo from './components/Hijo.jsx';

function App() {
  const [mensaje, setMensaje] = useState('Estado del Padre')

  const actualizarMensaje = ( nuevo ) => {
    setMensaje(nuevo);
  }

  return (
    <>
      <div>

        <a href="https://es.react.dev/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Comunicación entre componentes</h1>
      <h4>{ mensaje }</h4>
      <Hijo nombre="Hijo 1" fecha="30-05-2024" numero={1} actualizarMensaje={actualizarMensaje} />
      <Hijo nombre="Hijo 2" fecha="31-05-2024" numero={2} actualizarMensaje={actualizarMensaje}/>
      <Hijo 
        nombre="Hijo 3" 
        fecha="01-06-2024" 
        numero={3}
        actualizarMensaje={actualizarMensaje}
      />

2      <p className="read-the-docs"> numero={3}
        Aplicaciones Híbridas - 2024 
      </p>
    </>
  )
}

export default App
