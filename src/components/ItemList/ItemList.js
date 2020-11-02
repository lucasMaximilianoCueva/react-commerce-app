import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item';

function ItemList ( { items } ) {
    return <>
        <div className="item-list-container">
            <Item item={items} />
        </div>
    </>
}

export default ItemList;