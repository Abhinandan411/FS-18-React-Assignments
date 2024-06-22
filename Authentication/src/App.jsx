import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { Routes , Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
