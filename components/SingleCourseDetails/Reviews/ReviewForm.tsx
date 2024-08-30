"use client";

import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from "react";

import { getSingleInstructor } from "@/lib/Helper/getSingleInstructor";
import { useAppSelector } from "@/lib/hooks/Hooks";
import toast from "react-hot-toast";
import { InstructorType, review } from "@/lib/Types/Types";
import { UpdateSingleInstructor } from "@/lib/Helper/UpdateSingleInstructor";
import LoadingButton from "@/components/Common/Button/Button";
import { getSingleCourse } from "@/lib/Helper/getSingleCourse";
import { updateCourse } from "@/lib/Helper/UpdateCourse";
import { CourseType } from "@/components/Courses/CourseCard/CourseCard";

export default function ReviewForm({ id }: { id: string }) {
  const user = useAppSelector((state) => state.userReduicer.user);
  const [reviews, setReviews] = useState<any[]>([]);
  const [desc,setDesc]=useState<string|undefined>("")
  const [star,setStar]=useState(0)

  useEffect(() => {
    getSingleCourse(id,true).then((res:InstructorType) => {
        if (res) {
          setReviews(res.ratings);
        const data:review|undefined|0= res.ratings?.length ? res.ratings?.find(data=>data.user==user?._id):{desc:"",star:"",user:""}
        let str = data?.desc
        setDesc(str?.toString())
        setStar(parseInt(data?.star||""))
        }
      });
  }, []);

 
  
  function setStarValue(e:ChangeEvent<HTMLInputElement>){
    setStar(parseInt(e.target.value))
  }
  async function SendReviews(e: FormData) {
    if (!user?._id) {
      toast.error("you have to login first");
      return;
    }
    const course:CourseType = await getSingleCourse(id, true);
    
    const data = Object.fromEntries(e.entries());
    const obj = {
      ...data,
      user: user?._id,
    };
    if (course?.ratings?.some((item) => item?.user == user?._id)) {
      const index = course?.ratings?.findIndex(data=>data.user==user?._id)
      let rev = [...course?.ratings]
      rev[index]={
        ...obj,
        star:star.toString(),
        desc:desc

      }
    const res = await updateCourse({ratings:rev}, id,true);
    if (res.isOk) {
      toast.success("your review update successfully");
      setReviews(rev);
    }
    return
    }
    const ratings = course?.ratings?.length
      ? [...course?.ratings, obj]
      : [obj];
    const body = {
      ratings,
    };
    const res = await updateCourse(body, id,true);
    if (res.isOk) {
      toast.success("your rivew sent successfully");
      setReviews([...reviews, obj]);
    }
  }
  return (
    <form action={SendReviews} className={`w-full pt-8`}>
      <div className="rating">
        <input
          type="radio"
          name="star"
          value={1}
          className="mask mask-star-2 bg-primary"
          onChange={setStarValue}
        
        />
        <input
          type="radio"
          name="star"
          value={2}
          className="mask mask-star-2 bg-primary"
          onChange={setStarValue}
    
          
        />
        <input
          type="radio"
          name="star"
          value={3}
          className="mask mask-star-2 bg-primary"
          onChange={setStarValue}
        
        />
        <input
          type="radio"
          name="star"
          value={4}
          className="mask mask-star-2 bg-primary"
          onChange={setStarValue}
         
        />
        <input
          type="radio"
          name="star"
          value={5}
          className="mask mask-star-2 bg-primary"
          onChange={setStarValue}
          
        />
      </div>

      <textarea
        name="desc"
        onChange={(e)=>{
         
          setDesc(e.target.value)
        }}
        value={desc}
        placeholder="Say something"
        className="w-full border focus:outline-none shadow-xl p-4 border-primary rounded-md min-h-28"
        id=""
       
      ></textarea>
      <LoadingButton className="bg-primary text-white rounded-md px-3 py-2">
       update
      </LoadingButton>
    </form>
  );
}
