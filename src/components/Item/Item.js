import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';



function Item ( { item: { id, title, price, imageId, previousPrice} } ) {  
    return (
        <Link style={{textDecoration: "none"}} to={`/item/${id}`}>
            <div className="item-container">
                <div>
                    <img src={imageId} alt="pharmacy" />
                </div>
                <h4>{title}</h4>
                <p><strike>{previousPrice}</strike> ${price}</p>
            </div>
        </Link>
    )}

export default Item;