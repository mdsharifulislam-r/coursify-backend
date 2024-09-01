import UpdateCourseForm from '@/components/CourseUpdateForm/CourseUpdateForm'
import React from 'react'

export default function page({searchParams}:{searchParams:{id:string}}) {

  return (
    <div>
      <UpdateCourseForm id={searchParams.id}/>
    </div>
  )
}
