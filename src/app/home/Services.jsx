import React from 'react'
import ServiceBox from './ServiceBox'
import Link from 'next/link';
import Button from '../button/Button'
import { faSquareParking, faMugHot, faWifi, faComputer, faDumbbell,faGamepad,faBolt, faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Services = () => {
  return (
    <div className='flexCenter flex-col margin-container'>
        <div className='pt-10 text-center'>
            <h6 className='txt-24 text-[24px] md:text-[28px] lg:text-[30px] mb-2'>Our Services</h6>
            <h2 className='txt-50 text-[30px] md:text-[40px] lg:text-[50px] lg:txt-68 '>Personalized Hospitality Discover Our Signature Services</h2>
        </div>
        <div className='my-10 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4'>
            <ServiceBox icon={faSquareParking} text="Convenient on-site parking available for guests' ease."/>
            <ServiceBox icon={faMugHot} text="Complimentary breakfast served daily for guests' enjoyment."/>
            <ServiceBox icon={faWifi} text="High-speed complimentary WiFi for seamless connectivity."/>
            <ServiceBox icon={faComputer} text="Efficient workspace designed for work and relaxation."/>
            <ServiceBox icon={faDumbbell} text="tate-of-the-art fitness center for guests' wellness needs."/>
            <ServiceBox icon={faGamepad} text="Ultimate entertainment hub for guests' leisure enjoyment."/>
            <ServiceBox icon={faBolt} text="Complimentary electricity service for guests' convenience and comfort."/>
            <ServiceBox icon={faPersonSwimming} text="Refreshing aquatic facility offering relaxation and leisure activities."/>
        </div>
        <Link href="/services">
        <Button title="View More" textColor="black" bgColor="transparent" border={true} hover={false}></Button>
        </Link>
    </div>
  )
}

export default Services