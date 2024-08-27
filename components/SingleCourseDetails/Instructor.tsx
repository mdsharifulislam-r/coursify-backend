import React from "react";
import pic from "@/assets/Home/Teacher/teacher3.webp";
import Image from "next/image";
export default function Instructor() {
  return (
    <div className="flex gap-5 w-full">
      <div className="imgBox w-[30%] h-40 relative rounded-lg overflow-hidden">
        <Image src={pic} alt="" className="absolute w-full h-full top-0 left-0 object-cover" />
      </div>
      <div className="textBox w-[70%]">
        <h1 className="text-xl font-bold">Mrs Juila</h1>
        <p className="text-base font-light">Graphics Desiginer</p>
        <p className="pt-6 text-slate-700 md:text-sm text-xs text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          laudantium eius culpa ex. Sapiente natus quia suscipit eius,
          reprehenderit at dolorem, consequatur non accusantium modi aspernatur
          beatae, soluta a animi.
        </p>
      </div>
    </div>
  );
}
