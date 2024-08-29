import { getStorLocal, setStorLocal } from "@/lib/hooks/LoacalHooks"
import { InstructorType, review, Student } from "@/lib/Types/Types"
import { createSlice } from "@reduxjs/toolkit"

const localData:Student|null = getStorLocal("user")
const localRatings:review[]|null = getStorLocal("ratings")

const initialState = {
    user:localData,
    type:"student",
    ratings:localRatings
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInUser:(state,action)=>{
            state.user = action.payload
            setStorLocal('user',action.payload)
        },
        Logout:(state)=>{
            state.user=null
            setStorLocal('user',null)
        },
        setRatings:(state,action)=>{
            state.ratings=action.payload
            setStorLocal('ratings',action.payload)
        }

    }
})

export const {signInUser,Logout,setRatings} = userSlice.actions
