import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "./Cart.scss";
import { getFirestore } from "../../firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";
import Checkout from "./Checkout";
import Footer from "../Footer/Footer";

function Cart() {
  const { cart, removeItem, cartTotal, clear } = useCartContext();
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  async function createOrder({ name, surName, phone, email }) {
    if (cart.length > 0) {
      const newOrder = {
        buyer: { name: name, surName, phone: phone, email: email },
        items: cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        total: cartTotal,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        stateOrder: "orden procesada",
      };

      const db = getFirestore();
      const orders = db.collection("orders");

      orders.add(newOrder).then(({ id }) => {
        setOrderId(id);
      });

      for (const item of newOrder.items) {
        const docRef = db.collection("items").doc(item.id);
        await docRef.get().then((doc) => {
          docRef.update({ stock: doc.data().stock - item.quantity });
        });
      }

      clear();
      setPurchaseComplete(true);
    } else {
      alert("Agrega Items Al Carrito");
    }
  }

  useEffect(() => {
    setOrderId(orderId);
  }, [orderId]);

  return (
    <>
      {purchaseComplete ? (
        <>
          <div className="no-results">
            <h1>Tu compra ha sido exitosa!</h1>
            <h2>Tu ID de operacion es {orderId}</h2>
            <h3>
              <Link to="/">Volver Al Inicio</Link>
            </h3>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <div className="cart-title">
            <h1>Carrito de Compras</h1>
          </div>

          {cart.length !== 0 ? (
            <div className="cart-detail-bar">
              <p>Detalle de Producto</p>
              <p>Cantidad</p>
              <p>Precio</p>
            </div>
          ) : (
            <div className="empty-cart-message">
              <h1>No Hay Productos Agregados</h1>

              <Link to="/" style={{ textDecoration: "none" }}>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Comprar</span>
                </button>
              </Link>
            </div>
          )}
          <div className="display-container">
            <div className="cart-wrap">
              {cart.map((item) => (
                <div key={item.id} className="cart-container">
                  <div className="item-detail">
                    <div className="product-img">
                      <img key={item} src={item.imageId} alt="pharmacy" />
                    </div>
                    <div className="product-detail">
                      <h4>{item.title}</h4>
                      <button
                        className="btn btn--skew btn-default"
                        key={item}
                        onClick={() => removeItem(item.id)}
                      >
                        borrar
                      </button>
                    </div>
                  </div>
                  <div className="product-quantity">
                    <p>{item.quantity}</p>
                  </div>
                  <div className="product-price">
                    <p>${item.quantity * item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {cart.length && <Checkout orderCreated={createOrder} />}
          </div>

          {cart.length && (
            <div className="total-price">
              <button className="learn-more" onClick={clear}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Vaciar </span>
              </button>

              <Link to="/">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Ver Más</span>
                </button>
              </Link>
              <div>
                <h1>Total: ${cartTotal} </h1>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Cart;
