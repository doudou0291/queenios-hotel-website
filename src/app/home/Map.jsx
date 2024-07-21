
import React from 'react'
import Image from 'next/image'
import Map3 from './Map3'
const Map = () => {
  
    return (
        <div className='relative margin-container flexCenter flex-col'>
        <Map3/>
        <div className='absolute mx-4 px-8 py-5 bg-biege text-start w-[75%] bottom-[60px] rounded-sm opacity-80'>
            <h4 className='txt-36'>Location of our Hotel</h4>
            <p className='txt-16 text-gray-400 max-w-[520px]'>this will help you find our hotel easily </p>
        </div>
    </div>
    )



}

export default Map