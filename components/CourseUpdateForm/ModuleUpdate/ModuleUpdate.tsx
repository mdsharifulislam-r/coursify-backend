
import { CourseType } from '@/components/Courses/CourseCard/CourseCard'
import Module, { ModulePropsType } from '@/components/SingleCourseDetails/Curriculum/Module'
import { getSingleCourse } from '@/lib/Helper/getSingleCourse'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import ModuleForm from './ModuleForm'
let status = true
export const courseStatus = () =>{
  status = !status
}
export default  function ModuleUpdate({courseId}:{courseId:string}) {
    const [course,setCourse]=useState<CourseType|null>(null)

  
    
    useEffect(()=>{
        getSingleCourse(courseId,true)
            .then(data=>{
                setCourse(data)
            })
    },[status])
    const myModule:ModulePropsType[] = course?.module?.length? [{
        title:"Promo Video",
        moduleId:"promo_module",
        data:[{
          text:"Promo Video",
          videolink:course?.promovideo,
          isLock:false,
          videoId:'promo',
          desc:"This is the promo video"
        }]
      },...course?.module]:[{
        title:"Promo Video",
        moduleId:"promo_module",
        data:[{
          text:"Promo Video",
          videolink:course?.promovideo,
          isLock:false,
          videoId:'promo',
          desc:"This is the promo video"
        }]
      }]
  
    
    const data = myModule?.map((item:ModulePropsType,index:number)=>{
        return <Module
        title={item.title}
        data={item.data}
        open={index==0 && true}
        key={index}
        courseId={course?._id}
        moduleId={item.moduleId}
        dev={true}
        />
      })
    
  return (
    <div className='w-full shadow-lg p-4'>
      <div>
        <h1 className='text-primary text-xl pb-4 border-b'>Modules</h1>
        <div className='pt-4 flex flex-col gap-2'>
        {data}
        </div>
       <div className='py-3'>
        <label htmlFor='moduleform' className='w-full py-3 border-primary bg-white rounded-md border transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer text-primary flex gap-3 justify-center place-items-center'><FaPlus/> Add Module</label>
       </div>
      </div>
      <ModuleForm courseId={courseId}/>
    </div>
  )
}
