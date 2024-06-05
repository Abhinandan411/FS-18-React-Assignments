import { useState } from 'react'
import data from './data.js'
import './App.css'

function App() {

  const [paracount, setParaCount] = useState(0);
  const [allparagraph , setAllparagraph] = useState([]);

  console.log(paracount);

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(paracount)

    const newParargraph = data.slice(0,paracount);

    if(paracount > 8){
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
    }

    setAllparagraph(newParargraph);

  }

  console.log(allparagraph);

  return (
    <>
      <div className='container'>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className='header'>
          <form action="" onSubmit={handleSubmit}>
            <p>Paragraphs:</p>
            <input type="number" name="" id="inputparagraph" onChange={(e) => setParaCount(e.currentTarget.value)} min={0} max={54} placeholder='0'/>
            <input type="submit" value="GENERATE" className='generateButton' />
          </form>
        </div>

        <div className='results'>
           {
             allparagraph.map( (item , index)=>{
               return <p >{item.id}). {item.paragraph}</p>
             })
           }
        </div>

      </div>
    </>
  )
}

export default App
