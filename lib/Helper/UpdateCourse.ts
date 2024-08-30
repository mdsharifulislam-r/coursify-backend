import jwt from 'jwt-simple'
import { revalidateTag } from 'next/cache'
export async function updateCourse(obj:any,id:string,client?:boolean) {
    try {
        const url = client ? process.env.NEXT_PUBLIC_BASE_URL : process.env.BASE_URL
        const encryptedData = jwt.encode(obj,process.env.JWT_SECRET||"")
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
        console.log(data);
        
        return data

    } catch (error) {
        console.log(error);
        return {}
    }
    
}