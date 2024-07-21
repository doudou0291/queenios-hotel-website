import React from 'react'
import Image from 'next/image'
import { Icons } from 'next/dist/lib/metadata/types/metadata-types';
import ".//page.css"


const ServicesPage = () => {
  return (
    <div>
     {/*Hero section start*/}
    <div className="Hero">
       <div className="content">
        <h1>Discover Our Signature </h1>
        <h1> Services</h1>
      </div>
      </div>
    {/*services section start*/}
   <section className='services'>{/*service1*/}
    <div className="main">
        <div className="image">
      <img src="service1.png" alt="" /></div>
      <div class="content">
      <img src="/services1.svg"/>
    
          <h3>Parking</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs. </p>
      
      </div>
      
     </div>
    {/*service2*/}
      <div className="main">

    <div class="content">
      <img src="/icon2.svg"/>
          <h3>Breakfast</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs.</p>
             
      </div>
      <div className="image">
      <img src="service2.png" alt="" /></div>
      </div>
       {/*service3*/}
     <div className="main">
     <div className="image">
      <img src="service3.png" alt="" /></div>
      <div class="content">
      <img src="/icon3.svg"  />
          <h3>Free Wifi</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs. </p>
      
      </div>
      
      </div>
   {/*service4*/}
      <div className="main">
  
      
  
      <div class="content">
      <img src="/icon4.svg"  />
          <h3>Workspace</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs.</p>
             
      </div>
      <div className="image">
      <img src="service4.png" alt="" /></div>
      </div>
       {/*service5*/}
     <div className="main">
     <div className="image">
      <img src="service5.png" alt="" /></div>
      <div class="content">
      <img src="/icon5.svg"  />
          <h3>Gym & Yoga Rooms</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs. </p>
      
      </div>
      
      </div>
   {/*service6*/}
      <div className="main">
  
      
  
      <div class="content">
      <img src="/icon6.svg"  />
          <h3>Free Electricity</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs.</p>
             
      </div>
      <div className="image">
      <img src="service6.png" alt="" /></div>
      </div>
       {/*service7*/}
     <div className="main">
     <div className="image">
      <img src="service7.png" alt="" /></div>
      <div class="content">
      <img src="/icon7.svg"  />
          <h3>Gaming Center</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs. </p>
           
      
      </div>
      
      </div>
   {/*service8*/}
      <div className="main">
  
    
  
      <div class="content">
      <img src="/icon8.svg"  />
          <h3>Swimming Pool</h3>
          <p>The service at the Hotel Monteleone was exceptional.
             There was absolutely no issue that was not addressed 
             timely and with satisfactory results. We were particulary 
             impressed with how the hotel staff anticipated our needs.</p>
             
      </div>
      <div className="image">
      <img src="service8.png" alt="" /></div>
      </div>
   
      </section>
    </div>
  )
};

export default ServicesPage;