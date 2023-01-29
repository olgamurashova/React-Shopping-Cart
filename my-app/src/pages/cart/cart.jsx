import React from 'react';
import { PRODUCTS } from '../../products';

import { ShopContext } from "../../context/shop-context";

const Cart = () => {

  const { cartItems } = useContext(ShopContext);


  return (
    <div className='cart'>
     <div>
      <h1>Your Cart Items</h1>
     </div>

     <div className='cartItems'></div>
     {PRODUCTS.map((product) => {
      if(cartItems[product.id] !==0) {
        return <CartItem data={product} />;
      }




     })};

     </div>
  )
}

export default Cart;
