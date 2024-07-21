import React from "react";
import Image from "next/image";
import ReservationBar from "./ReservationBar";
const HomeTop = () => {
  return (
    <div>
      <div className=" w-full lg:flex  ">
        <div className="lg:w-[50%] m-6 lg:px-10  flexCenter flex-col gap-4 lg:flexStart">
          <h1 className="txt-60 text-[50px] md:text-[60px] lg:text-[80px] text-center lg:txt-88  lg:text-start  ">
            Here Where Luxury Meets Comfort
          </h1>
          <p className="txt-16 text-[16px]  lg:text-[18px] text-[#212121] opacity-[68%] lg:txt-23 text-center lg:text-start  mt-2">
            Immerse yourself in luxury and comfort at Queenios, where every
            detail has been meticulously crafted to ensure a truly unforgettable
            experience.
          </p>
        </div>
        <div className="lg:w-[50%] ">
          <Image
            src="/home-page.jpg"
            width={710}
            height={909}
            className="h-[500px] md:h-[550px] lg:h-[600px] md:w-full relative"
          ></Image>
        </div>
      </div>
      <div className="lg:w-[900px] top-[55%] md:top-[55%] lg:top-[50%]  right-[50%] translate-x-[50%]  translate-y-[50%] lg:translate-y-[300%]  absolute drop-shadow-2xl">
        <ReservationBar></ReservationBar>
      </div>
    </div>
  );
};

export default HomeTop;