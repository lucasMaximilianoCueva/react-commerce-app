import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';



function Item ( { item: { id, name, price, img} } ) {  
    return (
    <div className="item-container">
                <p>{name}</p>
                <p>${price}</p>
                <Link to={`/item/${id}`}><img src={img} alt="pharmacy" /></Link>
            </div>
         
    )
         }

export default Item;