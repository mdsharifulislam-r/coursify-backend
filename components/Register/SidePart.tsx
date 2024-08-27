import Image from "next/image";
import React from "react";
import man from "@/assets/Register/man.webp";
export default async function SidePart() {
  
  
  return (
    <div className="w-full h-full flex flex-col  justify-center place-items-center">
      <Image src={man} alt="man" className="w-[100%]" />
   
    </div>
  );
}
