import React, { useState } from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import './ItemDetail.scss';

function ItemDetail ( { item } ) {

    const { addItem } = useCartContext();

    const [killer, setKiller] = useState(false);

    function killerButton() {
      setKiller(true);
    }

    return (
        <div className="item-detail-container">
          <div className="detail-img">
            <div>
              <img src={item.imageId} alt='pharmacy' />
            </div>
          </div>
          <div className="detail">
            <div className="title">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          <div className="detail-price">
            <p><strike>${item.previousPrice}</strike> ${item.price}</p>
          </div>
          <div className="detail-buttons">
            { <ItemCount stock={10} initial={0} outOfStock={0} addItem={ addItem } killer={killer} item={item} killerButton={killerButton} />}
            {killer && <button className="btn btn--skew btn-default"><Link style={{textDecoration: "none"}} to="/cart">Terminar Compra</Link></button>}
            </div> 
            </div> 
        </div>
    )}

export default ItemDetail;
