import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const getItemDetail = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            const items = [{ id: 1, name: "Nebulizador A Pistón", price: 6000, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 2, name: "Termómetro Infrarrojo", price: 7000, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 3, name: "Oxímetro De Pulso", price: 6500, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 4, name: "Tensiómetro con Estetoscopio", price: 3500, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }]
            res(items.find(i => `${i.id}` === id));
        }, 2000);
    })
};

function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log('to id ', id); 
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