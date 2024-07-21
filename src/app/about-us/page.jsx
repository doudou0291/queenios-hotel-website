import React from 'react'
import Image from 'next/image'
import ".//page.css"
const AboutUsPage = () => {
  return (
    <div>
      {/*hero section start*/}
    <div className="Hero">
       <div className="content">
        <h1>Explore Our World of Luxury 
        </h1>
        <h1>And Comfort</h1>
        </div>
    </div>
    {/*about us section start*/}
    <section className="aboutus">
    <div className="content">
      <h3>Get to Know Us </h3>
     <p>Discover the epitome of luxury and hospitality in the heart of Ottawa at Queenios Hotel.
       With a rich history of providing exceptional service and unparalleled comfort, 
       Queenios offers luxurious accommodations, exquisite dining,
        and personalized service that will make your stay truly unforgettable. 
        Experience the perfect blend of elegance and convenience at Queenios Hotel Ottawa, 
      your home away from home in the capital city.</p>
    </div>
    <div className='image'>
      <img src="aboutus1.png"/>
    </div>
    </section>
    {/*about ends*/}
    {/*icons section start*/}
        <section className="icons-conta">
        <div className='icon'>
          <img src="/icons1.svg" alt="" />
        </div>
        <div className='icon'>
          <img src="/icons2.svg" alt="" />
        </div>
        <div className='icon exept'>
          <img src="/icons3.svg" alt="" />
        </div>
        </section>
    {/*icons section ends*/}
    {/*our mission section start*/}
 <section className='missions-conta'> 
  
    <h1 class="heading">Our Missions</h1>
   <div className='missions'>
      <div className='mission'>
       <div className="icon">
        <img src="mission1.svg" />
       </div>
       <div className='content'>
        <h3>Guest Satisfaction</h3>
        <p>Guest satisfaction is our top priority at Queenios Hotel Ottawa,
        where we strive to create memorable experiences.</p>
       </div>
    </div>
     <div className='mission'>
       <div className="icon">
        <img src="mission2.svg" />
       </div>
       <div className='content'>
        <h3>Innovation and Creativity</h3>
        <p> 
        At Queenios Hotel Ottawa, we embrace innovation and creativity to continually elevate our guest experience.</p>
       </div>
    </div>
     <div className='mission'>
       <div className="icon">
        <img src="mission3.svg" />
       </div>
       <div className='content'>
        <h3>Health and Well-being</h3>
        <p>Health and well-being are our focus at Queenios Hotel Ottawa, ensuring guests feel their best during their stay.</p>
       </div>
    </div>
   <div className='mission'>
       <div className="icon">
        <img src="mission4.svg" />
       </div>
       <div className='content exept'>
        <h3>Continuous Improvement</h3>
        <p>At Queenios Hotel Ottawa, we're dedicated to constantly refining our services to exceed guest expectations.</p>
       </div>
    </div>
    </div>
    </section>
 {/*our mission section ends*/}
    {/*what u can expect from us start*/ }
    <section className='expect'>
    <div className='head-conta'>
      <h1>What You Can Expect <br />From Us </h1>
      <p>Queenios Hotel Ottawa promises a seamless blend of luxury and hospitality. 
        From the moment you step through our doors, anticipate personalized service tailored to your needs, 
        sumptuously appointed accommodations, and a commitment to making your stay remarkable.
         Our attention to detail ensures that every aspect of your experience, from check-in to check-out, 
         exceeds your expectations. At Queenios,
         we're dedicated to creating moments that linger long after you've departed. </p>
    </div>
    <div className='card-content'>
      <div className='card'>
        <img src="/expect1.png" alt="" />
       <div className='card-body'>
        <h3>Parking</h3>
         <p>Experience the epitome of luxury and hospitality at Queenios</p>
         </div>
      </div>
      <div className='card'>
        <img src="/expect2.png" alt="" />
       <div className='card-body'>
        <h3>Breakfast</h3>
         <p>Experience the epitome of luxury and hospitality at Queenios </p>
         </div>
      </div>
      <div className='card'>
        <img src="/expect3.png" alt="" />
       <div className='card-body'>
        <h3>Free Wifi</h3>
         <p>Experience the epitome of luxury and hospitality at Queenios </p>
        </div>
      </div>
      <div className='card'>
        <img src="/expect4.png" alt="" />
       <div className='card-body'>
        <h3>Workspace</h3>
         <p>Experience the epitome of luxury and hospitality at Queenios </p>
         </div>
      </div>
      <div className='card'>
        <img src="/expect5.png" alt="" />
       <div className='card-body'>
        <h3>Gym & Yoga Rooms</h3>
         <p>
         Experience the epitome of luxury and hospitality at Queenios  </p>
         </div>
      </div>
      <div className='card'>
        <img src="/expect6.png" alt="" />
       <div className='card-body'>
        <h3>Free Electricity</h3>
         <p>Experience the epitome of luxury and hospitality at Queenios </p>
         </div>
      </div>
      <div className='card'>
        <img src="/expect7.png" alt="" />
       <div className='card-body'>
        <h3>Game Center</h3>
         <p>Experience the epitome of luxury and hospitality at Queenios </p>
          </div>
      </div>
      <div className='card'>
        <img src="/expect8.png" alt="" />
       <div className='card-body'>
        <h3>Swimming Pool</h3>
         <p>Experience the epitome of luxury and hospitality at Queenios </p>
         </div>
      </div>
       </div>
       <div className='button'>
      <a href="/services" >View More </a>
      </div>
      </section>
     {/*what u can expect from us ends*/ }
    {/*find us section start*/}
    <section className="findus">
      <div className='image'>
      <img src="findus.png"/>
     </div>
     <div className="content">
      <h3>Where You Can <br />
          Find Us  </h3>
     <p>Discover Queenios Hotel Ottawa, situated in the vibrant heart of the city. Our prime location grants effortless access to Ottawa's premier attractions, culinary hotspots, and cultural landmarks, ensuring that your stay with us is both convenient and unforgettable.</p>
     </div>
   </section>
     {/*find us section ends*/}
     {/*visit section start*/}
   <section className='visit'>
     <div className='head-conta'>
      <h1>What You Can Visit In </h1>
      <h1> Ottawa</h1>
     </div>
     <div className='card-content'>
      <div className='card'>
        <img src="/visit1.png" alt="" />
       <div className='card-body'>
        <h3>Parliament Hill</h3>
         <p>Iconic political center with historic buildings. 
          Tours, views, and summer guard ceremony. </p>
         </div>
        </div>
        <div className='card'>
        <img src="/visit2.png" alt="" />
       <div className='card-body'>
        <h3>Rideau Canal</h3>
         <p>Historic UNESCO site offering scenic views, 
          boating, and the world's largest skating rink in winter </p>
         </div>
        </div>
        <div className='card'>
        <img src="/visit3.png" alt="" />
       <div className='card-body'>
        <h3>ByWard Market</h3>
         <p>Historic market area with shops,
           restaurants, and local food, best place to pick up souvenirs </p>
         </div>
        </div>
        <div className='card'>
        <img src="/visit4.png" alt="" />
       <div className='card-body'>
        <h3>National Gallery of Canada</h3>
         <p>Premier art museum featuring Canadian and international masterpieces, 
          including works by the Group of Seven </p>
         </div>
        </div>
        <div className='card'>
        <img src="/visit5.png" alt="" />
       <div className='card-body'>
        <h3>Canadian Museum of History</h3>
         <p>Explore Canada's diverse heritage through
           captivating exhibits and artifacts at the Canadian Museum of History </p>
         </div>
        </div>
        <div className='card'>
        <img src="/visit6.png" alt="" />
       <div className='card-body'>
        <h3>National Arts Centre</h3>
         <p>Premier and the best venue showcasing diverse 
          performances , from arts and culture scene.</p>
         </div>
        </div>
        </div>
     </section>

    {/*visit section ends*/}
    
    
    
    
    
    
    
    
    </div>
  )
}

export default AboutUsPage