"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/navigation';
const BookingPage = () => {
  const router = useRouter()
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phoneNumber: '',
  //   numberOfPersons: '',
  //   arrivalDate: '',
  //   numberOfNights: '',
  //   description: '',
  // });
  // const {checkDate, selectedPerson, selectedNight} = router.query

  // console.log(localStorage.getItem('date'))

  const today = new Date().toISOString().split('T')[0]
  const navDate = new Date(localStorage.getItem('date')) 
  navDate.setDate(navDate.getDate() + 1)
  

  const [date, setDate] = useState(navDate.toISOString().split('T')[0])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [night, setNight] = useState(localStorage.getItem('night'))
  const [person, setPerson] = useState(localStorage.getItem('person'))
  const [rooms, setRooms] = useState("")
  const [checkIn, setCheckIn] = useState(navDate.toISOString().split('T')[0])
  const [status, setStatus] = useState(1)
  const [code, setCode] = useState("")
  const [description, setDescription] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false);
  useEffect(() => {
    const fetchCode = async ()=>{
        try {
        const response = await axios.get("http://localhost:5000/api/request")
        console.log(response.data.data.max)
        setCode(`${parseInt(response.data.data.max.count) +1}`)
        console.log(code)
      } catch (error) {
        console.log(error)
      }

      }

      fetchCode()
      
  }, []);

  const handleCode = () =>{
    const toInt = parseInt(code) + 1
    
    console.log(toInt)
    setCode(`${toInt}`)
    if(isNaN(code)){
      setCode('1')
    }
  }
  console.log(code)

  const [phoneError, setPhoneError] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  send data to backend here
    

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Phone number format incorrect');
      
    } else {
      setPhoneError('');
      // handleCode()
      console.log(checkIn)

      try {
        const response = await axios.post('http://localhost:5000/api/request',{
          client_fullname : name,
          client_phone : phone,
          night_count : night,
          person_count : person,
          rooms_count : rooms, 
          check_in : checkIn,
          status_id : status,
          request_code: isNaN(code) ? '1' : code,
          description : description
        });
        console.log(response)
      } catch (error) {
        console.log(error)
      }
      
    }
  };

    const handleDate = (e)=>{
      e.preventDefault;
      console.log(checkIn)
      setDate(e.target.value)
      const newDate = new Date(e.target.value)
      newDate.setDate(newDate.getDate() +1)
      const formatedDate = newDate.toISOString().split('T')[0]
      
      console.log(formatedDate)
      setCheckIn(formatedDate)
    }
  return (
    <div>
      <div>
        <Image src="/booking.png" alt='book' width={1600} height={628} className='relative lg:h-[600px] '></Image>
        <h1 className='txt-36  lg:txt-68 w-[400px] lg:w-[600px] text-white absolute top-[40%] right-[50%] translate-x-[50%] -translate-y-[60%] lg:translate-x-[30%] lg:-translate-y-[30%] '>Plan Your Getaway And Reserve Your Room Now</h1>
      </div>
      <div className="my-4 mx-auto border-b pb-4 border-brown max-w-[1000px]">
      <h3 className="txt-50 text-[24px] md:text-[40px] lg:text-[50px] my-6 md:my-8 text-center">Your Informations</h3>
        <form onSubmit={(e)=>{handleCode()
                              handleSubmit(e)
                              setSubmitSuccess(true)}} className='px-10 '>
          <div className='flex gap-4'>
            <div className="mb-4 w-[50%]">
            <label htmlFor="name" className="block txt-26 text-[26px] md:text-[28px] lg:text-[30px]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="mt-1 p-2 border border-brown rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label htmlFor="phoneNumber" className="block  txt-26 text-[26px] md:text-[28px] lg:text-[30px]">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder='0123456789'
                className="mt-1 p-2 border border-brown rounded-md w-full"
                required
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>
          </div>
          <div className='flex gap-4 '>
             <div className="mb-4 w-[50%]">
             <label htmlFor="numberOfPersons" className="block  txt-26 text-[26px] md:text-[28px] lg:text-[30px]">
                  Number of Persons
                </label>
                <input
                  type="number"
                  id="numberOfPersons"
                  name="numberOfPersons"
                  value={person}
                  onChange={(e)=>setPerson(e.target.value)}
                  className="mt-1 p-2 border border-brown rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4 w-[50%]">
              <label htmlFor="arrivalDate" className="block  txt-26 text-[26px] md:text-[28px] lg:text-[30px]">
                  Arrival Date
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  min={today}
                  value={date}
                  onChange={handleDate}
                  className="mt-1 p-2 border border-brown rounded-md w-full"
                  required
                />
              </div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className="mb-4 w-[50%]">
            <label htmlFor="numberOfNights" className="block  txt-26 text-[26px] md:text-[28px] lg:text-[30px]">
                Number of Nights
              </label>
              <input
                type="number"
                id="numberOfNights"
                name="numberOfNights"
                value={night}
                onChange={(e)=>setNight(e.target.value)}
                className="mt-1 p-2 border border-brown rounded-md w-full"
                required
                />
            </div>
            <div className="mb-4 w-[50%]">
            <label htmlFor="description" className="block  txt-26 text-[26px] md:text-[28px] lg:text-[30px]">
                Number of Rooms
              </label>
              <input
                type="number"
                id="numberOfNights"
                name="numberOfNights"
                value={rooms}
                onChange={(e)=>setRooms(e.target.value)}
                className="mt-1 p-2 border border-brown rounded-md w-full"
                required
                />
            </div>
          </div>
        <div className="mb-4">
        <label htmlFor="description" className="block  txt-26 text-[26px] md:text-[28px] lg:text-[30px]">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            rows="4"
            className="mt-1 p-2 border border-brown rounded-md w-full"
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit"  className="px-6 py-2 bg-brown text-white rounded-md">
            Submit
          </button>
          <p className={submitSuccess ? `block` : `hidden`}>
              sent successfully
            </p>
        </div>
        </form>
      </div>
    </div>
  )
}

export default BookingPage