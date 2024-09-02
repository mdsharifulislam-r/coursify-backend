'use client'
import { useAppSelector } from "@/lib/hooks/Hooks";
import CartItemBox from "./CarItemBox";
import { makePrice } from "../Common/Cart";
import { useState } from "react";
import toast from "react-hot-toast";
import { cartItem } from "@/lib/Store/features/CartSlice";
export default function CartContainer() {
    const cartData = useAppSelector(state=>state.cartReduicer.cartData)
    const [Item,setItem]=useState<cartItem | null>(null)

    
    const Cartitem = cartData?.map(item=>{
        return <CartItemBox
        image={item.image}
        name={item.name}
        _id={item._id}
        cartId={item.cartId}
        author={item.author}
        price={item.price}
        type={item.type}
        amount={item.amount}
        key={item.cartId}
        setItem={setItem}
        />
    })
    const [price,setPrice]=useState(makePrice(cartData))
    const [promo,setPromo]=useState("")
    function GetDiscount(){
      if(!promo){
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/promo/promocourse`,{
          method:"POST",
          body:JSON.stringify({
            id:"66bd1586f69a3da447ae2a1f",
            code:"demo"
          }),
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.isOk){

            toast.success(data.massage)
        
            
            setPrice(prev=>prev-data.discount)
          }else{
            toast.error(data.massage)
          }
        })
      }
    }
    
  return (
    <div className="container">
      <div className=" ">
        <div className="sm:flex shadow-md my-10">
          <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8 ">
              <h1 className="font-semibold text-2xl">Course Cart</h1>
              <h2 className="font-semibold text-2xl">{cartData?.length} Items</h2>
            </div>
            {Cartitem}
            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Get More Course
            </a>
          </div>
          <div
            id="summary"
            className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cartData?.length}</span>
              <span className="font-semibold text-sm">{makePrice(cartData)}$</span>
            </div>
            {Item?.type !== 'course' && <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select onChange={(e)=>{setPrice(makePrice(cartData)+parseInt(e.target.value))
              }} className="block p-2 text-gray-600 w-full text-sm">
                <option value={10}>Standard shipping - $10.00</option>
                <option value={30}>Standard shipping - $10.00</option>
              </select>
            </div>}
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button onClick={GetDiscount} className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${price}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
