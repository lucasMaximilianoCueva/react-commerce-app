import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";
import { getFirestore } from "../../firebase";
import { NavLink, useParams } from "react-router-dom";

const staticCategories = [{ id: "oferta", name: "Ofertas" }];

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    let itemCollection = db.collection("items");

    if (categoryId) {
      itemCollection = itemCollection.where("categoryId", "==", categoryId);
    }

    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("no results");
      }
      setItems(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <>
      <div className="item-list-title">
        <NavLink to="/" activeClassName="active" exact>
          <h1>Destacado</h1>
        </NavLink>
        {staticCategories.map((cat) => (
          <NavLink to={`/category/${cat.id}`} key={cat.id}>
            <h1>Ofertas</h1>
          </NavLink>
        ))}
      </div>
      <div className="items-container">
        {loading && <div id="loading"></div>}
        {!loading && <ItemList items={items} />}
      </div>
    </>
  );
}

export default ItemListContainer;
