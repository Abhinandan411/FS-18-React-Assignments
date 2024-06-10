import { useState } from 'react'
import Navbar from './components/Navbar'
import Restaurant from './components/Restaurant'
import data from './data/data'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <div className='allrestaurent'>
     {
      data.map((item , index)=>{
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
