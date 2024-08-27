import Image from 'next/image'
import React from 'react'
import image from "@/assets/Home/PopulerCourse/course2.webp"
import { cartItem } from '@/lib/Store/features/CartSlice'

import { makePrice } from '../Common/Cart'
import dynamic from 'next/dynamic'
const CourseBox = dynamic(()=>import('./CourseBox'),{ssr:false})



export default function Details({data}:{data:cartItem[]}) {
    const boxs = data?.map(item=>{
        return <CourseBox item={item} key={item._id}/>
    })
    const price = makePrice(data)
  return (
    <div className="details w-full">
    <h1 className='text-2xl font-semibold pb-3'>Your Order</h1>
    <div className='border p-4
    '>
        {boxs}
        <div className="total flex justify-between place-items-center py-3 border-b">
            <span>subtotal</span>
            <span className='text-slate-500'>${price}</span>
        </div>
        <div className="total flex justify-between place-items-center pt-3 ">
            <span>Total</span>
            <span className='text-slate-500'>${price}</span>
        </div>
    </div>
  </div>
  )
}
