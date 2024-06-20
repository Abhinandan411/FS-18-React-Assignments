import { createContext, useState } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css'

export const productContext = createContext(null)

function App() {

  const [products, setProducts] = useState([
    { "id": 1, "name": "Product-1", "price": 100 , "quantity" :1 },
    { "id": 2, "name": "Product-2", "price": 200 , "quantity" :1},
    { "id": 3, "name": "Product-3", "price": 300 ,  "quantity" :1},
  ])

  function handleIncrement(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }
  
  function handleDecrement(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: Math.max(1, product.quantity - 1) };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }


  return (
    <>
      <productContext.Provider value={{ products,  handleIncrement, handleDecrement }}>
        <div className='container'>
          <Products />
          <Cart />
        </div>
      </productContext.Provider>

    </>
  )
}

export default App
