import { redirect } from "next/navigation"

export async function StudentLogin(e:FormData){

    
    
        const data = Object.fromEntries(e.entries())
         const res = await fetch(`${process.env.BASE_URL}/student/login`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              type:data.type,
              email:data.email,
              password:data.pass,
              isSocialLogin:{
                status:false,
              }
            })
          })
          
          const user = await res.json()
    
          return user
        
          
         
        
      }