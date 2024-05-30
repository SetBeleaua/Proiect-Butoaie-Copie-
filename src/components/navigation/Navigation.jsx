

import React from 'react'
import './Navigation.css';
import laButoaieLogo from '../../assets/labutoaie.png'
import cartLogo from '../../assets/shopping-cart.png'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <div className='navigation-container'>
        
        <div className="navigation-logo">

            <img src={laButoaieLogo} alt="" />

        </div>
        
        <ul class="main-menu">
            <li><a href="#">Meniu livrare</a></li>
            <li><a href="#">Despre noi</a></li>
            <li><a href="#">Galerie foto</a></li>
            <li><a href="#">Oferta lunii</a></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>


        <div className="shopping-cart-container">

            <img src={cartLogo} alt=""  />

        </div>
    </div>
  )
}

    export default Navigation
