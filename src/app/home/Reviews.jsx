import React from 'react'
import Image from 'next/image'
import Rating from '@mui/material/Rating';

const Review = ({ name, picture,rating, text, date }) => {
  return (
    <div className="flex flex-col  items-center space-y-2 p-4 bg-biege rounded-lg shadow-md">
       
        <div className="flex gap-2">
      <Image src={picture} alt={name} className="w-26 h-26 rounded-full " height={26} width={26}/>
      <h3 className="text-xl font-medium text-black">{name}</h3>
        </div>
      <Rating name="half-rating" precision={0.5} value={rating} readOnly />     
      <p className="text-black">{text}</p>
      <span className="text-sm text-black">{date}</span>
    </div>
  )
}

const Reviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      picture: '/rating.jpg', // Replace with your image path
      rating: 4.5,
      text: 'The hotel was amazing! The staff was friendly and helpful, the room was clean and comfortable, and the location was perfect. I would definitely recommend this hotel to anyone visiting the city.',
      date: '2024-03-24',
    },
    {
      name: 'Jane Smith',
      picture: '/rating.jpg', // Replace with your image path
      rating: 5,
      text: 'This hotel exceeded my expectations. The room was spacious and well-appointed, the amenities were top-notch, and the breakfast was delicious. I will definitely be staying here again on my next trip.',
      date: '2024-03-23',
    },
    {
      name: 'Mike Jones',
      picture: '/rating.jpg', // Replace with your image path
      rating: 4,
      text: 'The hotel was good overall. The room was clean and comfortable, and the location was convenient. However, the service was a bit slow at times. I would still recommend this hotel to others.',
      date: '2024-03-22',
    },
  ]

  return (
    <div className='py-10 mx-10'>
     <h1 className="txt-24 text-[24px] md:text-[28px] lg:text-[30px] text-center my-8">Your Reviews</h1>
    <div className="flex flex-col md:flex-row  justify-center gap-4 mx-8">
      {reviews.map((review) => (
        <Review key={review.name} {...review} />
      ))}
    </div>
    </div>
  )
}

export default Reviews