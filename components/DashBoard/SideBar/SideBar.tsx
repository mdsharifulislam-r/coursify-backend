import Link from 'next/link'
import React from 'react'
import { FaHome, FaUser } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6';
import { IoBookOutline, IoStarOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineSound } from "react-icons/ai";
function LinkItem({icon,text,id,type}:{icon:any,text:string,id:string,type:string}){
  const link = text?.split(" ")?.join("_")?.toLowerCase()
  return (
    <Link href={`/dashboard?id=${id}&type=${type}&text=${link}`} className='flex gap-3 py-2 border-b place-items-center cursor-pointer text-slate-600 hover:text-primary transition-all duration-500'>
      {icon}
      <span>{text}</span>
    </Link>
  )
}
export default function SideBar({id,type}:{id:string,type:string}) {
  const links = [
    {
      icon:<FaHome/>,
      text:"Dashboard"
    },
    {
      icon:<FaUser/>,
      text:"My Profile"
    },
    {
      icon:<FaUsers/>,
      text:"Enroll Students"
    },
    {
      icon:<IoStarOutline/>,
      text:"Reviews"
    },
    {
      icon:<RiComputerLine/>,
      text:"My Courses"
    },
    {
      icon:<FaUsers/>,
      text:"My Students"
    },
    {
      icon:<AiOutlineSound/>,
      text:"Announcement"
    },
  ].map((item,index)=>{
    return <LinkItem
    icon={item.icon}
    text={item.text}
    key={Date.now()*index}
    id={id}
    type={type}
    />
  })
  return (
    <div className='px-7 py-5 bg-white border-primary min-h-[600px] border-2 rounded-md shadow-xl hidden md:block w-[25%]'>
      {links}
    </div>
  )
}
