"use server"
import jwt from 'jwt-simple'
export async function EnrollCourse(data:any) {
    try {
        console.log(data);
        
        const encryptData = jwt.encode(data,process.env.JWT_SECRET||"")
        const res = await fetch(`${process.env.BASE_URL}/course/update`,{
            method:"PUT",
            body:JSON.stringify({
                payload:encryptData
            })
        })
        const datak =await res.json()
        return datak
    } catch (error) {
        console.log(error);
        return{
            isOk:false
        }
        
    }
}