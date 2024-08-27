import { CourseType } from "@/components/Courses/CourseCard/CourseCard";
import { ConnectDB } from "@/lib/Database/ConnectDB";
import { CourseModel, InstructorModel } from "@/lib/Database/Models";
import { NextResponse } from "next/server";
import jwt from 'jwt-simple'
import { cookies } from "next/headers";
import { InstructoScema } from "@/lib/Database/instructorSchema/InstructorSchema";
import { InstructorType } from "@/lib/Types/Types";
ConnectDB()
export async function POST(Request: Request) {
  try {
    const token = cookies().get("token")?.value
    const {payload}:{payload:string} = await Request.json();
    if(!token){
      return NextResponse.json({
        isOk:false,
        massage:"Session Expired"
    },{status:400})
    }
    
    if(!payload){
      return NextResponse.json({
        isOk:false,
        massage:"Invalid credintials"
    },{status:400})
    }
    const instructorId = jwt.decode(token,process.env.JWT_SECRET||"")
    const instructorData :InstructorType|null= await InstructorModel.findOne({_id:instructorId})
    if(!instructorData){
      return NextResponse.json({
        isOk:false,
        massage:"Instructor Not exitst"
    },{status:404})
    }
    const data = jwt.decode(payload,process.env.JWT_SECRET||"")
    const {
      name,
      image,
      instructor,
      language,
      lessons,
      level,
      desc,
      type,
      certifications,
      price,
      promovideo,
      student,
      duration,
      promocodes,
      module
    } = data
    console.log(name,
      image,
      instructor,
      language,
      lessons,
      level,
      desc,
      type,
      certifications,
      price,
      promovideo,
      student,
    duration,
    promocodes,
    module);
    
    if (
      name &&
      image &&
      instructor &&
      language &&
      lessons &&
      level &&
      desc &&
      type &&
      price &&
      promovideo &&
      student &&
      duration
    ) {

        const data = await CourseModel.create({
          name,
          image,
          instructor,
          language,
          lessons,
          level,
          desc,
          type,
          certifications,
          price,
          promovideo,
          student,
        duration,
        promocodes,
        module
        });
        if(data){
          const update = await InstructorModel.findByIdAndUpdate(instructorId,{
            courseCollection:[...instructorData.courseCollection,data._id]
          })
            return NextResponse.json({
                isOk:true,
                massage:"Course created successfully"
            },{status:200})
        }else{
            return NextResponse.json({
                isOk:false,
                massage:"Something went wrong"
            },{status:400})
        }
        
        
  
    }else{
        return NextResponse.json({
            isOk:false,
            massage:"fill all the field"
        },{status:400})
    }
  } catch (error) {
    return NextResponse.json({
      isOk:false,
      massage:"fill all the field"
  },{status:400})
  }
}
export async function GET(Request: Request) {
  try {
    const allcourse = await CourseModel.find()
    if(allcourse){
        return NextResponse.json({
            isOk:true,
            data:allcourse,
            massage:"All courses get successfully"
        },{status:200})
    }else{
        return NextResponse.json({
            isOk:false,
            massage:"Something went wrong"
        },{status:400})
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      isOk:false,
      massage:"Something went wrong"
  },{status:400})
    
    
  }
}


