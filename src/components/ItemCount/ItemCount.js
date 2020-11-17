import React, { useState } from 'react';

function ItemCount( { stock, outOfStock, initial, addItem, item, killerButton } ) { 

    const [quantity, setCount] = useState(initial);
    
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
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <span> { quantity } </span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => addItem(item, quantity, killerButton)} disabled={ stock <= outOfStock || quantity <= outOfStock }>Agregar al carrito</button>
        </div>
    </>
 }

 export default ItemCount;

 //  <ItemCount stock={10} initial={0} outOfStock={0} onAdd={ items => alert(`${items} Item(s) agregado(s) al Carrito`) } />