import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function MakeStar({star}:{star:string}) {
    const fillStar = new Array(parseInt(star)).fill(<FaStar key={Date.now()}/>);
    const regStar = new Array(5 - parseInt(star)).fill(<FaRegStar key={Date.now()} />);
  return (
    <div className="flex place-items-center text-orange ">
    {fillStar}
    {regStar}
  </div>
  )
}
