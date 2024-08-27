"use client"
import { responseData } from '@/app/(pages)/register/page'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function ToastContainer({response}:{response?:responseData}) {
   if(response?.isOk){
    cookies().set('token',response.token||"")
   }

    
  return (
   <></>
  )
}
