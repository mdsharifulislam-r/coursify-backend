"use client"
import Image from 'next/image'
import React, { ChangeEvent } from 'react'
import { FaCamera } from 'react-icons/fa'
import pic from "@/assets/Avatar/avatar.jpg"
import { uploadImage } from '@/lib/Helper/imageUploader'
import { UpdateStudentInfo } from '@/lib/Helper/UpdateStudentInfo'
import toast from 'react-hot-toast'
import { UpdateSingleInstructor } from '@/lib/Helper/UpdateSingleInstructor'
export default function ImageBox({image,userid,type}:{image:string,userid:string,type:string}) {
    async function ChangePicture(e:ChangeEvent<HTMLInputElement>) {
        const files = e.target.files
        const imageLink = await uploadImage(files)
       
        const formData = new FormData()
        formData.append("image",imageLink)
      
        const res = type!='student'? await UpdateSingleInstructor({image:imageLink},userid): await UpdateStudentInfo(formData)
        if(res.isOk){
            toast.success(res.massage)
        }else{
            toast.error(res.massage)
        }

    }
  return (
    <div className='w-32 h-32 rounded-full border-[5px] border-white relative overflow-hidden'>
          <Image src={image||pic} alt='profile pic' className='absolute w-full h-full object-cover left-0 top-0' width={300} height={300}/>
          <div className='absolute w-full h-full  left-0 top-0 bg-[rgba(0,0,0,0.3)] flex justify-center place-items-center'>
            <span className='text-2xl text-white cursor-pointer'><FaCamera/></span>
            <input type="file" onChange={ChangePicture} className='absolute w-full h-full left-0 top-0 opacity-0' />
          </div>
          </div>
  )
}
