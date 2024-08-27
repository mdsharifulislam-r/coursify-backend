'use client'
import { CourseType } from '@/components/Courses/CourseCard/CourseCard'
import { useAppDispatch } from '@/lib/hooks/Hooks'
import { addCartData, cartItem } from '@/lib/Store/features/CartSlice'
import React, { useEffect } from 'react'

export default function AddCartButton({course}:{course:CourseType}) {
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
    <button onClick={AddData} className="w-full py-3 text-lg mt-2 bg-secondary text-white rounded-lg">Add to Cart</button>
  )
}
