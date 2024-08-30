"use client"
import { useAppDispatch } from '@/lib/hooks/Hooks'
import { setRatings } from '@/lib/Store/features/UserSclice'
import { review } from '@/lib/Types/Types'
import Link from 'next/link'
import React from 'react'

export default function SeeAllLink({ratings,id}:{ratings:review[],id:string}) {
    
    
    const dispatch = useAppDispatch()
    function SetRatingsData(){
     
        
        dispatch(setRatings(ratings))
    }
  return (
    <Link href={`/ratings?id=${id}`} onClick={SetRatingsData} className="text-primary font-medium">See all reviews</Link>
  )
}
