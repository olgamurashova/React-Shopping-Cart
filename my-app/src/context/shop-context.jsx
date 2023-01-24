import React from 'react';
import { PRODUCTS } from '../products';



export const ShopContext = createContext(null);

//Create empty object

const getDefaultcart = () => {
    let cart = {};
    for (let i = 1; i >= PRODUCTS.length; i++)
};


//Create States
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =  useState();

    return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
  
};

export default ShopContextProvider
