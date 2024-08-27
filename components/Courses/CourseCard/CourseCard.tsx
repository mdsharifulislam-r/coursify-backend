import { Promo } from '@/app/api/promo/promocourse/route'
import { Span } from 'next/dist/trace'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaClock, FaStar, FaStarHalf } from 'react-icons/fa'

export interface CourseType{
  _id:string,
    image:string,
    name:string,
    desc:string,
    rate:number,
    duration:string,
    type:string,
    level:string,
    language?:string,
    instructor:{name:string,id:string},
    ratings?:object[],
    promovideo?:string,
    module?:any,
    price:string,
    student?:number,
    certifications?:boolean,
    lessons?:number,
    promocodes?:Promo[],
    pendingStudents:string[],
    courseStudents:string[],

}
export default function CourseCard({image,name,desc,rate=0,duration,type,_id,price,level,instructor}:CourseType) {

  
    const starArray =  new Array(Math.floor(rate)).fill(<FaStar key={Date.now()}/>)
  return (
    <div className='w-full  grid popUp grid-cols-1 group shadow-lg overflow-hidden transition-all rounded-md duration-700 cursor-pointer'>
      <Link href={`/courses/${_id}`} className="imageBox w-full min-h-48 relative ">
        <div className="shade absolute opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-[3] w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)]">
            
        </div>
        <div className="absolute z-20 px-4 py-2 rounded-md top-5 left-5 bg-orange text-white text-sm flex gap-1 place-items-center"><FaClock/> {duration}</div>
        
        <Image alt='' width={1000} height={1000} src={image} className='absolute -z-0 object-cover w-full h-full top-0 left-0'/>
      </Link>
      <div className="textBox w-full px-7  py-5 pb-7 flex flex-col gap-2 translate-y-4 transition-all duration-700 group-hover:translate-y-0">
        <div className="type flex justify-between text-xs place-items-center">
        <button className='p-1  bg-primary text-white text-[9px]'>{type}</button>
        <div className="price text-xl text-secondary font-bold capitalize">
        {price!=="free"? `$${price}`:<><span className='p-1 text-sm bg-orange text-white rounded-md'>{price}</span></>}
        </div>
        </div>
        
        <span className='text-xs'>For <span className=' capitalize px-3 py-1 text-white rounded-md bg-orange '>{level}</span></span>
        <h1 className='text-base font-bold line-clamp-2'>{name}
        </h1>
        <span className=' text-sm text-slate-500'>By <span className='text-base font-bold text-orange'>{instructor.name}</span></span>

        <p className=' line-clamp-2 text-[10px] font-light'>
            {desc}
        </p>
        <div className='text-xs font-extralight flex place-items-center gap-2'>
            <div className='text-orange flex'>{starArray}{rate.toString().includes(".") && <FaStarHalf/>}</div><span>({rate}/ 2 Ratings)</span>
        </div>
        <div className=''>
            <Link href={`/courses/${_id}`} className='px-5 lg:py-2 md:p-2 py-1 text-sm transition-all opacity-0 group-hover:opacity-100 duration-700 group-hover:translate-y-0  rounded-md translate-y-20   bg-secondary text-white'>Enroll Now</Link>
        </div>
      </div>
    </div>
  )
}
