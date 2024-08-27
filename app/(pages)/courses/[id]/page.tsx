
import { CourseType } from "@/components/Courses/CourseCard/CourseCard";
import Header from "@/components/SingleCourseDetails/Header"
import SingleContainer from "@/components/SingleCourseDetails/SingleContainer"
import { getSingleCourse } from "@/lib/Helper/getSingleCourse";
import { Suspense } from "react";



export default function page({params}:any) {
  const {id} = params
  
  const course:Promise<CourseType> = getSingleCourse(id)
    
  return (
    <div>
      <Suspense fallback={"Loading..."}>
      <Header Course={course}  />
      <SingleContainer Course={course} />
      </Suspense>
      
    </div>
  )
}
