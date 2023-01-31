import { Cat } from 'phosphor-react';
import React from 'react';

import { createContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../products';



export const ShopContext = createContext(null);

//Create empty object

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++){
    cart[i] = 0;
}
    return cart;
};


//Create States
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =  useState( getDefaultCart());

    //Add to Cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));

    };

    //Remove from Cart

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));

    };

    //Update Cart Item Count

    const updatecartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    //Get Total Cart Amount

    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }



    const contextValue = {cartItems, addToCart, removeFromCart, updatecartItemCount, totalCartAmount };

  

    return ( <ShopContext.Provider value={contextValue} > {props.children}</ShopContext.Provider>);
  
};

export default ShopContextProvider
