
import FeaturedReview from '@/components/SingleCourseDetails/Reviews/FeaturedReview'
import { getSingleInstructor } from '@/lib/Helper/getSingleInstructor'
import { useAppSelector } from '@/lib/hooks/Hooks'
import React from 'react'

export default async function page({searchParams}:{searchParams:{id:string}}) {
    const {id}= searchParams
    const user = await getSingleInstructor(id)
  return (
    <div>
     
    </div>
  )
}
