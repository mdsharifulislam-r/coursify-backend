"use server"
import { getStudentInfo } from "@/lib/Helper/getStudent";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import avater from "@/assets/Avatar/avatar.jpg"
import { getSingleInstructor } from "@/lib/Helper/getSingleInstructor";
interface props {
    user?:string
    star: string;
    desc?: string;
    date?:string
  }
  export default async function ReviewItem({ user, star, desc,date}: props) {

    
    const userInfo= await getStudentInfo(["image","name"],user) ?? await getSingleInstructor(user||"")

    const intStar = isNaN(parseInt(star))?0:parseInt(star)
    console.log(intStar);
    
    
    const fillStar = new Array(intStar).fill(<FaStar key={Date.now()}/>);
    const regStar = new Array(5-intStar).fill(<FaRegStar key={Date.now()} />);
    return (
      <div className="flex gap-6 py-4 my-2 rounded-md hover:shadow-lg transition-all duration-300 w-full border cursor-pointer px-4">
        <div className="imageBox w-[10%] md:h-28 h-10 rounded-lg relative overflow-hidden">
          <Image
            src={userInfo?.image||avater}
            width={1000}
            height={1000}
            className="absolute object-cover w-full h-full top-0 left-0"
            alt=""
          />
        </div>
        <div className="textBox w-[80%]">
          <h1 className="md:text-xl text-sm font-semibold pb-3">{userInfo?.name||"name"}</h1>
          <div className="flex place-items-center text-orange ">
            {fillStar}
            {regStar}
          </div>
          <div className="text-xs pt-2  font-extralight">{date?date:new Date().toDateString()}</div>
          <div className="desc pt-1 text-justify text-xs md:text-sm text-slate-700">
            {desc}
          </div>
        </div>
      </div>
    );
  }