import Navbar from './components/Navbar'
import data from './data/Quotes'
import Quote from './components/Quote'
import Footer from './components/Footer'
import './App.css'


function App() {


  return (
    <>
      <Navbar/>

      {
        data.map( (item , index)=>{
          return <Quote key={index} content={item.quote} author={item.author} />
        })
      }
      <Footer/>

    </>
  )
}

export default App
