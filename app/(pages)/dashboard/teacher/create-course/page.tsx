import CreateCourseForm from '@/components/CreateCourse/CreateCourseForm'
import React from 'react'

export default function page() {
  return (
    <div className='bg-dark'>
      <div className="container flex justify-center place-items-center min-h-screen ">
        <CreateCourseForm/>
      </div>
    </div>
  )
}
