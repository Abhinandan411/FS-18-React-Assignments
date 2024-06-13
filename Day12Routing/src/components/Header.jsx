import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <div className="logo">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
                <h1>GeekFoods</h1>
            </div>
            <ul className='items'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quote">Quote</Link></li>
                <li><Link to="/restaurants">Restaurants</Link></li>
                <li><Link to="/foods">Foods</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            <button>Get started</button>
        </nav>
    );
}

export default Header;
