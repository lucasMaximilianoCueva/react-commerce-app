import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const getItemDetail = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            const item = { id: 1, name: "Nebulizador A Pistón", price: 6000, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" };
            res(item);
        }, 2000);
    })
};

function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getItemDetail(id).then(
            res => {
                setItem(res);
            }
        )
    }, [id]);

    return ( <>
        
        <ItemDetail item={ item } />

    </>
    );
}

export default ItemDetailContainer;