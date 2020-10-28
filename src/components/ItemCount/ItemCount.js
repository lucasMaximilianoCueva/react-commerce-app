import React, { useState } from 'react';

function ItemCount( { stock, outOfStock, initial } ) { 

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

     function onAdd() {
        alert(`${count} Item(s) agregado(s)`);
     }

    return <>
        <div>
            <p>Cepillo de dientes</p>
            <div>
                <button onClick={decrement}>-</button>
                <span> { count } </span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={onAdd} disabled={ stock <= outOfStock || count <= outOfStock ? true : false }>Agregar al carrito</button>
        </div>
    </>
 }

 export default ItemCount;