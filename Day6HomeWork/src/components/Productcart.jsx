import React from 'react'

export default function Productcart({img , title , price , quantity , inc , dec , index}) {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
       <img width="70px" src={img} alt="" />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>

      <div style={{display:"flex" , gap:"10px", alignItems:"center"}}>
        <button onClick={ ()=> inc(index)}>+</button>
        <p>{quantity}</p>
        <button onClick={ ()=> dec(index)} >-</button>
      </div>
    </div>
  )
}
