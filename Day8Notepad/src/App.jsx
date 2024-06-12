import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import Note from './components/Note';
import './App.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function App() {

  const [text, setText] = useState("");
  const [notes, setNotes] = useState([
    {
      title: "# Enter Note",
      content: "# Enter Note"
    }
  ]);
  const [currentNote, setCurrentNote] = useState(0);

  const addNotes = () => {
    setNotes([
      ...notes,
      {
        title: "# Enter Title Here",
        content: "# Enter Title Here "
      }
    ]);
  }

  const deleteNote = (index) => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
  }

  const changeCurrent = (index) => {
    setCurrentNote(index)
  }

  const modifyTheCurrenetNote = (text) => {
    let temp = [...notes]
    temp[currentNote].content = text;

    setNotes(temp)
  }
  return (
    <>

      <div className='container' style={{ display: "flex", justifyContent: "space-between", gap: "10px", }} >
        <div className='leftBar' style={{ width: "20%" }} >
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor:"rgb(209, 175, 243)"}}>
            <h1>Notes</h1>
            <a onClick={addNotes} style={{ color: "dodgerblue" }}><AddCircleOutlineIcon /></a>
          </div>
          {
            notes.map((item, index) => {
              return <Note
                key={index}
                index={index}
                title={item.title}
                deleteNote={deleteNote}
                changeCurrent={changeCurrent}
              />
            })
          }
        </div>

        <div className='rightBar' style={{ flexGrow: "1", height: "500px" }}>
          <MDEditor
            value={notes[currentNote].content}
            onChange={(value) => modifyTheCurrenetNote(value)}
            height="100%"

          />
        </div>

      </div>






    </>
  )
}

export default App
