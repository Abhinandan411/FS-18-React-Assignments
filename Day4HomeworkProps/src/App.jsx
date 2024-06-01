import Color from './components/Color'
import data from './data/color'
import './App.css'

function App() {

  return (

    <>

      <div className='color-props' >
        <div className='project-titel'>
          <h1>React-Props-001</h1>
          <p>🔖A basic application that displays a minimal but complete color picker. Each card provides color, title, etc.</p>
          <p>🔖Using React Props complete the following using JSX.</p>
        </div>
        <div className="app-container">
          {data.map((item, index) => (
            <Color key={index} color={item.color} titel={item.titel} />
          ))}
        </div>
      </div>

      


    </>
  )
}

export default App;
