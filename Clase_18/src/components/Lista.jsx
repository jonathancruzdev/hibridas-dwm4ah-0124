const Lista = ( props ) => {
return ( 
    <div className="lista">
        <h4>Usuarios del sistema</h4>
        <ul>
            { props.children }
        </ul>
    </div>
    )
}

export default Lista