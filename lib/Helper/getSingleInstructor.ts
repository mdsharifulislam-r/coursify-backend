export async function getSingleInstructor(id:string,client:boolean=false){
    try{
        const url = client ? process.env.NEXT_PUBLIC_BASE_URL :process.env.BASE_URL
    const res = await fetch(`${url}/instructor/${id}`,{
        next:{
            tags:["updateInstructor"]
        }
    })
    const data = await res.json()
    if(data.isOk){
        return data.data
    }
    else{
        return {}
    }
}catch(error){
    console.log(error);
    return {}
    
}
}