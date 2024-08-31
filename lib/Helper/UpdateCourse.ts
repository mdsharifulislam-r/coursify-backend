"use server"
import jwt from 'jwt-simple'
import { revalidateTag } from 'next/cache'
export async function updateCourse(obj:any,id:string,client?:boolean) {
    try {
        const url = client ? process.env.NEXT_PUBLIC_BASE_URL : process.env.BASE_URL
        const jwt_URL = client ?process.env.NEXT_PUBLIC_JWT_SECRET:process.env.JWT_SECRET
        const encryptedData = jwt.encode(obj,jwt_URL||"")
       
        
        const res = await fetch(`${url}/course`,{
            method:"PUT",
            body:JSON.stringify({
                id:id,
                payload:encryptedData
            })
        })
        
        const data =await res.json()
        
       if(data.isOk){
        revalidateTag("singleCourse")
       }
        
        return data

    } catch (error) {
        console.log(error);
        return {}
    }
    
}