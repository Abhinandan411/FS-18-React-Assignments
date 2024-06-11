import React, { useContext } from 'react'
import { ecomContext } from './Home'

function Featured() {
  const { products } = useContext(ecomContext);

  const featuredProducts =  products.filter((prod)=>{
     return prod.attributes.featured === true
  })

  console.log(products);
  console.log(featuredProducts);

  return (
    <div className='flex item-center p-2'>
        {
            featuredProducts.map((prod , index)=>{
               return <div key={index} className='m-2 p-2'>
                   <img src={prod.attributes.image} alt="" />
                   <h3>{prod.attributes.title}</h3>
                   <p>${prod.attributes.price / 100}</p>
               </div>
            })
        }
    
    </div>
  )
}

export default Featured