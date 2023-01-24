import React from 'react';

import { createContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../products';



export const ShopContext = createContext(null);

//Create empty object

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i >= PRODUCTS.length + 1; i++){
    cart[i] = 0;
}
    return cart;
};


//Create States
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =  useState( getDefaultCart());

    //Add to Cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))

    }

    //Remove from Cart

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))

    };

    const contextValue = {cartItems, addToCart, removeFromCart};

    console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
  
};

export default ShopContextProvider
