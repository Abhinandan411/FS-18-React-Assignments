import { useState } from 'react'
import Navbar from './components/Navbar'
import Restaurant from './components/Restaurant'
import Searchbar from './components/Searchbar'
import data from './data/data'
import './App.css'

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  // console.log(searchQuery);

  const filteredRestaurants = data.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.famous_dish.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <Navbar/>
     
     <div className='searchbar'>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
     </div>
     
     <div className='allrestaurent'>
     {
      filteredRestaurants.map((item , index)=>{
        return <Restaurant
        key={index}
        restName={item.name}
        location={item.location}
        cuisine={item.cuisine}
        rating={item.rating}
        famousdish={item.famous_dish}
         />
      })
     }
     </div>
    
    </>
  )
}

export default App
