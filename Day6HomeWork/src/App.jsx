import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Productcart from './components/Productcart'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {
      "img": "https://www.course-api.com/images/cart/phone-1.png",
      "title": "Samsung Galaxy S8",
      "price": 399.99,
      "quantity": 1
    },
    {
      "img": "https://www.course-api.com/images/cart/phone-2.png",
      "title": "Google pixel",
      "price": 499.99,
      "quantity": 1
    },
    {
      "img": "https://www.course-api.com/images/cart/phone-3.png",
      "title": "Xiaomi Redmi Note 2",
      "price": 699.99,
      "quantity": 1
    },
    {
      "img": "https://www.course-api.com/images/cart/phone-4.png",
      "title": "Samsung Galaxy S7",
      "price": 599.99,
      "quantity": 1
    },
  ]);

  const [cartLength, setCartLength] = useState(0);

  console.log(cartLength);

  const [totalprice, setTotalprice] = useState();


  useEffect(() => {
    let sum = 0;
    let totalCartLength = 0;
    products.forEach((item, idx) => {
      sum += (item.price * item.quantity)
      totalCartLength += item.quantity;
    });
    setTotalprice(sum);
    setCartLength(totalCartLength);

  }, [products])

  function increaseProduct(index) {
    let temp = [...products];
    console.log(temp.length)
    temp[index].quantity += 1;
    setProducts(temp);
  }

  function decreaseProduct(index) {

    let temp = [...products];
    if (temp[index].quantity > 1) {
      temp[index].quantity -= 1;
      setProducts(temp);
    }
    else {
      removeProduct(index)
    }
  }

  function removeProduct(index) {
    let temp = [...products];
    temp.splice(index, 1);

    setProducts(temp);
  }

  return (
    <>
    
      <Navbar cartlength={cartLength} />
      <h1 id='yourbag'>Your Bag</h1>
      {
        products.length > 0 ?
          <div>
            {
              products.map((item, index) => {
                return <Productcart
                  key={index}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  inc={increaseProduct}
                  dec={decreaseProduct}
                  index={index}
                  remove={removeProduct}
                />
              })
            }
            <hr />
            <div className='totalprice-div'>
              <div className='price-div'>
                <h3>Total Price :</h3>
                <h2> ${totalprice}</h2>
              </div>
              <button onClick={() => setProducts([])}>Clear Cart</button>
            </div>

          </div > : <p className='emptyCartPara'>Hey...., your cart is empty🙄</p>
      }

    </>
  )
}

export default App
