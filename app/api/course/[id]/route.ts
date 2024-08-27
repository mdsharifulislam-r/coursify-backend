import { ConnectDB } from "@/lib/Database/ConnectDB";
import { CourseModel } from "@/lib/Database/Models";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";
ConnectDB()
export async function GET(Request:Request,{params}:Params) {
   
    try {
        const {id} = params
        if(id){
            const singleCourse = await CourseModel.findOne({_id:id})
            if(singleCourse){
                return NextResponse.json({
                    isOk:true,
                    data:singleCourse,
                    massage:"Course get successfully"
                },{
                    status:200
                })
            }else{
                return NextResponse.json({
                    isOk:false,
                   
                    massage:"Course get faild"
                },{
                    status:400
                })
            }
        }else{
            return NextResponse.json({
                isOk:false,
               
                massage:"Invalid credintials"
            },{
                status:400
            })  
        }
    } catch (error) {
        
        return NextResponse.json({
            isOk:false,
           
            massage:"Invalid credintials"
        },{
            status:400
        })  
    }
}
