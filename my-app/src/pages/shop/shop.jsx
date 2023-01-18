import React from 'react';
import { PRODUCTS } from '../../../products';
import { Product } from "./product";

const Shop = () => {
  return (
    <div className='shop '>
      <div className='shoptTitle'>
        <h1>Online Store</h1>
      </div>

      <div className='products'>

        { PRODUCTS.map((product) => (<Product data={product}/>))}

      </div>
    </div>
  )
};

export default Shop;