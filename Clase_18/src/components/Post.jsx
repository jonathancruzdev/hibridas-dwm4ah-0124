const Post = ( props ) => {
    const { id, title, body } = props;

    console.log( id, title, body)
return ( 
    <div>
        <h4> { title } </h4>
        <p> { body }</p>
    </div>
)

}

export default Post