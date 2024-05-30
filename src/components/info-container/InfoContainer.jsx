import React from 'react'
import './InfoContainer.css';
import despreLaButoaieImg from '../../assets/despre-labutoaie.jpg';
function InfoContainer() {
  return (
    <div className='info-cont-container'> 
      
            <div className="info-container-header">

                    <h1 className='info-container-header-h1'><span className='info-container-header-span'>Eleganta si gust</span> intr-un singur loc </h1>
                    <p className='info-container-header-p1'>La butoaie-pizza la cuptor pe lemne</p>
                    

            </div>

            <div className="despre-la-butoaie-container">


                    <div className="lef-side-photo">
                        <img src={despreLaButoaieImg} alt="" />
                    </div>

                    <div className="right-side-text">

                        <div className="right-side-text-info-card">
                            <p>Despre noi</p>
                            <h2><span>La Butoaie-</span>Pizza Pitesti cu livrare la domiciliu</h2>
                            <p className='te-afli-in-cautare-p'>Te afli în căutarea unei pizza la cuptor cu lemne sau dorești să comanzi o ciorbă, paște, salate sau preparate din pui, peste sau vită? La Butoaie vă așteptăm cu drag în locația noastră din Stradă Crinului, Nr. 26, Pitești</p>
                            <p className='de-asemenea-p'>De asemenea, dacă timpul nu vă permite și dorești să comanzi online, atunci este timpul să alegi produsele tale preferate și echipa noastră le va în cel mai scurt timp posibil.</p>
                            <p className='telefon-info-p'><span>Telefon:  </span>0348 457 943;</p>
                            <p className='telefon-info-p'><span>Mobil: </span>0756 971 452; 0721 555 524</p>
                            <p className='email-info-p '><span>Email:</span> comenzi@labutoaie.com.ro</p>
                        </div>

                        
                    </div>    

            </div>

    </div>
  )
}

export default InfoContainer


