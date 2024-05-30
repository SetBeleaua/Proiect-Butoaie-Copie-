import React from 'react'
import Header from '../Header/Header'
import Navigation from '../navigation/Navigation'
import ShowCarousel from '../showContainer/ShowCarousel'
import InfoContainer from '../info-container/InfoContainer'
import ShowMeniu from '../ShowMeniu/ShowMeniu'

function HomePage() {
  return (
    <div>
        <Header/>
        <Navigation/>
        <ShowCarousel/>
        <InfoContainer/>
        <ShowMeniu/>
    </div>
  )
}

export default HomePage
