import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar({ cartlength }) {
  return (
    <div className='navbar'>
      <h1>My cart</h1>
      <div className='cartbox'>
        <p><ShoppingCartIcon /></p>
        <p>{cartlength}</p>
      </div>

    </div>
  )
}
