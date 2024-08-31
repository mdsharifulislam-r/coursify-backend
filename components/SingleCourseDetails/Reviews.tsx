import React from 'react'
import ReviewBox from './Reviews/ReviewBox'
import FeaturedReview from './Reviews/FeaturedReview'
import ReviewForm from './Reviews/ReviewForm'
import { CourseType } from '../Courses/CourseCard/CourseCard'

export default function Reviews({course}:{course:CourseType}) {
  return (
    <div>
      <ReviewBox ratings={course?.ratings||[]}/>

     {course?.ratings?.length ? <FeaturedReview reviews={course?.ratings||[]} id={course._id}/>:
     <div className='p-5 text-center md:text-2xl text-sm font-extralight'>
      There are no Ratings yet you can be first
      </div>}
     <ReviewForm id={course._id}/>
    </div>
  )
}
