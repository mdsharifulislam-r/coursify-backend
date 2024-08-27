
import { ConnectDB } from "@/lib/Database/ConnectDB";
import { InstructorModel } from "@/lib/Database/Models";
import { HashPassword } from "@/lib/Helper/HashPassword";
import { InstructorType } from "@/lib/Types/Types";
import jwt from 'jwt-simple'
import { NextRequest, NextResponse } from "next/server";
ConnectDB();

export const dynamic = "force-dynamic";

export async function GET(Request: Request) {
  try {
    const instructors = await InstructorModel.find({},{password:0,isSocialLogin:0});
    if (instructors) {
      return NextResponse.json(
        {
          isOk: true,
          data: instructors,
          massage: "Instructors Data get successfully",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          isOk: false,
          massage: "Somthing Wen wrong",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json({
      isOk:false,
      massage:"Something went wrong"
  },{status:400})
    console.log(error);
  }
}

export async function POST(Request: Request) {
  try {
    const { name, image, title, desc,password,email,type,phone}:InstructorType= await Request.json();
 
   
    if (name && image && title && desc && password&&email&&type&&phone) {
      const hashpassword = await HashPassword(password)
      const instructor = await InstructorModel.create({
        name,
        image,
        title,
        desc,
        password:hashpassword,
        email,
        type,
        phone
      });
      
      if (instructor) {
        return NextResponse.json(
          {
            isOk: true,
            massage: "Instructor Created Successfully",
          },
          {
            status: 200,
          }
        );
      } else {
        return NextResponse.json(
          {
            isOk: false,
            massage: "Instructor Created Failed",
          },
          {
            status: 400,
          }
        );
      }
    } else {
      return NextResponse.json(
        {
          isOk: false,
          massage: "Fill All the field",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      isOk:false,
      massage:"Something went wrong"
  },{status:400})

  }
}
export async function PUT(Request:NextRequest){
  try{
  
  const {payload}:{payload:string}= await Request.json()
  const formData = jwt.decode(payload,process.env.JWT_SECRET||"")

  
  if(!formData._id){
    return NextResponse.json({
      isOk:false,
      massage:"token expired"
    },{
      status:400
    })
  }
  if(!formData){
    return NextResponse.json({
      isOk:false,
      massage:"invalid credintials"
    },{
      status:400
    })
  }
  if(formData.secret!=="my-web"){
    return NextResponse.json({
      isOk:false,
      massage:"Unauthorized try"
    },{
      status:400
    })
  }
  if(payload){
      const instructor =await InstructorModel.findByIdAndUpdate(formData,{
        ...formData
      },{password:0,isSocialLogin:0})

      if(instructor){
          return NextResponse.json({
              isOk:true,
         
              massage:"Instructor update successfully"
          },{
              status:200
          })
      }else{
          return NextResponse.json({
              isOk:false,
              massage:"Somthing went wrong"
          },{
              status:400
          })
      }
      
      
  }else{
      return NextResponse.json({
          isOk:false,
          massage:"Fill All data"
      },{
          status:400
      })
  }
  
  }catch(error){
    console.log(error);
    return NextResponse.json({
      isOk:false,
      massage:"Something went wrong"
  },{status:400})
      
      
  }
  
}
