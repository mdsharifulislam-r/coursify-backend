'use client'
import ButtonTest from './ButtonTest'
import SuggetionForm from './SuggetionForm'
import { FaHouse } from 'react-icons/fa6'
import InputBox from '../Common/InputBox'
import { FormEvent, useState } from 'react'
import { UpdateStudentIntrest } from '@/lib/Helper/updateStudentIntrest'
import { useRouter } from 'next/navigation'
import LoadingButton from '../Common/Button/Button'
import toast from 'react-hot-toast'
import { UpdateInstructor } from '@/lib/Helper/UpdateInstructor'
import { revalidateTag } from 'next/cache'


export default function StudentForm({type}:{type:string}) {
  const [isLoading,setIsLoading]=useState(false)
  const Router = useRouter()
   async function Submit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        setIsLoading(true)
        const obj = new FormData(e.currentTarget)
        const res =type!=='student' ? await UpdateInstructor(obj) : await UpdateStudentIntrest(obj)
     
        
        if(res?.isOk){
       
          Router.push("/")
          setIsLoading(false)
        }else{
          toast.error("Something went wrong")
          setIsLoading(false)
        }
        
    }

  return (
    <form onSubmit={Submit} className='py-5'>
           {type !=='teacher'&& <InputBox
            name='institute'
            icon={<FaHouse/>}
            placeholder='What is Your Institute Name'
            required
            />}
            <SuggetionForm/>
            <LoadingButton isLoading={isLoading} className='w-full py-2 text-white rounded-md bg-primary'>Submit</LoadingButton>
            </form>
  )
}
