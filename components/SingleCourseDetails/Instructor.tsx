import React from "react";
import pic from "@/assets/Home/Teacher/teacher3.webp";
import Image from "next/image";
import { CourseType } from "../Courses/CourseCard/CourseCard";
import { getSingleInstructor } from "@/lib/Helper/getSingleInstructor";
import { InstructorType } from "@/lib/Types/Types";
export default async function Instructor({course}:{course:CourseType}) {
  const instructor:InstructorType = await getSingleInstructor(course?.instructor?.id)
 
  
  return (
    <div className="flex gap-5 w-full">
      <div className="imgBox w-[30%] h-40 relative rounded-lg overflow-hidden">
        <Image src={instructor?.image||pic} alt="" width={300} height={300} className="absolute w-full h-full top-0 left-0 object-cover" />
      </div>
      <div className="textBox w-[70%]">
        <h1 className="text-xl font-bold">{instructor?.name}</h1>
        <p className="text-base font-light">{instructor?.title}</p>
        <p className="pt-6 text-slate-700 md:text-sm text-xs text-justify">
        {instructor?.desc}
        </p>
      </div>
    </div>
  );
}
