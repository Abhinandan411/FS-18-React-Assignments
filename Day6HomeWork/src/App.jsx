import { useState } from 'react'
import Navbar from './components/Navbar'
import Productcart from './components/Productcart'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {
      "img" :"https://www.course-api.com/images/cart/phone-1.png",
      "title" : "Samsung Galaxy S8",
      "price":399.99,
      "quantity":1
    },
    {
      "img" :"https://www.course-api.com/images/cart/phone-2.png",
      "title" : "google pixel",
      "price":499.99,
      "quantity":1
    },
    {
      "img" :"https://www.course-api.com/images/cart/phone-3.png",
      "title" : "Xiaomi Redmi Note 2",
      "price":699.99,
      "quantity":1
    },
    {
      "img" :"https://www.course-api.com/images/cart/phone-4.png",
      "title" : "Samsung Galaxy S7",
      "price":599.99,
      "quantity":1
    },
  ]);

  function increaseProduct(index){
      let temp = [...products];
      temp[index].quantity += 1;
      setProducts(temp);
  }
  function decreaseProduct(index){
    let temp = [...products];
    temp[index].quantity -= 1;
    setProducts(temp);
  }

  return (
    <>
      <Navbar/>
      {
        products.map( (item , index )=>{
           return  <Productcart
            key={index}
            img={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            inc={increaseProduct}
            dec={decreaseProduct}
            index={index}
          />
        })
      }
    </>
  )
}

export default App
