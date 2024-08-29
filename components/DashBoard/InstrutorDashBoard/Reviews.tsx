import MakeStar from '@/components/Common/MakeStar/MakeStar'
import { getSingleInstructor } from '@/lib/Helper/getSingleInstructor'
import { getStudentInfo } from '@/lib/Helper/getStudent'
import { InstructorType, Student } from '@/lib/Types/Types'
import Avatar from "@/assets/Avatar/avatar.jpg"
import Image from 'next/image'
import React from 'react'
export async function ReviewUserItem({id,star,desc}:{id?:string,star?:string,desc?:string}){
    const user:Student | InstructorType = await getStudentInfo([],id) || await getSingleInstructor(id||"")
    return (
        <tr>
        <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><Image className="rounded-full h-10 object-cover" src={user?.image||Avatar} width="40" height="40"  alt="Alex Shatov" /></div>
                <div className="font-medium text-gray-800">{user?.name}</div>
            </div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left"><MakeStar star={star||"0"}/></div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className=" w-[250px] font-light  line-clamp-3 text-slate-500 text-wrap ">{desc}</div>
        </td>
      
    </tr>
    )
}
export default async function Reviews({id}:{id:string}) {
    const user:InstructorType = await getSingleInstructor(id)
    const reviews = user?.ratings?.map(data=>{
        return <ReviewUserItem
        id={data?.user}
        desc={data?.desc}
        star={data?.star}
        key={data.user}
        />
    })
    
  return (

    <div className="">
        { /* Table */ }
        <div className="w-full popUp  mx-auto bg-white shadow-lg rounded-md border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Reviews About Me</h2>
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
                                    <div className="font-semibold text-left">Star</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Description</div>
                                </th>
                             
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                      {reviews}
                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="w-full mt-5 popUp  mx-auto bg-white shadow-lg rounded-md border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Reviews About Me</h2>
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
                                    <div className="font-semibold text-left">Star</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Description</div>
                                </th>
                             
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                      {reviews}
                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

  )
}
