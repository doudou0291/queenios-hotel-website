import React from 'react'
import HomeTop from './HomeTop'
import Rooms from './Rooms'
import About from './About'
import Services from './Services'
import Map from './Map'

import Reviews from './Reviews'
const HomePage = () => {
  return (
    <div>
        <HomeTop/>
        <Rooms/>
        <About/>
        <Services/>
        {/* <Reviews/> */}
        <Map/>
    </div>
  )
}

export default HomePage