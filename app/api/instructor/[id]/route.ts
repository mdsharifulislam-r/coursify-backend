
import { ConnectDB } from "@/lib/Database/ConnectDB";
import { InstructorModel } from "@/lib/Database/Models";
import { ComparePassword } from "@/lib/Helper/HashPassword";
import { InstructorType } from "@/lib/Types/Types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jwt-simple'
import { cookies } from "next/headers";
ConnectDB()
export async function GET(Request: Request, { params }: {params:{id:string}}) {
  try {
    const { id } = params;
  
   
    
    if(!id){
      return NextResponse.json(
        {
          isOk: false,
          massage: "invalid credintials",
        },
        {
          status: 400,
        }
      );
    }
    const instructor = await InstructorModel.findOne({ _id: id },{password:0,isSocailLogin:0})
    
    
    if (instructor) {
      return NextResponse.json(
        {
          isOk: true,
          data: instructor,
          massage: "instructor data get successfully",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          isOk: false,
          massage: "Data not found",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      isOk:false,
      massage:"Something went wrong"
  },{status:400})
    
  }
}

export async function PUT(Request:NextRequest){
    try{
    const token =cookies().get("token")?.value
    if(token==undefined){
      return NextResponse.json({
        isOk:false,
        massage:"token expired"
      },{
        status:400
      })
    }
    
    const id = jwt.decode(token||"",process.env.JWT_SECRET||"")
    const {payload}:{payload:string}= await Request.json()
    const formData = jwt.decode(payload,process.env.JWT_SECRET||"")  
    if(!id){
      return NextResponse.json({
        isOk:false,
        massage:"token expired"
      },{
        status:400
      })
    }
    if(!formData){
      return NextResponse.json({
        isOk:false,
        massage:"invalid credintials"
      },{
        status:400
      })
    }
    if(formData.secret!=="my-web"){
      return NextResponse.json({
        isOk:false,
        massage:"Unauthorized try"
      },{
        status:400
      })
    }
    const match = await InstructorModel.findOne({_id:id})
    const found = await InstructorModel.findOne({email:formData.email})
    if(found && formData.email == match.email){
      return NextResponse.json({
        isOk: false,
        massage: "Email already used",
      });
    }
    if(payload){
        const instructor =await InstructorModel.findByIdAndUpdate(id,{
          ...formData
        },{password:0,isSocialLogin:0})

        if(instructor){
            return NextResponse.json({
                isOk:true,
                data:instructor,
                massage:"Instructor update successfully"
            },{
                status:200
            })
        }else{
            return NextResponse.json({
                isOk:false,
                massage:"Somthing went wrong"
            },{
                status:400
            })
        }
        
        
    }else{
        return NextResponse.json({
            isOk:false,
            massage:"Fill All data"
        },{
            status:400
        })
    }
    
    }catch(error){
      console.log(error);
      return NextResponse.json({
        isOk:false,
        massage:"Something went wrong"
    },{status:400})
        
        
    }
    
}

export async function POST(Requset:Request) {
  try {
    const {email,password,isSocialLogin}:InstructorType = await Requset.json()
  
    
    const data:InstructorType|null= await InstructorModel.findOne({email:email})
    if(!data){
      return NextResponse.json({
        isOk:false,
        massage:"Account not register yet"
      })
    }
    if(!(email&&password&&isSocialLogin)){
      return NextResponse.json({
        isOk:false,
        massage:"invalid crerdintials"
      })
    }
    if(!isSocialLogin.status){
    const match = await ComparePassword(data?.password,password)
    if(!match){
      return NextResponse.json({
        isOk:false,
        massage:"invalid credintials"
      })
    }

    const instructorData = await InstructorModel.findOne({email:email}).select(["email","name","phone",'desc','image','socialLinks',"intrestTypes","type"])
  
    
    const token = jwt.encode(data._id,process.env.JWT_SECRET||"")
    const response = NextResponse.json({
      isOk:true,
      data:instructorData,
      massage:"Login Successfully"
    })
    response.cookies.set("token",token)
    return response
  }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      isOk:false,
      massage:"something went wrong"
    },{
      status:500
    })
    
  }
  
}
