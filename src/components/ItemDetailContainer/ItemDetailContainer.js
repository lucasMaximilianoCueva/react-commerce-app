import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const getItemDetail = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({items});
          }, 2000);
        });
}

function ItemDetailContainer ( {items} ) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getItemDetail.then(
            itemDetail => {
                setItem(itemDetail);
            }
        )
    }, []);

    return ( <>
        
        <ItemDetail item={ item } />

    </>
    );
}

export default ItemDetailContainer;