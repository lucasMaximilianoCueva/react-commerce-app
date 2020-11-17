import React from 'react';
import { useCartContext } from '../../context/cartContext';
import './Cart.scss';

function Cart () { 

    const { cart, removeItem, clear } = useCartContext();

    console.log('cart section', cart);

    return (
        <div>
            <p>Carrito</p>
            <ul>
                {cart.map(item => (
                    <li key={item}>
                        {item.name} -{" "}
                        <button key={item} onClick={() => removeItem(item.id)}>
                            borrar
                        </button>
                        <button onClick={() => clear()}>
                            borrar todo
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
 }

 export default Cart;