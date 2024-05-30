import React, { useEffect, useState } from 'react'
import './ContactPage.css'
import Header from '../Header/Header'
import Navigation from '../navigation/Navigation'
function ContactPage() {

  const [listOfContactsRequest, setListOfContactsRequest]=useState([]);
  
  const [contactObject, setContactObject]=useState({

        name:"",
        email:"",
        message:""
  });


  const handleFormSubmit=(e)=>{

    e.preventDefault();


    const newList = [...listOfContactsRequest];

    
    newList.push(contactObject);

    
    setListOfContactsRequest(newList);

    setContactObject({
        name:"",
        email:"",
        message:""
    });

  }


 
  useEffect(()=>{

    console.log(listOfContactsRequest);
  },[listOfContactsRequest])

  
  return (
    <div className='contact-page-big-container'>
        
        <Header/>
        <Navigation/>
        
        <div className='google-map-iframe' ><iframe width="90%"  height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pitesti,%20Strada%20Crinului+(La%20butoaie)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>

        <div className="firma-info-container">

            <div className="div-info-interal">
                <h2>WELDTECH OPERATIONS SRL</h2>
                <p>RO33819452 / J03/2558/2018</p>
                <p><span>Adresa:</span> Strada Crinului, Nr. 26, Pitești</p>
                <p><span>Telefon: </span>0348 457 943;</p>
                <p><span>Email: </span>comenzi@labutoaie.com.ro</p>
            </div>

        </div>


        <div className="container-forumlar-de-contact">
            
            <h2 className='formular-contact-h2'>Formular de contact</h2>
            <form className='formular-contact-butoaie' onSubmit={handleFormSubmit}>

                <div className="input-row">

                    <label htmlFor=""><span>* </span>Nume</label>
                    <input type="text" value={contactObject.name} 
                    onChange={(e) => setContactObject({...contactObject, name: e.target.value})}
                    />

                </div>
                <div className="input-row">

                    <label htmlFor=""><span>* </span>E-Mail</label>
                    <input type="text" 

                        value={contactObject.email}
                        onChange={(e)=>setContactObject({...contactObject, email:e.target.value} )}
                    />

                </div>

                <div className="input-text-area">

                    <label htmlFor=""><span>* </span>Mesaj</label>
                    <textarea 
                        value={contactObject.message}
                        onChange={(e)=>setContactObject({...contactObject, message:e.target.value})}
                    
                    ></textarea>    
                </div>    


                <button className='tirmite-formular-btn'>Trimite</button>
            </form>

        </div>


    </div>
  )
}

export default ContactPage

    
