import React from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail ( { item: { name, price, img} } ) {
    return (
            <div className="item-detail-container">
                <p>{name}</p>
                <p>${price}</p>
                <img src={img} alt='pharmacy' />
                <ItemCount stock={10} initial={0} outOfStock={0} onAdd={ items => alert(`${items} Item(s) agregado(s) al Carrito`) } />
            </div>
                )
}

export default ItemDetail;