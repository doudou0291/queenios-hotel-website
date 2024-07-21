"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/Button'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NavBar = () => {
const [list,setList]=useState(false);
  return (
    <nav className='w-full h-[80px] md:h-[90px] lg:h-[100px] border-b '>
        <header className='flex items-center px-[40px] py-[20px] md:px-[50px] md:py-[50px]'>
           <Link href="/home" ><Image src="/logo2.png" width={105} height={105} className='absolute -top-[10px] h-[90px] w-[90px] md:w-[105px] md:h-[105px]'></Image></Link>
           <div className='right-4 top-5 absolute md:flexAround md:gap-3 md:w-[70%]'>
              <div className='flex-col flex items-end'>
                  <button className='md:hidden' onMouseEnter={()=>{list? setList(false): setList(true)}}>
                    <FontAwesomeIcon icon={faBars} className='menu-icon' />
                  </button>
                  <ul className={`h-full ${!list ? `hidden `:"none" } ${list ? `flex-col flexCenter  py-4 px-8 rounded bg-brown text-white z-50`:"none" }   md:gap-4 lg:gap-7 xl:gap-9 md:flexBetween`}>
                      <Link href="/" className='txt-20-4 text-[20px] hover:text-[23px] hover:text-black'>Home</Link>
                      <Link href="/rooms" className='txt-20-4 text-[20px] hover:text-black hover:text-[23px]'>Rooms</Link>
                      <Link href="/about-us" className='txt-20-4 text-[20px] hover:text-black hover:text-[23px]'>About </Link>
                      <Link href="/services" className='txt-20-4 text-[20px] hover:text-black hover:text-[23px]'>Services</Link>
                      <Link href="/assistant" className='txt-20-4 text-[20px] hover:text-black hover:text-[23px]'>Assistant</Link>
                      <Link href="/contact" className='txt-20-4 text-[20px] hover:text-black hover:text-[23px]'>Contact</Link>
                      <Link href="/reservation" className={`txt-20-4 text-[20px] hover:text-black hover:text-[23px] ${!list ? `hidden `:"none" }`}>Book Now</Link>
                  </ul>
              </div>
              <div className='hidden md:inline-block'>
                <Link href="/reservation">
                   <Button title="Book Now" bgColor="brown" txtColor="white" border={false} hover={false}></Button>
                </Link>
              </div> 
            </div> 
        </header>
    </nav>
  )
}

export default NavBar