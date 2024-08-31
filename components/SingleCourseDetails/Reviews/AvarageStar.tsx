import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { AvarageRatings } from './ReviewBox'
import { review } from '@/lib/Types/Types'

export default function AvarageStar({ratings}:{ratings:review[]}) {
    const avarage =  AvarageRatings(ratings)
    const star =avarage?.toString().includes('.')?new Array(Math.floor(avarage||0)).fill(<FaStar key={Date.now()}/>): new Array(avarage||0).fill(<FaStar key={Date.now()}/>)
    const Regstar =avarage?.toString().includes('.')? new Array((5-(Math.floor(avarage))-1)||0).fill(<FaRegStar key={Date.now()}/>):new Array((5-avarage)||0).fill(<FaRegStar key={Date.now()}/>)
   
  return (
    <div className="starArr flex place-items-center text-orange">
    {star}
    {avarage?.toString().includes('.') && <FaRegStarHalfStroke/>}
    {Regstar}
</div>
  )
}
