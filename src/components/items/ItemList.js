import Item from './Item';
const ItemList = ({ items, name, completeUpdate }) => {
    return (
        <>
            
            {/* <div style="text-align:center;"> */}
            <h1>{name}</h1>
            <div className="row"></div>
           

            <ol>
                {
                    items.map( i =>
                        <Item {...i} completeUpdate={completeUpdate} />
                        // item title={i.title} id={i.id}, complete={i.complete}
                        )
                }
            </ol>
        </>
    )
}

export default ItemList;
