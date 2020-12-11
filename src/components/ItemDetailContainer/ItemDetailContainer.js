import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.scss";
import Footer from "../Footer/Footer";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const items = itemCollection.doc(id);

    items
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("no item results");
          return;
        }
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div id="loading"></div>
        </div>
      ) : (
        <>
          {item.id === id ? (
            <ItemDetail item={item} />
          ) : (
            <div className="no-results">
              <h1>
                El Producto No Existe. <Link to="/">Volver Al Inicio</Link>
              </h1>
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
}

export default ItemDetailContainer;
