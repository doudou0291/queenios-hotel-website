import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'
import Link from 'next/link'
const About = () => {
  return (
    <div>
       <div className='py-5 lg:py-0 my-5 flex flex-col md:flex-row gap-8 bg-biege lg:h-[700px] '>
            <Image src="/about.jpg" width={710} height={722} className='hidden lg:inline-block w-[50%] h-full'/>
            <div className='p-4 text-center lg:text-start lg:flex lg:flex-col lg:items-start lg:justify-center'>
                <h6 className='txt-24 text-[24px] md:text-[28px] lg:text-[30px]'>About Us</h6>
                <h2 className='txt-50 text-[30px] md:text-[40px] lg:text-[50px] '>Explore Our World of Luxury and Comfort</h2>
                <p className='txt-20 text-[20px]  pb-4 text-[rgba(33, 33, 33, 0.68)]'>Welcome to Queenios, where luxury meets hospitality. Nestled in the heart of Ottawa, our hotel is more than just a place to stay; it's a destination in itself.</p>
                <Link href="/about-us">
                  <Button title="Read More" bgColor="transparent" txtColor="black" border={true} hover={false}/>
                </Link>
            </div>
        </div> 
    </div>
  )
}

export default About