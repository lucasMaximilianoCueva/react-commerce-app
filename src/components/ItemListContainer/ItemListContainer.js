import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer( { subtitle } ) {

    return ( <>
        <h1>
            {subtitle}
        </h1>
        <ItemCount stock={10} initial={0} outOfStock={0} onAdd={ items => alert(`${items} Item(s) agregado(s) al Carrito`) } />
    </>
    );
}

export default ItemListContainer;