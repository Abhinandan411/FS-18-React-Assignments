import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note({ index, title, deleteNote, changeCurrent }) {
    return (
        <>
            <div className='leftbar' style={{textAlign:"center", alignItems:"center"}} >
                <div style={{display:"flex", justifyContent:"space-between" }}>
                    <h3>{title}</h3>
                    <div style={{ alignItems:"center", marginTop:".5rem", width:"30%", display:"flex", justifyContent:"space-around"}}>
                        <a style={{color:"red"}} onClick={() => deleteNote(index)}><DeleteIcon /></a>
                        <a style={{color:"green"}} onClick={() => changeCurrent(index)}><EditIcon /></a>
                    </div>

                </div>
                <hr />
            </div>
        </>

    )
}

export default Note