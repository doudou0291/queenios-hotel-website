import React from 'react'
import { faSquareParking, faMugHot, faWifi, faComputer, faDumbbell,faGamepad,faBolt, faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceBox = ({text,icon}) => {

  return (
    <div className="rounded-sm hover:bg-brown border border-gray w-[200px] h-[200px] md:h-[250px] md:w-[250px]  p-2 flexCenter hover:text-white">
        <p className="text-20 text-[16px] md:text-[18px] lg:text-[20px] max-w-fit text-center flex flex-col gap-5">      
        <FontAwesomeIcon icon={icon} className='service-icon hover:text-white' />
        {text}  
        </p>
    </div>
  )

}

export default ServiceBox