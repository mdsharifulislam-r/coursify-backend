import React from 'react'
import ReviewBox from './Reviews/ReviewBox'
import FeaturedReview from './Reviews/FeaturedReview'
import ReviewForm from './Reviews/ReviewForm'
import { CourseType } from '../Courses/CourseCard/CourseCard'

export default function Reviews({course}:{course:CourseType}) {
  return (
    <div>
      <ReviewBox/>
     <ReviewForm id={course._id}/>
    </div>
  )
}
