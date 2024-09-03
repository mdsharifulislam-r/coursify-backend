import React from 'react'
import Title from '../Common/Title'
import CourseCard, { CourseType } from '../Courses/CourseCard/CourseCard'
import { InstructorType } from '@/lib/Types/Types'
import { getSingleCourse } from '@/lib/Helper/getSingleCourse'

export default function InstructorsCourse({user}:{user:InstructorType}) {
    const courses = user?.courseCollection?.length?user?.courseCollection:[]
    const courseCardData = courses?.map(async (courseId)=>{
        const course = await getSingleCourse(courseId)
        return  <CourseCard
        key={course._id}
        _id={course._id}
        name={course.name}
        instructor={course.instructor}
        duration={course.duration}
        image={course.image}
        desc={course.desc}
        rate={course.rate}
        type={course.type}
        level={course.level}
        price={course.price}
        promocodes={course.promocodes}
        ratings={course?.ratings}
      />
    })

  return (
    <div>
      <Title tagline='Some courses of ' heading={`${user?.name}`}/>
      <div className='w-full grid md:grid-cols-3 grid-cols-1 pt-5 gap-3'>
        {courseCardData}
      </div>
    </div>
  )
}
