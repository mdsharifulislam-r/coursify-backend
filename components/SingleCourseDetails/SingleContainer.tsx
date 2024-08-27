import React, { Suspense } from 'react'
import SideBar from './SideBar'
import Container from './Container'
import { getSingleCourse } from '@/lib/Helper/getSingleCourse'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { CourseType } from '../Courses/CourseCard/CourseCard'
import SimilerCourse from './SimilerCourse'
import Title from '../Common/Title'
import { ModulePropsType } from './Curriculum/Module'
interface props{
  Course:Promise<CourseType>
}
export default async function SingleContainer({Course}:props) {
  const course = await Course

return (
    <div>
      <div className="container flex lg:flex-row  flex-col gap-8">
        <Container course={course} />
        <SideBar course={course}/>
      </div>
      <Suspense fallback={'loading...'}>
        <Title heading='Course for you' tagline='You may like them also'/>
      <SimilerCourse course={course}/>
      </Suspense>
      
    </div>
  )
}
