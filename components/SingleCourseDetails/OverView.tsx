import React from "react";
import { GiCheckMark } from "react-icons/gi";
function Topic(){
    return (
        <div className="text-slate-700 text-sm font-light flex gap-3 place-items-center">
            <span className="text-primary"><GiCheckMark/></span>
            Lorem ipsum dolor sit amet consectetur.
        </div>
    )
}
interface props{
  desc:string
}
export default function OverView({desc}:props) {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-darkBlack pb-5">Course Description</h1>
      <p className="text-justify text-slate-700 text-sm font-light leading-[1.8]">
        {desc}
      </p>
      <div className="pt-6">
      <h1 className="text-2xl font-medium text-darkBlack pb-5">What You’ll Learn?</h1>
      <div className="con flex flex-col gap-3">
        <Topic/>
        <Topic/>
        <Topic/>
        <Topic/>
     

      </div>
      </div>
    </div>
  );
}
