import React from 'react'

function Searchbar({searchQuery , setSearchQuery}) {
  return (
    <>
   
    <input type="text" placeholder='Search Restaurent' style={{ 
        padding: '10px',
        marginBottom: '20px',
        fontSize: '16px',}}
        
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        />



        <input type="number" placeholder='Ratings' style={{ 
        width:'10%',
        padding: '10px',
        marginBottom: '20px',
        fontSize: '16px',}}
        min={1}
        max={5}/>
    </>
    
    
  )
}

export default Searchbar