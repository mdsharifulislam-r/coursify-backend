"use server"
import { signIn } from "@/app/auth";

export async function SocialLogin() {
    try{
        await signIn('google',{redirectTo:"/login"})
        
        
    }catch(err){
        
        console.log(err);
        return {
            isOk:false
        }
        
    }
}
