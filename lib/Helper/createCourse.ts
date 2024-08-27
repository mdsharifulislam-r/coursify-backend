"use server"
import jwt from 'jwt-simple'
import { CourseType } from "@/components/Courses/CourseCard/CourseCard";
import { cookies } from "next/headers";
const token = cookies().get("token")?.value
export async function createCourse(data:any) {
    try{
        if(!token){
            return {
                isOk:false,
                massage:"Session Expired Please login again"
            } 
        }
      
        
        const encrptedData = jwt.encode(data,process.env.JWT_SECRET||"")
        const res =await fetch(`${process.env.BASE_URL}/course`,{
            method:"POST",
            headers:{
                "Cookie":`token=${token}`
            },
            body:JSON.stringify({
                payload:encrptedData
            })
        })
        const dat = await res.json()
  
        
        if(dat.isOk){
            return {
                isOk:true,
                massage:dat.massage
            }
        }else{
            return {
                isOk:false,
                massage:dat.massage
            } 
        }
    }catch(error){
        console.log(error);
        return {
            isOk:false,
            massage:"Somthing Went wrong"
        }
    }
   
    
    
}