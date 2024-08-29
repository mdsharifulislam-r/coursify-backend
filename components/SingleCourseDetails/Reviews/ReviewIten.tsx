"use server"
import { getStudentInfo } from "@/lib/Helper/getStudent";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import avater from "@/assets/Avatar/avatar.jpg"
interface props {
    user?:string
    star: string;
    desc?: string;
  }
  export default async function ReviewItem({ user, star, desc }: props) {
    
    const userInfo= await getStudentInfo(["image","name"],user)
    
    
    const fillStar = new Array(parseInt(star)).fill(<FaStar key={Date.now()}/>);
    const regStar = new Array(5 - parseInt(star)).fill(<FaRegStar key={Date.now()} />);
    return (
      <div className="flex gap-6 py-6 w-full border-b">
        <div className="imageBox w-[15%] md:h-28 h-16 rounded-lg relative overflow-hidden">
          <Image
            src={userInfo?.image||avater}
            width={1000}
            height={1000}
            className="absolute object-cover w-full h-full top-0 left-0"
            alt=""
          />
        </div>
        <div className="textBox w-[80%]">
          <h1 className="text-xl font-semibold pb-3">{userInfo?.name||"name"}</h1>
          <div className="flex place-items-center text-orange ">
            {fillStar}
            {regStar}
          </div>
          <div className="desc py-3 text-justify text-xs md:text-sm text-slate-700">
            {desc}
          </div>
        </div>
      </div>
    );
  }