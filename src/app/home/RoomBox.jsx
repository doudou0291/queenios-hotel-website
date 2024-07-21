import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RoomBox = ({url,title,text}) => {
  return (
    <div>
        <Image src={url} width={313} height={435} className='w-[300px] h-[300px] lg:w-[300px] lg:h-[350px] rounded-sm'/>
        <div className='my-2 ml-3 max-w-[300px]'>
        <h3 className='txt-28 text-[28px]'>{title}</h3>
        <p className='txt-20 text-[20px] mt-2'>{text}</p>
        <Link href="/rooms">
          <button className='txt-16 text-[16px] mt-2'>Read More <FontAwesomeIcon icon={faChevronRight} style={{ width:"8px" }}/></button>
        </Link>
        </div>
    </div>
  )
}

export default RoomBox