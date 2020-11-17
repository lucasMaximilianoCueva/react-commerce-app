import React, { useContext, useState } from 'react';



export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ defaultCart = [], children }) {
    const [cart, setCart] = useState(defaultCart);
    const [quantity, setQuantity] = useState();

    function addItem(item, quantity) {
        const addedItems = [...cart, item];
        setCart(addedItems);
        setQuantity(quantity);
        console.log(quantity)
    }

    function removeItem(itemId) {
        const removedItems = cart.filter(item => item.id !== itemId);
        setCart(removedItems);
        setQuantity([])
    }

    function clear() {
        setCart([])
        setQuantity([])
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, quantity, clear}}>
        { children }
    </CartContext.Provider>

}



