import React from 'react'

const Button = ({title,bgColor,txtColor,border,hover}) => {
  return (
    <button className={`w-[202px] h-[53px] px-[8px] py-[8px] rounded-[6px] bg-${bgColor}  text-${txtColor} txt-16 ${hover ? `hover:text-${bgColor}  hover:bg-${txtColor}` : "none"}} ${border ? `border-2 border-${txtColor}` : "none"}}`}>{title}</button>
  )
}

export default Button