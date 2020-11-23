import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.scss';
import {getFirestore} from '../../firebase';
import { useParams } from 'react-router-dom';


function ItemListContainer( {subtitle} ) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        let itemCollection = db.collection("items");
        
        if(categoryId) {
            itemCollection = itemCollection.where('categoryId', '==', categoryId);
        }

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('no results');
            };
        setItems(
            querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
        setLoading(false);
        });
    }, [categoryId]);

    return ( <>
        <div className="item-list-title">
            <h1>{subtitle}</h1>
        </div>
        <div className="items-container">
        {loading &&<div id="loading"></div>}
        {!loading &&<ItemList items={ items } />}
        </div>
          
    </>
    );
}

export default ItemListContainer;

//const getItem = new Promise((res) => {
//    setTimeout(() => {
 //     res(
 //       [{ id: 1, name: "Nebulizador A Pistón", price: 6000, img: "https://www.farmacialeloir.com.ar/img/articulos/san_up_nebulizador_ultrasonico_micron_3058_imagen1.jpg" }, { id: 2, name: "Termómetro Infrarrojo", price: 7000, img: "data:image/jpeg;base64,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" }, { id: 3, name: "Oxímetro De Pulso", price: 6500, img: "https://www.anikashop.com.ar/product_images/z/219/oximetro-de-pulso-a310-san-up-adultos-y-ninos-mundo-manias-D_NQ_NP_921325-MLA25815053234_072017-F__93167_std.jpg" }, { id: 4, name: "Tensiómetro con Estetoscopio", price: 3500, img: "https://farmaciasdelpueblo.vteximg.com.br/arquivos/ids/155617/Imagen.jpg?v=637209441926100000" }]
 //       );
 //   }, 1500);
 // });