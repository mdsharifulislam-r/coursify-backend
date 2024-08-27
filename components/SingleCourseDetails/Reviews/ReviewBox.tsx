import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
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
            <span className='w-[10%] md:text-base text-sm'>{percent || 0}%</span>

        </div>
    )
}
export default function ReviewBox() {
    const star = new Array(5).fill(<FaStar key={Date.now()}/>)
  return (
    <div className='flex gap-3 w-full place-items-center'>
      <div className="box w-[30%] shadow-lg py-7 rounded-lg border border-primary flex-col place-items-center gap-3 flex justify-center">
        <h1 className='md:text-4xl text-2xl'>5</h1>
        <div className="starArr flex place-items-center text-orange">
            {star}
        </div>
        <span className='md:text-sm text-xs font-light'>Course Ratings</span>
      </div>
      <div className='w-[70%] h-full flex flex-col justify-between gap-1'>
        <Info star={5} percent={40}/>
        <Info star={4}/>
        <Info star={3}/>
        <Info star={2}/>
        <Info star={1}/>
      </div>
    </div>
  )
}
