const Item = ({ id, inv, price, quantity, healthy, complete, completeUpdate }) => {
    return (
        <li 
            style={ complete ? {...styles.complete} : {} }  
            onClick={ () => completeUpdate(id)} 
        >
            { inv }, ${ price }, { quantity } items {healthy}
        </li>
    )

}

    const styles = {
        complete : {
            color: 'grey',
            textDecoration: 'line-through'
        }
    }

    export default Item;