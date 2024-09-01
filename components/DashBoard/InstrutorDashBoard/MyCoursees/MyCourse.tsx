import { CourseType } from '@/components/Courses/CourseCard/CourseCard'
import AvarageStar from '@/components/SingleCourseDetails/Reviews/AvarageStar'
import { getSingleCourse } from '@/lib/Helper/getSingleCourse'
import { getSingleInstructor } from '@/lib/Helper/getSingleInstructor'
import { InstructorType } from '@/lib/Types/Types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCross, FaEdit, FaStop, FaTrash } from 'react-icons/fa'
 async function ReviewUserItem({id}:{id?:string,star?:string,desc?:string}){
    const course:CourseType = await getSingleCourse(id||"")
    return (
        <tr>
        <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><Image className="rounded-full h-10 object-cover" src={course?.image} width="40" height="40"  alt="Alex Shatov" /></div>
                <div className="font-medium text-gray-800">{course?.name}</div>
            </div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left "><Link href={`course_update_form?id=${id}`} className='flex  gap-1 place-items-center text-white bg-primary px-2 py-1 rounded-md'><span className=''><FaEdit/> </span>Edit</Link></div>
        </td>
        <td className="p-2 whitespace-nowrap">
        <button className='flex gap-1 place-items-center text-white bg-secondary px-2 py-1 rounded-md'><span className=''><FaStop/> </span>Stop</button>
        </td>
        <td className="p-2 whitespace-nowrap">
        <button className='flex gap-1 place-items-center text-white bg-red-500 px-2 py-1 rounded-md'><span className=''><FaTrash/> </span>Delete</button>
        </td>
      
    </tr>
    )
}
export default async function MyCourse({id}:{id:string}) {
    const user:InstructorType = await getSingleInstructor(id)
    const courses = user?.courseCollection?.reverse()?.map((course,index)=>{
        return <ReviewUserItem id={course} key={course}/>
    })
  return (
    <div className="w-full mt-5 popUp  mx-auto bg-white shadow-lg rounded-md border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Reviews of My Courses</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Update</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Stop Enroll</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Delete</div>
                                </th>
                             
                             
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {courses}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}
