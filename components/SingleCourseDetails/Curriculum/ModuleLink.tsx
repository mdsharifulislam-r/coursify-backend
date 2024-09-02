"use client"

import { useAppSelector } from "@/lib/hooks/Hooks";
import { ModuleLinkPropsType } from "./Module";
import { BsPlayCircle } from "react-icons/bs";
import Link from "next/link";
import { IoIosEye, IoMdLock } from "react-icons/io";
import { useEffect, useState } from "react";
import { getSingleCourse } from "@/lib/Helper/getSingleCourse";
import { CourseType } from "@/components/Courses/CourseCard/CourseCard";

export default function ModuleLink({ text, isLock = true,courseId,videoId,moduleId,dev=false }: ModuleLinkPropsType) {

    const user = useAppSelector(state=>state.userReduicer.user)
    const [course,setCourse]=useState<CourseType | null>(null)
    useEffect(()=>{
        getSingleCourse(courseId||"",true)
            .then(res=>setCourse(res))
    },[])
    
    const isEnroll = course?.courseStudents ? course?.courseStudents?.includes(user?._id||"") :false

    return (
      <div className="">
        <div className="flex justify-between place-items-center">
        <div className="flex place-items-center gap-3 text-sm cursor-pointer transition-all duration-300 hover:text-primary">
          <BsPlayCircle className="text-xl text-secondary" />
          <Link href={isEnroll || moduleId=='promo_module' || dev ?`/courses/${courseId}/${courseId}+${moduleId}+${videoId}`:""}>{text}</Link>
        </div>
      {!dev && <> {isEnroll || moduleId=='promo_module' ? (
          <div className="flex place-items-center gap-2">
         
           
          </div>
        ) : (
          <div>
            <IoMdLock />
          </div>
        )}</>}
        </div>
     
      </div>
    );
  }