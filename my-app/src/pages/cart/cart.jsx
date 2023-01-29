import React, {useContext} from 'react';
import { PRODUCTS } from '../../products';

import { ShopContext } from "../../context/shop-context";

import {cartItem} from "./cartItem";



const Cart = () => {

  const { cartItems } = useContext(ShopContext);


  return (
    <div className='cart'>
     <div>
      <h1>Your Cart Items</h1>
     </div>

     <div className='cart'>
     {PRODUCTS.map((product) => {
      if(cartItems[product.id] !== 0) {
        return < cartItem data={product} />;
      }
    
     })};

      </div>

     </div>
  )
};

export default Cart