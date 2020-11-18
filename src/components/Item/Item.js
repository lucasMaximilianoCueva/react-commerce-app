import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';



function Item ( { item: { id, name, price, img} } ) {  
    return (
        <Link style={{textDecoration: "none"}} to={`/item/${id}`}>
            <div className="item-container">
                <div>
                    <img src={img} alt="pharmacy" />
                </div>
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
        </Link>
    )}

export default Item;