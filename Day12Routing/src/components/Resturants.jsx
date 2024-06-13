import React, { useState } from 'react';
import restaurantData from '../data/resturants';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Footer from './Footer';

function Restaurants() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRestaurants = restaurantData.filter(
        (restaurant) =>
            restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.famous_dish.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <h1 style={{textAlign:"center", marginTop:"2rem"}}>Search resturents here :)</h1>
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className='allrestaurants'>
                {
                    filteredRestaurants.map((item, index) => {
                        return (
                            <div className='restaurantContainer' key={index}>
                                <div className='restaurant'>
                                    <h2>{item.name} <FastfoodIcon /></h2>
                                    <p><LocationOnIcon style={{ color: "red", fontSize: "20px" }} /> {item.location}</p>
                                    <p><RestaurantIcon style={{ color: "#2bce7c", fontSize: "20px" }} /> {item.cuisine}</p>
                                </div>
                                <div className='ratings'>
                                    <p>{item.rating} ⭐⭐⭐⭐</p>
                                    <p>{item.famous_dish}</p>
                                    <a href="">View more</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </>
    );
}

export default Restaurants;
