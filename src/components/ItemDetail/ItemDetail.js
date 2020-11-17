import React from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

function ItemDetail ( { item } ) {

    const { addItem } = useCartContext();

    return (
            <div className="item-detail-container">
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <img src={item.img} alt='pharmacy' />
                {  <ItemCount stock={10} initial={0} outOfStock={0} addItem={ addItem } item={item} />}
                {  <button><Link to="/cart">Terminar Compra</Link></button>}
            </div>
                )
}

export default ItemDetail;

//function onAdd(quantityToAdd) {
  //  console.log('Items almacenados en setState: ', quantityToAdd)
  //  setState(quantityToAdd === 0 ? true : false);
///}