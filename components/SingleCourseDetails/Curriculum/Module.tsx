import Link from "next/link";
import React from "react";
import { IoMdLock } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";
import { IoIosEye } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
export interface ModuleLinkPropsType {
  text: string;
  videolink?: string;
  isLock?: boolean;
  courseId?:string | undefined,
  videoId?:string,
  desc?:string,
  moduleId?:string | undefined,
  dev?:boolean
}
function ModuleLink({ text, isLock = true,courseId,videoId,moduleId,dev=false }: ModuleLinkPropsType) {
  
  
  return (
    <div className="">
      <div className="flex justify-between place-items-center">
      <div className="flex place-items-center gap-3 text-sm cursor-pointer transition-all duration-300 hover:text-primary">
        <BsPlayCircle className="text-xl text-secondary" />
        <Link href={`/courses/${courseId}/${courseId}+${moduleId}+${videoId}`}>{text}</Link>
      </div>
    {!dev && <> {!isLock ? (
        <div className="flex place-items-center gap-2">
          <div className="time">30 min</div>
          <button className="flex place-items-center gap-2 px-3 text-sm py-2 rounded-md bg-teal-400 text-white">
            <IoIosEye className="" />
            <span>Preview</span>
          </button>
        </div>
      ) : (
        <div>
          <IoMdLock />
        </div>
      )}</>}
      </div>
    <div>
    {dev &&<button className="flex justify-center gap-3 place-items-center w-full text-primary"><FaPlus/> Add Video</button>}
    </div>
    </div>
  );
}
export interface ModulePropsType{
    open?:boolean,
    title?:string,
    data?:ModuleLinkPropsType[]
    courseId?:string | undefined,
    moduleId?:string ,
    dev?:boolean
}
export default function Module({open,title,data,courseId,moduleId,dev}:ModulePropsType) {
  const ModuleLinkData = data?.map(item=>{
    return <ModuleLink
    isLock={item.isLock}
    text={item.text}
    key={Date.now()}
    courseId={courseId}
    videoId={item.videoId}
    moduleId={moduleId}
    dev={dev}
    />
  })
  return (
    <>
      <div className="collapse collapse-plus border rounded-md">
        <input type="radio" name="my-accordion-3" defaultChecked={open} />
        <div className="collapse-title text-sm font-medium">
          {title}
        </div>
        <div className="collapse-content flex flex-col gap-4">
         {ModuleLinkData}
        </div>
      </div>
    </>
  );
}
