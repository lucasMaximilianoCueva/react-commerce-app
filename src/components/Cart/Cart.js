import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import './Cart.scss';

function Cart () { 

    const { cart, removeItem, quantity, clear } = useCartContext();

    return (
        <div>
            <div className="cart-title">
                <h1>Carrito de Compras</h1>
                <div>
                    <h1>{cart.length} Items</h1>
                    <button onClick={() => clear()}>X</button>
                </div>
                
            </div>

            <div className="cart-detail-bar">
                <p>Detalle de Producto</p>
                <p>Cantidad</p>
                <p>Precio</p>
            </div>
            {!quantity && <div className="empty-cart-message">
                <h1>No Hay Productos Agregados</h1>
                <h3><Link to="/" style={{textDecoration: "none"}}>Volver a la Página Principal</Link></h3>
            </div>}
            {cart.map(item => (
                <div key={item.id} className="cart-container">
                    <div className="item-detail">
                    <div className="product-img">
                        <img key={item} src={item.img} alt="pharmacy" />
                    </div>
                    <div className="product-detail">
                        <h4>{item.name}</h4>
                        <p>{item.description} DETALLES</p>
                        <button className="btn btn--skew btn-default" key={item} onClick={() => removeItem(item.id)}>
                            borrar
                        </button>
                    </div>
                    </div>
                    <div className="product-quantity">
                        <p>{quantity}</p>
                    </div>
                    <div className="product-price">
                        <p>${item.price * quantity}</p>
                    </div>
                </div>
            ))}
            <p>{cart.price}</p>
        </div>
)}

 export default Cart;

 //<button onClick={() => clear()}>
   //                     borrar todo
     //                 </button>

