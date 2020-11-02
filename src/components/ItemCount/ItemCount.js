import React, { useState } from 'react';

function ItemCount( { stock, outOfStock, initial, onAdd } ) { 

    const [count, setCount] = useState(initial);
    
    function increment() { 
        if (count < stock) {
            setCount( count + 1 );
        } else {
            alert('LIMITE DE STOCK DISPONIBLE');
        }
     }

     function decrement() {
         if (count > outOfStock) {
            setCount( count - 1 );
         }
     }

    return <>
        <div>
            <p>Cepillo de dientes</p>
            <div>
                <button onClick={decrement}>-</button>
                <span> { count } </span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(count)} disabled={ stock <= outOfStock || count <= outOfStock  }>Agregar al carrito</button>
        </div>
    </>
 }

 export default ItemCount;

 //  <ItemCount stock={10} initial={0} outOfStock={0} onAdd={ items => alert(`${items} Item(s) agregado(s) al Carrito`) } />