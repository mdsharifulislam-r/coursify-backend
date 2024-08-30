import Image from "next/image";
import React from "react";
import pic from "@/assets/Home/PopulerCourse/course2.webp";
import { FaGlobe, FaPlay, FaRegClock, FaUser, FaUsers } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { IconType } from "react-icons";
import { SlBadge } from "react-icons/sl";
import { CourseType } from "../Courses/CourseCard/CourseCard";
import AddCartButton from "./AddCartButton/AddCartButton";
import BuyNowButton from "./BuyNowButton/BuyNowButton";
interface info{
    icon:any,
    type:string,
    value:string | undefined
}
export function InfoBox({icon,type,value}:info) {
  return (
    <div className="flex overflow-x-hidden justify-between place-items-center text-base py-2 border-b  border-slate-300">
      <div className="flex gap-2 place-items-center">
        {icon}
        {type}:
      </div>
      <div className="value">
        {value}
      </div>
    </div>
  );
}
export interface Props{
  course:CourseType
}
export default function SideBar({course}:Props) {
  return (
    <div className="lg:w-[30%]  w-full border-[3px] p-3 shadow-2xl lg:-translate-y-80  bg-white border-primary  rounded-lg">
      <div className="imageBox relative w-full min-h-48 max-h-48  rounded-md overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 flex justify-center place-items-center">
          <div className="p-4 text-2xl z-20 text-secondary bg-white rounded-full">
            <FaPlay />
          </div>
        </div>

        <Image
          alt=""
          width={1000}
          height={1000}
          src={course.image}
          className="absolute z-0 w-full h-full left-0 top-0 object-cover"
        />
      </div>
      <div className="textBox py-9 px-3">
        <h1 className="text-xl font-semibold">Course Includes:</h1>
        <div className="containe py-3 flex flex-col gap-4">
            <InfoBox
            icon={<BsCashCoin/>}
            type="Price"
            value={`${course.price !== 'free' ? `$${course.price}`:course.price}`}
            />
            <InfoBox
            icon={<FaUser/>}
            type="Instructor"
            value={course.instructor.name}
            />
            <InfoBox
            icon={<FaRegClock/>}
            type="Duration"
            value={course.duration}
            />
            <InfoBox
            icon={<ImBooks/>}
            type="Lessons"
            value={`${course.lessons}`}
            />
            <InfoBox
            icon={<FaUsers/>}
            type="Students"
            value={`${course.student}`}
            />
            <InfoBox
            icon={<FaGlobe/>}
            type="Language"
            value={`${course.language}`}
            />
            <InfoBox
            icon={<SlBadge/>}
            type="Certifications:"
            value={`${course.certifications?"Yes":"No"}`}
            />
        </div>
        <div className="button w-full">
          <BuyNowButton course={course}/>
            <AddCartButton course={course}/>
        </div>
      </div>
    </div>
  );
}
