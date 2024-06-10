import React from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';



function Restaurant({restName, location, cuisine, rating, famousdish }) {
    return (
        <>
            <div className='restContainer'>
                <div className='restaurant'>
                    <h2> {restName} <FastfoodIcon /></h2>
                    <p><LocationOnIcon style={{color:"red", fontSize:"20px"}}/> {location}</p>
                    <p><RestaurantIcon style={{color:"#2bce7c", fontSize:"20px"}}/> {cuisine}</p>

                </div>
                <div className='ratings'>
                    <p>{rating} ⭐⭐⭐⭐</p>
                    <p>{famousdish}</p>
                    <a href="">View more</a>
                </div>
            </div>

        </>
    )
}

export default Restaurant