"use server"
import { cookies } from "next/headers";
import jwt from 'jwt-simple'
import { revalidateTag } from "next/cache";

export async function getStudentClient(word?:string[]|undefined,id?:string) {
    try {
       
     
        
            const path = word?.toString()||'single'
            const token = jwt.encode(id,process.env.NEXT_PUBLIC_JWT_SECRET||"")
       
            
          
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/student/${path}`,{
                headers:{
                    "Cookie" : `token=${token}`
                },
                method:"GET",
                cache:"no-store"
              
            })

            const data = await res.json()  
            if(data.isOk){
                const main = jwt.decode(data.data,process.env.NEXT_PUBLIC_JWT_SECRET||"")
              revalidateTag("allCourseTag")
                
                return main
                
                
            }else{
                return {}
            }         

        
        
    } catch (error) {
       console.log(error);
    return {}
    }
}