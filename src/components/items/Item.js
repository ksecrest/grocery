const Item = ({ id, inv, price, quantity, healthy, organic, complete, completeUpdate }) => {
    return (
        <li style={ complete ? {...styles.complete} : {} }  
            onClick={ () => completeUpdate(id)}>
            
            <h1>
                {inv},
                ${ price }, 
                    { quantity }</h1>
                <p>
                { healthy ? "healthy" : "not healthy" },
                { organic ? "Organic" : "Not Organic"}</p>
                 
 
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