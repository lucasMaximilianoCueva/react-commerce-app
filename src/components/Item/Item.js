import React from 'react';
import './Item.scss';

function Item ( { item } ) {  
    return <>
        {item.map(i => (<>
            <div className="item-container">
                <p>{i.name}</p>
                <p>${i.price}</p>
            </div>
                </>
            ))}
    </>
}

export default Item;