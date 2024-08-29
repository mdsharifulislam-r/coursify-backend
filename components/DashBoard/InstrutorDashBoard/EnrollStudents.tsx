"use client"
import { CourseType } from '@/components/Courses/CourseCard/CourseCard'
import { getInstructors } from '@/lib/Helper/getInstructors'
import { getSingleCourse } from '@/lib/Helper/getSingleCourse'
import { getSingleInstructor } from '@/lib/Helper/getSingleInstructor'
import { InstructorType } from '@/lib/Types/Types'
import { set } from 'mongoose'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CourseList from './EnrollStudent/CourseList'
import PendingStudents from './EnrollStudent/PendingStudents'
import { FaChevronRight } from "react-icons/fa";
 function CourseDetailsCard({courseId,setList}:{courseId:string,setList:any}){
  const [course,setCourse]=useState<CourseType|null>(null)
  
  useEffect(()=>{
    getSingleCourse(courseId,true)
    .then(res=>setCourse(res))
    
  },[])
  
  
    return (
        <tr>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <Image
                className=""
                src={course?.image||""}
                width={40}
                height={70}
                alt="Alex Shatov"
              />
            </div>
            <div className="font-medium text-gray-800">{course?.name}</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left text-green-500 hover:underline hover:text-primary cursor-pointer" onClick={()=>setList({id:courseId,type:"select",data:course?.courseStudents})}>{course?.courseStudents?.length||0}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium hover:underline hover:text-primary cursor-pointer " onClick={()=>setList({id:courseId,type:"pending",data:course?.pendingStudents})}>
            {course?.pendingStudents?.length||0}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center capitalize text-secondary">{course?.price}</div>
        </td>
      </tr>
    )
}
export default function EnrollStudents({userId}:{userId:string}) {
   const [user,setUser]=useState<InstructorType|null>(null)
   useEffect(()=>{
    getSingleInstructor(userId,true)
    .then(res=>setUser(res))
   },[])
   const [listType,setListType]=useState({
    id:"",
    type:"",
    data:[]
   })

   
    const course:string[]|undefined = user?.courseCollection
    
    
    const courses = course?.map(id=>{
        return <CourseDetailsCard setList={setListType} courseId={id} key={id}/>
    })
    
    
  return (
     <div>
      {listType.type !==""&& <div className='flex text-sm text-primary py-2 place-items-center'><button onClick={()=>setListType({id:"",type:"",data:[]})} className='hover:underline' >Home</button> <FaChevronRight/> <button className=' capitalize'>{listType.type}</button></div>}
      {listType.type!=="" ? <PendingStudents studentData={listType.data} courseId={listType.id} dataType={listType.type}/>: <CourseList courses={courses}/>}
     
     </div>
  
  )
}
