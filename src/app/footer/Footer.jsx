import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {faPhone,faFax,faEnvelope ,faFacebook,faInstagram,faLinkdin} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className='margin-container txt-12 text-[18px] '>
      <div className='grid gap-8 grid-cols-1  lg:grid-cols-2'>
        <div className='gap-4 flex justify-start items-center'>  
          <Image src="/logo2.png" width={100} height={100}></Image>
          <p className=' max-w-[200px]:'>Welcome to Queenios Hotel, a luxurious 5-star haven in the heart of Ottawa, Canada! Since 1916, we have been welcoming guests with warm hospitality and exceptional service. Nestled on the prestigious 5th Avenue, our hotel is a blend of historic charm and modern elegance.</p>
        </div>
        <div className='grid gap-8 grid-cols-3'>
          <div className='flex flex-col justify-start items-start gap-4'>
            <h6 className='text-[20px]'>Quick links</h6>
            <Link href="/reservation">Room booking</Link>
            <Link href="/rooms">Rooms </Link>
            <Link href="/contact">Assistant</Link>
            <Link href="/about-us">About US</Link>
          </div>
          <div className='flex flex-col justify-start items-start gap-4'>
            <h6 className='text-[20px]'>Contact</h6>
            <p><FontAwesomeIcon icon={faPhone} className='footer-icon mr-2' />+2133646377 </p>
            <p><FontAwesomeIcon icon={faFax} className='footer-icon mr-2' />+2133646979</p>
            <p><FontAwesomeIcon icon={faEnvelope} className='footer-icon mr-2' />queenios@gmail.com</p>
          </div>
          <div className='flex flex-col justify-start items-start gap-4'>
            <h6 className='text-[20px]'>Social media</h6>
            <Link href="/"><FontAwesomeIcon icon={faFacebook} className='footer-icon mr-2' />Facebook</Link>
            <Link href="/"><FontAwesomeIcon icon={faInstagram} className='footer-icon mr-2' />Instagram</Link>
            <Link href="/"><FontAwesomeIcon icon={faLinkdin} className='footer-icon mr-2' />Linkedin</Link>
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default Footer