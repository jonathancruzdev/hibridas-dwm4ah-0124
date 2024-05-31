const Hijo = (props) => {
    const { nombre, fecha, numero, actualizarMensaje } = props;
    console.log( numero , typeof( numero) );
    console.log( nombre , typeof( nombre) );
    console.log( actualizarMensaje, typeof( actualizarMensaje))

    const enviarMensaje = () =>{
        actualizarMensaje( `Mensaje desde el Hijo ${numero}` );
    }

    return (
        <>
            <h2> {numero} { nombre }</h2>
            <h4> { fecha }</h4>
            <button onClick={enviarMensaje} type="button"> Mensaje al Padre </button>
        </>

    )
}

export default Hijo