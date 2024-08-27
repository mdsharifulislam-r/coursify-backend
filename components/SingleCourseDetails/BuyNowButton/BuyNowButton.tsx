'use client'
import { CourseType } from '@/components/Courses/CourseCard/CourseCard'
import { useAppDispatch } from '@/lib/hooks/Hooks'
import { addCartData, cartItem } from '@/lib/Store/features/CartSlice'
import Link from 'next/link'
import React from 'react'

export default function BuyNowButton({course}:{course:CourseType}) {
    const dispatch = useAppDispatch()
    function AddData(){
        const obj:cartItem={
            name:course.name,
            author:course.instructor.name,
            _id:course._id,
            image:course.image,
            cartId:Math.floor(Math.random()*100000000).toString(),
            price:course.price,
            type:"course"
        }
        dispatch(addCartData(obj))
    }
  return (
    <Link onClick={AddData} href={`/checkout?id=${course?._id}`} className="w-full py-3 block text-center text-lg bg-primary text-white rounded-lg">Buy Now</Link>
  )
}
