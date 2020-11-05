import React from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail ( { item } ) {
    return <>
        {item.map(i => (<>
            <div className="item-detail-container">
                <p>{i.name}</p>
                <p>${i.price}</p>
                <img src={i.img} alt='pharmacy' />
                <ItemCount stock={10} initial={0} outOfStock={0} onAdd={ items => alert(`${items} Item(s) agregado(s) al Carrito`) } />
            </div>
                </>
            ))}
    </>
}

export default ItemDetail;