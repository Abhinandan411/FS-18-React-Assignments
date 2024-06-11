import React, { useContext } from 'react'
import { ecomContext } from './Home'

function Products() {
    const {products ,  handleAddtoCart }=useContext(ecomContext);

   
  return (
    <div className='flex item-center p-2 flex-wrap gap-3  '>
        {
            products.map((prod , index)=>{
               return <div key={index} className='m-2 p-2 w-[30%]'>
                   <img src={prod.attributes.image} alt="" />
                   <h3>{prod.attributes.title}</h3>
                   <p>${prod.attributes.price / 100}</p>
                   <button className='bg-cyan-950 text-white p-2 rounded-md' onClick={ (e)=> handleAddtoCart(e , prod)}>Add to cart</button>
               </div>
            })
        }
    
    </div>
  )
}

export default Products