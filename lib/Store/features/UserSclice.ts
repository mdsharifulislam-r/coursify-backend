import { getStorLocal, setStorLocal } from "@/lib/hooks/LoacalHooks"
import { Student } from "@/lib/Types/Types"
import { createSlice } from "@reduxjs/toolkit"

const localData:Student|null = getStorLocal("user")
const initialState = {
    user:localData,
    type:"student"
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
        // setUserType:(state,action)
    }
})

export const {signInUser,Logout} = userSlice.actions
