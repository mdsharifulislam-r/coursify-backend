import React from 'react'
import image1 from "@/assets/Home/PopulerCourse/course2.webp"
import Image from 'next/image'
import { FaPause, FaPlay } from 'react-icons/fa'
export default function SmaillDetails() {
  return (
    <div className=' py-10'>
      <div className="container grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="image p-5 rounded-md gap-2 grid grid-cols-2 shadow-2xl  ">
            <div className="textBox">
              <div className="box py-3">
                <div className="area p-2 text-sm w-1/2  border rounded-full flex justify-center place-items-center">
                  New Collection
                </div>
              </div>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-primary'>Online Courses from Histudy</h1>
                <p className='text-slate-500 text-xl font-extralight'>Top instructors from around the world</p>
            </div>
            <div className="imageBox relative w-full h-full min-h-56 rounded-lg overflow-hidden ">
                <div className="shade z-20 absolute w-full h-full top-0 flex justify-center place-items-center left-0">
                    <div className="btn btn-circle text-orange bg-white pulser">
                        <FaPlay />
                    </div>
                </div>
                <Image src={image1} className='absolute w-full h-full object-cover ' alt='image' width={300} height={300} />
            </div>
        </div>
        <div className="textbox w-full p-5 h-full shadow-2xl rounded-md">
        <div className="box py-3">
                <div className="area p-2 text-sm w-1/3  border rounded-full flex justify-center place-items-center">
                  Top Teacher
                </div>
              </div>
            <h1 className='text-3xl font-bold'>Free Online Courses from Histudy School To Education</h1>
            <p className='text-xl font-extralight py-2 text-slate-500'>Top instructors from around the world</p>
            <button className=" px-3 py-2 font-bold bg-primary text-sm rounded-md text-white">Join now</button>
        </div>
      </div>
    </div>
  )
}
