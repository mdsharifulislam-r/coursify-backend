import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

import toast from "react-hot-toast";
import { getStorLocal } from "@/lib/hooks/LoacalHooks";
export interface cartItem{
    cartId:string,
    name:string,
    author:string,
    _id:string,
    price:string,
    amount?:number,
    image:string,
    type:string
}
interface initial{
    cartData:cartItem[]
}

const localData:cartItem[]= getStorLocal("cartData")

const initialState:initial = {
    cartData:localData
}

export const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartData:(state,action)=>{
            const data:cartItem = action.payload
            if(!state.cartData.some(item=>item._id==data._id)){
            state.cartData = [action.payload,...state.cartData]
            localStorage.setItem('cartData',JSON.stringify(state.cartData))
            toast.success("Add to cart successfully")
            }else{
               toast.error('data already in cart') 
            }
            
        },
        deleteCartData:(state,action)=>{
            const id = action.payload
            state.cartData= state.cartData.filter(data=>data.cartId!==id)
            localStorage.setItem('cartData',JSON.stringify(state.cartData))
        }
    }
})
export const selectCart = (state:RootState)=>state.cartReduicer
export const {addCartData,deleteCartData} = CartSlice.actions