const Item = ( props ) => {
    const { id, name, email } = props;
return ( 
    <li className="item"> { name } | { email } </li>
    )
}

export default Item