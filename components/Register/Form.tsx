"use client"
import InputBox from "../Common/InputBox";
import { FaGithub, FaGoogle, FaRegUser, FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiLock, BiLockAlt } from "react-icons/bi";
import Link from "next/link";

import LoadingButton from "../Common/Button/Button";
import SocialLoginButton from "./SocialLoginButton";
import { SubmitData } from "@/lib/Helper/ResisterStudent";
import { responseData } from "@/app/(pages)/register/page";
import { redirect, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Elsie_Swash_Caps } from "next/font/google";
import { uploadImage } from "@/lib/Helper/imageUploader";

export interface register {
  name: string;
  email: string;
  pass1: string;
  pass2: string;
  phone: string;
  type: string;
}
export default function Form({response}:{response?:responseData}) {
  const [userType,setUserType]=useState('student')
  const [imageFormData,setImageFormData]=useState<string>("")
  async function GetImage(e:ChangeEvent<HTMLInputElement>){
    const file = e.target.files
    if(file){
      const formData = new FormData()
      const data = await uploadImage(file[0])
      setImageFormData(data)
      
      
    }

  }
  const router = useRouter()
  const [loading,SetLoading]=useState(false)
  function AddValue(e:ChangeEvent<HTMLInputElement>){
    setUserType(e.target.value)
  router.push(`/register?type=${e.target.value}`)  
  }
  async function SubmitData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
 
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const { name, type, email, pass1, pass2, phone } = data;
    if (name && type && email && pass1 && pass2 && phone) {

      if(pass1.toString().length<8){
        toast.error('password must be 8 character')
        return
      }
      if (pass1 == pass2) {
  SetLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${userType=='student'?"student":"instructor"}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: userType=='student'? JSON.stringify({
            type: data.type,
            email: data.email,
            password: data.pass1,
            name,
            phone,
            isSocialLogin: {
              status: false,
            },
          }):JSON.stringify({
            type: data.type,
            email: data.email,
            password: data.pass1,
            name,
            phone,
            desc:data.desc,
            image:imageFormData,
            title:data.title,
            isSocialLogin: {
              status: false,
            },
          })
        });
        const dat= await res.json()
        if(dat.isOk){
          router.push("/login")
          SetLoading(false)
          toast.success(dat.massage)
        }else{
          SetLoading(false)
          toast.error(dat.massage)
        }
      
      
      
    }else{
      toast.error("Password not match")
    }
    }
  }
  const [hydred,setHydred]=useState(false)
  useEffect(()=>{
    setHydred(true)
  },[])
  return (
    <>
      <div className="flex p-4 h-full w-full justify-center place-items-center flex-col">
       {hydred && <form onSubmit={SubmitData} className="w-full">
          <h1 className="text-4xl font-bold pb-5 text-darkBlack">Sign Up</h1>
          <div className="flex w-full ">
            <div className="flex gap-3">
              <input
                type="radio"
                name="type"
                id="student"
                defaultChecked
                className="peer/student hidden "
                value={"student"}
                onChange={AddValue}
              />
              <label
                htmlFor="student"
                className="px-4 py-2 border border-primary text-primary rounded-md peer-checked/student:bg-primary peer-checked/student:text-white cursor-pointer"
              >
                Student
              </label>
              <input
                type="radio"
                name="type"
                id="teacher"
                className="peer/teacher hidden "
                value={"teacher"}
                onChange={AddValue}
              />
              <label
                htmlFor="teacher"
                className="px-4 py-2 border border-primary text-primary rounded-md peer-checked/teacher:bg-primary peer-checked/teacher:text-white cursor-pointer"
              >
                Teacher
              </label>
            </div>
          </div>
          {userType=='student'? (<div className="flex flex-col">
            <InputBox
              icon={<FaUser />}
              name="name"
              placeholder="Full Name"
              required
            />
            <InputBox
              icon={<MdOutlineEmail />}
              name="email"
              placeholder="Your Email Address"
              type="email"
              required
            />
            <InputBox
              icon={<BsTelephone />}
              name="phone"
              placeholder="Your Phone Number"
              type="text"
              required
            />
            <InputBox
              icon={<BiLockAlt />}
              name="pass1"
              placeholder="Password"
              type="password"
              required
            />
            <InputBox
              icon={<BiLock />}
              name="pass2"
              placeholder="Retype Password"
              type="password"
              required
            />
       
          </div> )
           :(<div className="flex flex-col ">
            <InputBox
              icon={<FaUser />}
              name="name"
              placeholder="Full Name"
              required
            />
            <InputBox
              icon={<MdOutlineEmail />}
              name="email"
              placeholder="Your Email Address"
              type="email"
              required
            />
            <InputBox
              icon={<MdOutlineEmail />}
              name="image"
              placeholder="Your Email Address"
              type="file"
              onChange={GetImage}
              required
            />
            <InputBox
              icon={<FaRegUser />}
              name="title"
              placeholder="What is your Proffetion"
              type="text"
              required
            />
            
            <InputBox
              icon={<BsTelephone />}
              name="phone"
              placeholder="Your Phone Number"
              type="text"
              required
            />
            <textarea required name="desc" id="" placeholder="Tell me about yourself..." className="min-h-28 p-2 border rounded-md border-primary focus:outline-none"></textarea>
            <InputBox
              icon={<BiLockAlt />}
              name="pass1"
              placeholder="Password"
              type="password"
              required
            />
            <InputBox
              icon={<BiLock />}
              name="pass2"
              placeholder="Retype Password"
              type="password"
              required
            />
          
           
          </div>)}

          <div className="pt-3">
              <LoadingButton isLoading={loading} className="w-full text-white bg-primary py-2">
                Submit
              </LoadingButton>
            </div>
            <div>
              I have already an account{" "}
              <Link href={"/login"} className="text-secondary font-bold">
                Log In
              </Link>
            </div>
          <div className="flex justify-center flex-col place-items-center gap-5 pt-5">
            <span className="text-slate-500">or</span>
          </div>
        </form>}
      
      </div>
    </>
  );
}
