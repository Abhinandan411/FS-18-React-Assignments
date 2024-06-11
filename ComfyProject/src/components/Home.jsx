import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../index.css'
import Header from './Header'
import About from './About'
import Products from './Products'
import Cart from './Cart'
import First from './First'


export const ecomContext = createContext();


function Home() {

    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])

    function handleAddtoCart(e , product){
        e.preventDefault();
        setCart([...cart , product])
        
    }
    // console.log(cart);

    useEffect(() => {

        async function fetchData() {
            const response = await fetch("https://strapi-store-server.onrender.com/api/products");
            const result = await response.json();

            // console.log(result.data);

            setProducts(result.data)
        }
        fetchData();
    }, [])


    return (
        <>
            <BrowserRouter>
                <ecomContext.Provider value={{ products, setProducts , handleAddtoCart , cart }}>
                <Header />
                    <Routes>
                        <Route path='/' element={<First />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                    </Routes>
                </ecomContext.Provider>
            </BrowserRouter>

        </>

    )
}

export default Home