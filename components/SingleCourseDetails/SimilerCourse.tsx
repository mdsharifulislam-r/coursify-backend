import React from 'react'
import CourseCard, { CourseType } from '../Courses/CourseCard/CourseCard'
import { getCourse } from '@/lib/Helper/getCourse'

interface props{
    course:CourseType
}
export default async function SimilerCourse({course}:props) {
    const courses:CourseType[] = await getCourse()
    const suggestion = courses?.filter(item=>{
        if((item.type==course.type  || item.level==course.level||item.instructor===course.instructor || item.language==course.language) && item._id!=course._id){
            return item
        }
        
    }) 
    const data =suggestion ? suggestion.slice(0,3)?.map(course=>{
        return <CourseCard
        key={course._id}
        _id={course._id}
        name={course.name}
        duration={course.duration}
        image={course.image}
        desc={course.desc}
        rate={course.rate}
        type={course.type}
        level={course.level}
        price={course.price}
        instructor={course.instructor}
        />
      }):[]
    
    
  return (
    <div className='container grid pt-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
      {data}
    </div>
  )
}
