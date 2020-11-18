import React, { useState } from 'react';
import './ItemCount.scss';

function ItemCount( { stock, outOfStock, initial, addItem, item, killerButton } ) { 

    const [quantity, setCount ] = useState(initial);
    
    function increment() { 
        if (quantity < stock) {
            setCount( quantity + 1 );
        } else {
            alert('LIMITE DE STOCK DISPONIBLE');
        }
     }

     function decrement() {
         if (quantity > outOfStock) {
            setCount( quantity - 1 );
         }
     }
     
    return <>
            <div className="counter">
                <button className="btn btn--skew btn-default" onClick={decrement}>-</button>
                <span className="count"> { quantity } </span>
                <button className="btn btn--skew btn-default" onClick={increment}>+</button>
            </div>
            <div className="add-button">
                <button className="btn btn--skew btn-default" onClick={() => addItem(item, quantity, killerButton)} disabled={ stock <= outOfStock || quantity <= outOfStock  }>
                    <span>Agregar</span>
                </button>
            </div>
    </>
 }

 export default ItemCount;

 //  <ItemCount stock={10} initial={0} outOfStock={0} onAdd={ items => alert(`${items} Item(s) agregado(s) al Carrito`) } />