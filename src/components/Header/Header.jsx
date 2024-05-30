

import React from 'react'
import "./Header.css";
import phoneIcon from '../../assets/phone-call.png';
import woodTexture from '../../assets/woodTexture.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
        

        <div className="phonenumber-login-register">


            <div className="phone-number-container">
                <img src={phoneIcon} alt="" />

                <p>0767 601 585</p>
            </div>

            <div className="login-container">
              <Link to="/login">Login</Link>
            </div>    

            <div className="register-container">

              <Link to="/register">Inregistrare</Link>
            </div>

        </div>


    </div>
  )
}

export default Header



