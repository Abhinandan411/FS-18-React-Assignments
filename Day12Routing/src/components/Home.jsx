import React from 'react';
import Header from './Header';
import First from './First';
import Quote from './Quote';
import Restaurants from './Resturants';
import Contact from './Contact';
import Food from './Food';
// import Restaurants from './Restaurants'; // Correct spelling 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/foods' element={<Food />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
