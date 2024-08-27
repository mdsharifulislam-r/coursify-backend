import { compare, genSalt, hash } from "bcrypt-ts"

export async function HashPassword(password:string){
    const salt = await genSalt(10)
    const hashpassword =await hash(password,salt)
    return hashpassword
}

export async function ComparePassword(hashedPassword:string,password:string) {
    return await compare(password,hashedPassword)   
}