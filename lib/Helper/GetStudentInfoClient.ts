
import jwt from 'jwt-simple'

export async function getStudentInfoClient(word?:string[]|undefined,id?:string) {
    try {
      
        
        
        
            const path = word?.toString()||'single'
          
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/student/${path}`,{
                headers:{
                    "Cookie" : `token=${jwt.encode(id,process.env.NEXT_PUBLIC_JWT_SECRET||"")}`
                },
                method:"GET",
                cache:"no-store"
              
            })

            const data = await res.json()  
            if(data.isOk){
                const main = jwt.decode(data.data,process.env.NEXT_PUBLIC_JWT_SECRET||"")
              
                
                return main
                
                
            }else{
                return {}
            }         

        
        
    } catch (error) {
       console.log(error);
    return {}
    }
}