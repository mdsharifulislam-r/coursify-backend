"use client"
import InputBox from '@/components/Common/InputBox'
import { ModuleLinkPropsType } from '@/components/SingleCourseDetails/Curriculum/Module'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { FaPlus, FaSubscript, FaVideo } from 'react-icons/fa'

export default function VideoForm({index=1,setIndex,sendData,courseId}:{courseId:string,sendData:React.Dispatch<React.SetStateAction<ModuleLinkPropsType[]>>,index:number,setIndex:React.Dispatch<React.SetStateAction<number>>}) {
    function SubmitData(){
        if(!formData.text && !formData.desc && !formData.videolink){
            toast.error("Please fill all video data")
            return
        }
        const obj:ModuleLinkPropsType={
            ...formData,
            courseId,
            videoId:Math.floor(Math.random()*10000000).toString(),
       
         
        }
        sendData(prev=>[...prev,obj])
        setIndex(prev=>prev+1)
        toast.success("video in queue")
        setFormData({
        text:"",
        desc:"",
        videolink:""
        })
    }
    const [formData,setFormData]=useState({
        text:"",
        desc:"",
        videolink:""
    })
    function AddValue(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        const {name,value}=e.target

        setFormData({...formData,[name]:value})

    }
  return (
    <div className='py-3'>
    <span className='text-slate-500 text-sm pb-2'>Video {index} information</span>
    <InputBox onChange={AddValue} value={formData.text} type="text" name='text' icon={<FaSubscript/>} placeholder='Video Title'/>
    <InputBox onChange={AddValue} value={formData.videolink} type="text" name='videolink' icon={<FaVideo/>} placeholder='Video Link'/>
    <textarea onChange={AddValue} value={formData.desc} name="desc" id="" className='w-full min-h-20 max-h-32 p-2 border-primary border focus:outline-none  rounded-md' placeholder='Video Description' ></textarea>
    <div>
        <button type='button' onClick={SubmitData} className='flex justify-center place-items-center py-1 gap-2 w-full text-primary'><FaPlus/> Add Video</button>
    </div>
    </div>
  )
}
