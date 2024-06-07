import { useContext } from "react"
import { DataContext } from "../contexts/dataContext";

import ComponenteB from "./ComponenteB"

const ComponenteA = ( props ) => {
    const {contextData, setContextData }= useContext( DataContext )

    const sumar = (params) => {
        const nuevo = contextData + 1
        setContextData(  nuevo  )
    }
return ( 
        <div className="componente">
            <h2>  Componente A </h2>
            <p> Número {contextData}</p>
            <button onClick={sumar} type="button"> Sumar</button>

            <ComponenteB></ComponenteB>
            
        </div>
    )
}

export default ComponenteA