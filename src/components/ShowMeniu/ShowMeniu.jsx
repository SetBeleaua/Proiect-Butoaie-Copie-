
import React from 'react'
import './ShowMeniu.css';
import ShowProduct from '../show-product-component/ShowProduct';

function ShowMeniu() {
  return (
    <div className='show-meniu-container'>
        
        <div className="recomandarile-noastre-container">
            
            <h1>Recomandarile noastre</h1>
            
            <ShowProduct/>
            <ShowProduct/>

        </div>

        <div className="top-vanzari-container">
            <h1>Top vanzari</h1>
            <ShowProduct/>
            <ShowProduct/>

        </div>
        
    </div>
  )
}

export default ShowMeniu

