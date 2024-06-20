import React, { useContext, useState } from 'react';
import { productContext } from '../App';

function Products() {
  const { products , handleDecrement , handleIncrement } = useContext(productContext);

  return (
    <div className='Products' >
        <h1 style={{textAlign:"center", padding:"1rem"}}>Products</h1>
      <ul>
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
            <div className="quantity-controls">
              <a onClick={()=> handleIncrement(product.id)}>+</a>
              <p>{product.quantity}</p>
              <a onClick={()=> handleDecrement(product.id)}>-</a>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Products;
