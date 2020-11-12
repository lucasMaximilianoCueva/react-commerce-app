import React, { useState } from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail ( { item: { name, price, img} } ) {
    const [state, setState] = useState(true);

    function onAdd(quantityToAdd) {
        console.log('Items almacenados en setState: ', quantityToAdd)
        setState(quantityToAdd === 0 ? true : false);
    }

    return (
            <div className="item-detail-container">
                <p>{name}</p>
                <p>${price}</p>
                <img src={img} alt='pharmacy' />
                { state && <ItemCount stock={10} initial={0} outOfStock={0} onAdd={ onAdd } />}
                { !state && <button><Link to="/cart">Terminar Compra</Link></button>}
            </div>
                )
}

export default ItemDetail;