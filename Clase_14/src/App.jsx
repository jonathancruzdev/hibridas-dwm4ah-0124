import reactLogo from './assets/react.svg'
import archivoJSX from './assets/jsx.png'

function App() {
  const titulo = <h1> Introducción a React</h1>
  return (
    <>
      {titulo}
      <img src={archivoJSX} className="responsive" alt="Logo" />
      <hr />
      <img src={reactLogo} className="logo" alt="Vite logo" />
    </>
  )
}

export default App
