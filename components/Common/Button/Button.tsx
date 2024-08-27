"use client"
import React, { ReactNode } from 'react'
import ButtonLoader from './ButtonLoader'
import { useFormStatus } from 'react-dom'
import { register } from '@/components/Register/Form'
import toast from 'react-hot-toast'

interface props{
  isLoading?:boolean,
  className?:string,
  children?:ReactNode,
  onClick?:React.MouseEventHandler<HTMLButtonElement>
  
}
export default function LoadingButton({isLoading=false,className,children,onClick}:props) {
  const { pending, data, method, action } = useFormStatus();

  if(data){
    const formData = Object.fromEntries(data.entries())
  
    if(formData.pass1){
      if(formData.pass1!==formData.pass2){
        toast.error("password not match")
      }
    }

  }
  return (
    <button onClick={onClick}  type='submit' style={{cursor:pending || isLoading?"not-allowed":"pointer"}} disabled={pending || isLoading?true:false} className={className}>{pending || isLoading?<ButtonLoader/>:children}</button>
  )
}
