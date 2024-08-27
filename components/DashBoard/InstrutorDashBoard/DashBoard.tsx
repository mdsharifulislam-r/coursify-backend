import React from 'react'
import { FaBook } from 'react-icons/fa'
import { IoBookOutline } from "react-icons/io5";
import { FiUser, FiUsers } from "react-icons/fi";
import { CiStar } from 'react-icons/ci';
function Item({icon,amount,title}:{icon:any,amount:number,title:string}){
    return(
        <div className='bg-teal-50 w-full group flex-col py-10  p-5 flex justify-center place-items-center rounded-md shadow-lg'>
            <div className='p-10 group-hover:shadow-lg transition-all duration-500 text-2xl rounded-full bg-teal-100 text-primary'>
                {icon}
            </div>
            <h1 className='text-primary text-3xl py-4'>{amount}</h1>
            <span className='text-primary'>{title}</span>
        </div>
    )
}
export default function DashBoard() {
  return (
    <div className='p-5 shadow'>
       <div>
        <h1 className='text-black font-bold text-xl pb-4 border-b'>Dashboard</h1>
       </div>
       <div className='grid gap-3 md:grid-cols-3 py-3'>
        <Item
        icon={<IoBookOutline/>}
        amount={0}
        title='All courses'
        />
        <Item
        icon={<FiUser/>}
        amount={0}
        title={"Enrolled Students"}
        />
        <Item
        icon={<CiStar/>}
        amount={0}
        title='Reviews'
        />
        <Item
        icon={<FiUsers/>}
        amount={0}
        title='Total Students'
        />
       </div>
    </div>
  )
}
