import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Productcart({ img, title, price, quantity, inc, dec, index, remove }) {
  return (
    <div className='productdiv' >
      <div className='product-detail'>
        <img  src={img} alt="" />
        <div className='product-desc' >
          <p>{title}</p>
          <p>${price}</p>
          <button onClick={() => remove(index)} >Remove</button>
        </div>
      </div>
     
      <div className='quantity-div' style={{  gap: "10px", alignItems: "center" }}>
        <a onClick={() => inc(index)}><KeyboardArrowUpIcon/></a>
        <p>{quantity}</p>
        <a onClick={() => dec(index)} ><KeyboardArrowDownIcon/></a>
      </div>
    </div>
  )
}
