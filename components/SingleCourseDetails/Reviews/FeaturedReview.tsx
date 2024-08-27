import Image, { StaticImageData } from "next/image";
import React from "react";
import pic from "@/assets/Home/Teacher/teacher1.webp";
import pic2 from "@/assets/Home/Teacher/teacher2.webp";
import pic3 from "@/assets/Home/Teacher/teacher3.webp";
import avater from "@/assets/Avatar/avatar.jpg"
import { FaRegStar, FaStar } from "react-icons/fa";
import { getStudentInfo } from "@/lib/Helper/getStudent";
import { review } from "@/lib/Types/Types";
import Link from "next/link";
interface props {
  user?:string
  star: string;
  desc?: string;
}
export async function ReviewItem({ user, star, desc }: props) {
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
export default function FeaturedReview({reviews}:{reviews:review[]}) {
  const data = reviews?.map(item=>{
    return <ReviewItem
    user={item.user}
    star={item.star||""}
    desc={item.desc}

    />
  })
  return (
    <div className="p-5 shadow-lg rounded-md mt-4 max-h-96 relative overflow-hidden">
      <h1 className="py-4 border-b text-xl font-bold">Featured Review</h1>
      <div className="con">
        {data}
      </div>
      <div className="shade px-3 absolute w-full bottom-0 left-0 h-20 py-4 flex place-items-end bg-gradient-to-t from-white to-transparent ">
        <Link href={""} className="text-primary font-medium">See all reviews</Link>
      </div>
    </div>
  );
}
