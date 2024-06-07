import { useContext } from "react";
// importar el context
import { DataContext } from "../contexts/dataContext";


const ComponenteC = ( props ) => {
    const { contextData, setContextData }= useContext( DataContext )

    const sumar = (params) => {
        console.log('Sumar')
        const nuevo = contextData + 1
        setContextData(  nuevo  )
    }
    return ( 
            <div className="componente">
                <h2>  Componente C </h2>
                <p>Número { contextData } </p>
                <button onClick={sumar} type="button"> Sumar</button>
            </div>
        )
    }
    
    export default ComponenteC