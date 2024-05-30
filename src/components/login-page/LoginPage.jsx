

import React from 'react';
import './LoginPage.css';
import Header from '../Header/Header';
import Navigation from '../navigation/Navigation';


function LoginPage() {
  return (
    <div>
        
        <Header/>
        <Navigation/>

        <div className="second-container">
            <form onSubmit={handleSubmit} className='register-form-container'>
            <h1 className='register-acc-h1'>Register Account</h1>

            <div className="input-register-rows">
                <label htmlFor="fullName">Full Name</label>
                <input
                type="text"
                value={formData.fullName}
                placeholder='Your name'
                name="fullName"
                onChange={handleChange}
                required
                />
            </div>

            <div className="input-register-rows">
                <label htmlFor="email">Your email</label>
                <input
                type="email"
                value={formData.email}
                placeholder='Your email'
                name="email"
                onChange={handleChange}
                required
                />
            </div>

            <div className="input-register-rows">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                value={formData.password}
                placeholder='The password you want'
                name="password"
                onChange={handleChange}
                
                required
                />
            </div>

            <button className='trimite-register-btn' type="submit">
                Trimite
            </button>
            </form>
        </div>
    
    </div>
  )
}

export default LoginPage

  