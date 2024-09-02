import { getAverageRatingPercent } from '@/lib/Helper/getAveragePercent'
import { review } from '@/lib/Types/Types'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import AvarageStar from './AvarageStar';
interface props{
    star:number,
    percent?:number
}

function Info({star,percent=0}:props){
    const fillStar = new Array(star).fill(<FaStar key={Date.now()}/>)
    const regStar = new Array(5-star).fill(<FaRegStar key={Date.now()}/>)
    return (
        <div className='flex gap-2 place-items-center w-full'>
            <div className='flex place-items-center text-orange w-[20%]'>{fillStar}{regStar}</div>
            <div className='w-[80%] py-1 bg-dark rounded-lg relative overflow-hidden'>
                <div style={{width:percent+"%"}} className='absolute h-full top-0 left-0 bg-orange'></div>
            </div>
            <span className=' md:text-base text-[10px]'>{percent.toFixed(1) || 0}%</span>

        </div>
    )
}
export default function ReviewBox({ratings}:{ratings:review[]}) {
  const avarage =  AvarageRatings(ratings)
 
   
  return (
    <div className='flex gap-3 w-full place-items-center'>
      <div className="box w-[30%] shadow-lg py-7 rounded-lg border border-primary flex-col place-items-center gap-3 flex justify-center">
        <h1 className='md:text-4xl text-2xl'>{!isNaN(avarage)?avarage.toFixed(1):0}</h1>
        <AvarageStar ratings={ratings}/>
        <span className='md:text-sm text-xs font-light'>Course Ratings</span>
      </div>
      <div className='w-[70%] h-full flex flex-col justify-between gap-1'>
        <Info star={5} percent={getAverageRatingPercent(ratings,5)}/>
        <Info star={4} percent={getAverageRatingPercent(ratings,4)}/>
        <Info star={3} percent={getAverageRatingPercent(ratings,3)}/>
        <Info star={2} percent={getAverageRatingPercent(ratings,2)}/>
        <Info star={1} percent={getAverageRatingPercent(ratings,1)}/>
      </div>
    </div>
  )
}


export function AvarageRatings(ratings:review[]){
  let sum = 0
  ratings?.forEach(item=>sum+=parseInt(item.star||""))
  const avarage = sum/ratings?.length
  return avarage
  
}