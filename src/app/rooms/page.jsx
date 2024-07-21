import React from 'react'
import Image from 'next/image'
import ".//page.css"

const RoomsPage = () => {
  return (<div>
    {/*hero section start*/}
    <div className="Hero">
       <div className="content">
        <h1>Indulge in Luxury Explore
        our </h1>
        <h1>Rooms</h1>
        {/*<span>our Rooms</span>*/}
       </div>
    </div>
    {/*rooms section start*/}
<section className="rooms">
    {/*room1*/}
   <div className="main">
   <div className="image">
    <img src="room-1.png" alt="" /></div>
    <div class="content">
        <h3>Standard Rooms</h3>
        <p>The service at the Hotel Monteleone was exceptional.
           There was absolutely no issue that was not addressed timely and with satisfactory results. 
           We were particulary impressed with how the hotel staff anticipated our needs </p>
           <a href="/reservation" class="btn">book new </a> 
    </div>
     </div>
 {/*room2*/}
    <div className="main">
      <div class="content">
        <h3>Deluxe Rooms</h3>
        <p>Experience luxury redefined in our deluxe rooms, where every detail has been carefully curated to ensure a premium guest experience. Enjoy spacious accommodations, elegant décor, and upgraded amenities, providing the perfect setting for a truly indulgent getaway.</p>
           <a href="/reservation" class="btn">book new </a> 
    </div>
    <div className="image">
    <img src="room-2.png" alt="" /></div>
    </div>
     {/*room3*/}
    <div className="main">
    <div className="image">
    <img src="room-3.png" alt="" /></div>
    <div class="content">
        <h3>Suite</h3>
        <p>Indulge in the ultimate luxury with our suites, offering an expansive living space and separate sleeping area for maximum comfort and privacy. Featuring luxurious furnishings, stunning views, and exclusive amenities, our suites provide a lavish retreat for discerning travelers seeking an unforgettable stay. </p>
           <a href="/reservation" class="btn">book new </a> 
    </div>
    </div>
     {/*room4*/}
    <div className="main">
      <div class="content">
        <h3>Connecting Rooms</h3>
        <p>Ideal for families or groups traveling together, our connecting rooms offer the flexibility of separate accommodations with the convenience of an adjoining door. Enjoy privacy and space while staying connected with your loved ones during your stay. </p>
           <a href="/reservation" class="btn">book new </a> 
    </div>
    <div className="image">
    <img src="room-4.png" alt="" /></div>
    </div>
  </section>
     {/*rooms section ends*/}
    
 </div>
  )
};

export default RoomsPage;