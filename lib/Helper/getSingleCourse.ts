import { revalidateTag } from "next/cache"

export async function getSingleCourse(id:string,client?:boolean) {
    
    try{
        const url = client?process.env.NEXT_PUBLIC_BASE_URL:process.env.BASE_URL
        const response = await fetch(`${url}/course/${id}`)
        const data = await response.json()
       
    return data?.isOk ? data.data : {}
    }catch(err){
        console.log(err)
        return {}
       
    }
    
}