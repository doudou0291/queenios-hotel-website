import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {faFacebook,faInstagram,faLinkdin,faPhone,faFax,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const page = () => {
  return (
    <div className='mb-4 border-b'>
      <div>
        <Image
          src="/contact.png"
          width={1440}
          height={628}
          className="relative lg:h-[600px] w-full"
          alt="contact page image"
        ></Image>
        <h1 className="txt-36 text-[25px] md:text-[40px] lg:text-[50px]  lg:txt-68 w-[400px] lg:w-[600px] text-white   absolute top-[38%] md:top-[50%] right-[50%] translate-x-[50%] -translate-y-[60%] lg:translate-x-[50%] lg:-translate-y-[30%] ">
        Get in Touch with Queenios Contact Our Team for Assistance and Inquiries
        </h1>
      </div>
      <div className='flex flexAround m-10'>
        <div className='txt-26 text-[26px] md:text-[28px] lg:text-[30px]'>
          <h3 className="txt-50 text-[30px] md:text-[40px] lg:text-[50px] my-6 md:my-8 text-center">Contact</h3>
          <div className='flex gap-4'>
            <FontAwesomeIcon icon={faPhone} style={{  width:"20px", height:"20px",color:"#8C7460"}}/>
            <div>Reception: <span className='font-light'>+12362373</span></div>
          </div>
          <div className='flex gap-4'>
            <FontAwesomeIcon icon={faFax} style={{  width:"20px", height:"20px",color:"#8C7460" }}/>
            <div>Fax: <span className='font-light'>+12362373</span></div>
          </div>
          <div className='flex gap-4'>
            <FontAwesomeIcon icon={faEnvelope} style={{  width:"20px", height:"20px",color:"#8C7460"}}/>
            <div>Email: <span className='font-light'>queenioshotel.com</span></div>
          </div>
          <div className='flex gap-4'>
            <FontAwesomeIcon icon={faLocationDot} style={{ width:"20px", height:"20px",color:"#8C7460" }}/>
            <div>Location: <span className='font-light'>5TH avenue, Ottawa, Canada</span></div>
          </div>
            <div className='flex gap-4'>
              <div className='flex gap-4'>
                <FontAwesomeIcon icon={faFacebook} style={{ width:"20px", height:"20px",color:"#8C7460" }}/>
                <Link href="/">Queenios_hotel</Link>
              </div>
              <div className='flex gap-4'>
                <FontAwesomeIcon icon={faInstagram} style={{ width:"20px", height:"20px",color:"#8C7460" }}/>
                <Link href="/">Queenios_hotel</Link>
              </div>
              <div className='flex gap-4'>
                <FontAwesomeIcon icon={faLinkdin} style={{ width:"20px", height:"20px",color:"#8C7460" }}/>
                <Link href="/">Queenios_hotel</Link>
              </div>
            </div>
        </div> 
        <Image src="/contact2.png"
          width={864}
          height={813}
          className="hidden md:inline-block md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          alt="contact page image"></Image>
      </div>
    </div>
  )
}

export default page