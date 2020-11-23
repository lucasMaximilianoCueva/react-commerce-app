import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import './Cart.scss';

function Cart () { 

    const { cart, removeItem, quantity, clear } = useCartContext();

    const [back, setBack] = useState(false);

    function backButton() {
        setBack(true);
      }

    return (
        <div>
            <div className="cart-title">
                <h1>Carrito de Compras</h1>
                <div>
                    <h1>{cart.length} Items</h1>
                    <button onClick={() => clear(backButton())} >Borrar</button>
                </div>
                
            </div>

            <div className="cart-detail-bar">
                <p>Detalle de Producto</p>
                <p>Cantidad</p>
                <p>Precio</p>
            </div>
            {back && <div className="empty-cart-message">
                <h1>No Hay Productos Agregados</h1>
                
                <Link to="/" style={{textDecoration: "none"}}><button className="learn-more">
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">Volver</span>
  </button></Link>
            </div>}
            {cart.map(item => (
                <div key={item.id} className="cart-container">
                    <div className="item-detail">
                    <div className="product-img">
                        <img key={item} src={item.imageId} alt="pharmacy" />
                    </div>
                    <div className="product-detail">
                        <h4>{item.title}</h4> 
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

