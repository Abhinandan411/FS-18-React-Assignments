import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([]);
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  async function fetchAllLanguages() {
    await fetch("https://text-translator2.p.rapidapi.com/getLanguages", {
      headers: {
        'x-rapidapi-key': 'cf2c7f000emsh3d1cd56c1ea499fp12a826jsn1503042f16aa',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      }
    })
      .then(res => res.json())
      .then(results => {
        console.log(results.data.languages);
        setLanguages(results.data.languages);
      })
      .catch(err => console.log(err));
  }

  async function translate() {
    console.log(text, source, destination);

    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", source);
    encodedParams.append("target_language", destination);
    encodedParams.append("text", text);

    await fetch("https://text-translator2.p.rapidapi.com/translate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-rapidapi-key': 'cf2c7f000emsh3d1cd56c1ea499fp12a826jsn1503042f16aa',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      },
      body: encodedParams
    })
      .then(res => res.json())
      .then(data => {
        setTranslatedText(data.data.translatedText);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchAllLanguages();
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>Text Translator</h1>
        <form action="" onSubmit={(e) => { e.preventDefault(); translate() }}>
          <input 
            className="text-input"
            onChange={(e) => setText(e.currentTarget.value)} 
            type="text" 
            placeholder="Enter text to translate"
          /><br />
          <label htmlFor="source-language">Input Language</label>
          <select 
            id="source-language" 
            className="select-input"
            onChange={(e) => setSource(e.currentTarget.value)}>
            <option value="">Select Language</option>
            {languages.map((item, index) => (
              <option key={index} value={item.code}>{item.name}</option>
            ))}
          </select>
          <br />

          <label htmlFor="destination-language">Output Language</label>
          <select 
            id="destination-language" 
            className="select-input"
            onChange={(e) => setDestination(e.currentTarget.value)}>
            <option value="">Select Language</option>
            {languages.map((item, index) => (
              <option key={index} value={item.code}>{item.name}</option>
            ))}
          </select>

          <button className="submit-button" type='submit'>Translate</button>
        </form>
        {translatedText && <p className="translated-text">Translated Text: {translatedText}</p>}
      </div>
    </>
  )
}

export default App
