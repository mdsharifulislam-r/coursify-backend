import React from 'react'
import FloatingBg from '../Common/FloatingbgForHeader/FloatingBg'
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CiGlobe } from "react-icons/ci";
import { FaStar } from 'react-icons/fa';
import { CourseType } from '../Courses/CourseCard/CourseCard';
interface props{
    Course:Promise<CourseType>
}
export default async function Header({Course}:props) {
    const course = await Course
    const starArr = new Array(5).fill(<FaStar key={Date.now()}/>)
  
    
  return (
    <div className='py-32 bg-dark mb-10 relative pointer-events-none'>
      <FloatingBg/>
     <div className="container">
        <div className='lg:w-1/2 w-full lg:block flex place-items-center flex-col'>
            <h1 className='lg:text-[2.7rem] md:text-4xl text-2xl lg:text-left text-center lg:leading-[1.3] font-bold text-primary'>{course.name}</h1>
            <div className='flex place-items-center lg:gap-2 md:gap-2 gap-1 lg:text-sm md:text-sm text-xs pt-5 text-slate-600'>
                <div className="man flex gap-1 place-items-center">
                    <LiaChalkboardTeacherSolid/>
                    By {course.instructor?.name}

                </div>
                <div className="lang flex gap-1 place-items-center px-3 border-l border-r">
                    <CiGlobe/>
                    {course.language}
                </div>
                <div className="star flex gap-1 place-items-center">
                    <div className="star flex place-items-center text-orange">
                        {starArr}
                    </div>
                    (3 Reviews)
                </div>
            </div>
        </div>
     </div>
     
    </div>
  )
}
