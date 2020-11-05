import React, { useState, useEffect } from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';

const itemTask = new Promise((res) => {
      setTimeout(() => {
        res(
          [{ id: 1, name: "Nebulizador A Pistón", price: 6000, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 2, name: "Termómetro Infrarrojo", price: 7000, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 3, name: "Oxímetro De Pulso", price: 6500, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }, { id: 4, name: "Tensiómetro con Estetoscopio", price: 3500, img: "https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" }]
          );
      }, 1500);
    });


function ItemListContainer( {subtitle} ) {
    const [list, setList] = useState([]);

    useEffect(() => {
        itemTask.then(
            products => {
                setList(products);
            }
        )
    }, []);

    return ( <>
        <h1>{subtitle}</h1>
        <ItemList items={ list } />
        <ItemDetailContainer items={ list } />

    </>
    );
}

export default ItemListContainer;