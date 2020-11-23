import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item';

function ItemList ( { items } ) {
    return ( <>
          <ul className="grid">
          {items.map(item => 
          <li key={item.id} className="column">
            <Item  item={item} />
          </li>)}
          
          </ul>
            
    </>
            
    )
}

export default ItemList;

//{items.map(item => <div className="item-container">
  //              <p>{item.name}</p>
  //              <p>${item.price}</p>
   //             <Link to={`/item/${item.id}`}><img src={item.img} alt="pharmacy" /></Link>
   //         </div>)}