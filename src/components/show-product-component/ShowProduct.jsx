
import React from 'react'
import './ShowProduct.css';
import pizzaPhoto from '../../assets/pizza-quattro-stagioni.jpg';

function ShowProduct() {
  return (
    <div className='show-product-container'>
      
       <div className="product-imagine">

            <img src={pizzaPhoto} alt="" />

       </div>

        <div className="product-details">

                <p className='product-title'>Quattro Stagioni</p>

                <p className='product-ingredients'>Ingrediente: sos de pizza, mozzarella, sunca, masline, ciuperci, cartofi, ulei de masline..</p>

                <div className="price-comanda-container">

                    <p className='product-price'>28,90 Lei</p>
                    <button className='comanda-btn'>Comanda</button>

                </div>
        </div>


    </div>
  )
}

export default ShowProduct




