import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item';

function ItemList ( { items } ) {
    return ( <>
            {items.map(item => <Item key={item.id} item={item} />)}
    </>
            
    )
}

export default ItemList;

//{items.map(item => <div className="item-container">
  //              <p>{item.name}</p>
  //              <p>${item.price}</p>
   //             <Link to={`/item/${item.id}`}><img src={item.img} alt="pharmacy" /></Link>
   //         </div>)}