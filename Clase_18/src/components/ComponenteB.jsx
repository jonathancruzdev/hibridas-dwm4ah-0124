import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";

import ComponenteC from "./ComponenteC"
const ComponenteB = ( props ) => {
    const {contextData, setContextData } = useContext( DataContext )

    
    return ( 
            <div className="componente">
                <h2>  Componente B  </h2>
                <p> Número {contextData}</p>
                <ComponenteC></ComponenteC>
            </div>
        )
    }
    
    export default ComponenteB