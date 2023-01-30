import React from 'react';
import "./cart.css";



export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;

  return (
    <div className='cartItem'>
        <img src={productImage} />

        <div className='description'>
            <p>
                <b> {productName} </b>
            </p>
            <p> Price:${price}</p>

        </div>
      
    </div>
  )
};


