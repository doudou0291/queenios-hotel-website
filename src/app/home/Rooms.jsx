import React from 'react'
import Image from "next/image";
import RoomBox from './RoomBox';
const Rooms = () => {
  return (
    <div className='lg:px-10 py-5 lg:py-10 my-5 margin-container'>
        <div className='px-2 lg:px-5 '>
            <div className="mb-10 lg:ml-6 mt-4 text-center">
                <h6 className=' txt-24 text-[24px] md:text-[28px] lg:text-[30px] mb-3'>Our Rooms</h6>
                <h2 className='txt-50 text-[30px] md:text-[40px] lg:text-[50px] lg:txt-68 lg:text-center'>Indulge in Luxury Explore Our Rooms</h2>
            </div>
            <div className='hide-scrollbar flex flex-col justify-center items-center md:flex-row md:items-start md:justify-start gap-8 overflow-y-auto'>
                <RoomBox url={'/room-1.png'} title={"Standard Room"} text={"Comfortable and cozy, with essential amenities for a relaxing stay."}></RoomBox>
                <RoomBox url={'/room-2.png'} title={"Deluxe Room"} text={"Elegant, spacious, and luxurious with modern amenities and comfort."}></RoomBox>
                <RoomBox url={'/room-3.png'} title={"Suit"} text={"Ultimate luxury and comfort with expansive space and exclusive amenities"}></RoomBox>
                <RoomBox url={'/room-4.png'} title={"Connectiong Rooms"} text={"Perfect for families, offering separate accommodations with connecting doors."}></RoomBox>
            </div>
        </div>
    </div>
  )
}

export default Rooms