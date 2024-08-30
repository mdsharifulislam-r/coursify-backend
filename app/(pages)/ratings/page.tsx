
import RatingsContainer from '@/components/Ratings/RatingsContainer'
import FeaturedReview from '@/components/SingleCourseDetails/Reviews/FeaturedReview'
import { getSingleInstructor } from '@/lib/Helper/getSingleInstructor'
import { useAppSelector } from '@/lib/hooks/Hooks'
import { InstructorType } from '@/lib/Types/Types'
import React from 'react'

export default async function page({searchParams}:{searchParams:{id:string,sort:string}}) {
    const {id,sort}= searchParams
    const user:InstructorType = await getSingleInstructor(id) 
console.log(sort);

 
    
  return (
    <div>
     <RatingsContainer id={id} ratings={user?.ratings} name={user?.name} sort={sort}/>
    </div>
  )
}
