"use client";
import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ReservationBar = () => {

  const router = useRouter(); 

  const [startDate, setStartDate] = useState("");
  const today = new Date().toLocaleDateString();
  console.log(today)
  const [selectedCountPersons, setSelectedCountPersons] = useState("");
  const [selectedCountNights, setSelectedCountNights] = useState("");


  const renderOptions = (op) => {
    const options = [];
    for (let i = 1; i <= 4; i++) {
      options.push(
        <option key={i} value={i}>
          {i} {op}(s)
        </option>
      );
    }
    return options;
  };

  const handleClick = () =>{
    localStorage.setItem('date', startDate)
    localStorage.setItem('person', selectedCountPersons)
    localStorage.setItem('night', selectedCountNights)
    router.push("/reservation", {state :{ checkDate : startDate, selectedPerson: selectedCountPersons, selectedNight: selectedCountNights}})
  }

  return (
    <form className="h-full w-full mx-auto rounded-[16px] bg-white ">
      <div className="flex flex-col w-full h-full lg:flex-row gap-4 p-4">
        <div className="flex-1 lg:border-r">
          <div className="flexCenter flex-col">
            <div>
              {/* icon */}
              <p className="txt-20">Arrival Date</p>
            </div>
            <div>
              {/* icon */}
              <DatePicker
                className="w-full h-full text-center"
                selected={startDate}
                placeholderText={today}
                onChange={(date) => setStartDate(date)}
              >
                {" "}
              </DatePicker>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:border-r">
          <div className="flexCenter flex-col">
            <div>
              {/* icon */}
              <p className="txt-20">Number of nights</p>
            </div>
            <select
              id="nights-count-select"
              className=" focus:outline-none"
              onChange={(e) => setSelectedCountNights(e.target.value)}
              value={selectedCountNights}
            >
              <option value=""></option>
              {renderOptions("night")}
            </select>
          </div>
        </div>
        <div className="flex-1 lg:border-r">
          <div className="flexCenter flex-col">
            <div>
              {/* icon */}
              <p className="txt-20">Number of people</p>
            </div>
            <select
              id="person-count-select"
              className=" focus:outline-none"
              onChange={(e) => setSelectedCountPersons(e.target.value)}
              value={selectedCountPersons}
            >
              <option value=""></option>
              {renderOptions("person")}
            </select>
          </div>
        </div>
        {/* <Link href={
                    {
                      pathname:"/reservation",
                      query:{
                        startDate:startDate,
                        selectedCountNights:selectedCountNights,
                        selectedCountPersons:selectedCountPersons,
                      }
                    }
        }>
        <Button
          title="Book Now"
          bgColor="brown"
          txtColor="white"
          border={false}
          hover={false}
        ></Button>
        </Link> */}
        <button className="w-[202px] h-[53px] px-[8px] py-[8px] rounded-[6px] bg-brown text-white txt-16 hover:text-brown hover:bg-white border-2 border-white"
                onClick={handleClick}>Book Now</button>
      </div>
    </form>
  );
};

export default ReservationBar;