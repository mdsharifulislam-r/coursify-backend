export async function getSingleCourse(id:string) {
    
    try{
        const response = await fetch(`${process.env.BASE_URL}/course/${id}`)
    const data = await response.json()
   
    return data?.isOk ? data.data : {}
    }catch(err){
        return {}
        console.log(err)
    }
    
}