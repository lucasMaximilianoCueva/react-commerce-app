import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const getItem = new Promise((res) => {
      setTimeout(() => {
        res(
          [{ id: 1, name: "Nebulizador A Pistón", price: 6000, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 2, name: "Termómetro Infrarrojo", price: 7000, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 3, name: "Oxímetro De Pulso", price: 6500, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 4, name: "Tensiómetro con Estetoscopio", price: 3500, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }]
          );
      }, 1500);
    });


function ItemListContainer( {subtitle} ) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItem.then(
            products => {
                setItems(products);
            }
        )
    }, []);

    return ( <>
        <h1>{subtitle}</h1>
        <ItemList items={ items } />
    </>
    );
}

export default ItemListContainer;
