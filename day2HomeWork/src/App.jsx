
import './App.css'

function App() {

  return (
    <>
      <div className='main-container'>
        <div className='first-div'>
          <h1>Topics Covered</h1>
          <p>The Following is a list of all the topics we cover in the MDN learning area</p>
        </div>
        <div className='second-div'>
          <h3><a href="https://developer.mozilla.org/en-US/docs/Learn">Getting started with the web</a></h3>
          <p>Provides a practical introduction to web development for complete beginners</p>
        </div>
        <div className='third-div'>
          <h3><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML - Structuring the web</a></h3>
          <p>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.</p>
        </div>
        <div className='fourth-div'>
          <h3><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS - Styling the web</a></h3>
          <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
        </div>
        <div className='fifth-div'>
          <h3><a href="https://developer.mozilla.org/en-US/docs/Web/javascript">Javascript - Manipulating the web</a></h3>
          <p>JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.</p>
        </div>
      </div>
    </>
  )
}

export default App
