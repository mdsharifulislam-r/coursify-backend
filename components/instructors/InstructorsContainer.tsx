import teacher1 from "@/assets/Home/Teacher/teacher1.webp"
import teacher2 from "@/assets/Home/Teacher/teacher3.webp"
import teacher3 from "@/assets/Home/Teacher/teacher2.webp"
import { InstructorCard } from "../Home/InstructorList"
import { randomUUID } from "crypto"
import { getInstructors } from "@/lib/Helper/getInstructors"

export interface InstructorType{
    _id:string,
    name:string,
    image:string,
    desc:string,
    title:string
}
export default async function InstructorsContainer() {
    const instructors:InstructorType[] = await getInstructors()
    
    
    
    
 const data = instructors.map(data=>{
        return (
            <InstructorCard
           
            key={Date.now()}
            name={data.name}
            title={data.title}
            image={data.image}
            desc={data.desc}
            id={data._id}
            />
        )
    })
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data}
    </div>
  )
}
