'use client'
import React from 'react'
import { FaLock } from 'react-icons/fa'
import PaymentBox from './PaymentBox'
import Details from './Details'
import { useAppSelector } from '@/lib/hooks/Hooks'
import { cartItem } from '@/lib/Store/features/CartSlice'
import { makePrice } from '../Common/Cart'
import LoadingButton from '../Common/Button/Button'

export default function CheckoutContainer({id}:{id:string}) {
    const cartdata = useAppSelector(state=>state.cartReduicer.cartData)
    const data:cartItem[] = id ? cartdata.filter(item=>item._id==id) : cartdata
    const price = makePrice(data)
  
  return (
    <div className='container'>
    <div className=' flex md:flex-row flex-col-reverse gap-4'>
      <div className='Payment w-full '>
        <textarea name="" id="" className='w-full min-h-32 p-4 rounded-md border shadow-xl focus:outline-primary' placeholder='Note for Teacher'></textarea>
        <div className="method pt-5">
        {price?<h1 className='text-2xl flex place-items-center gap-2 font-semibold'>Payment <span className='text-slate-300'><FaLock/></span>  <span className='text-slate-700 text-base'>Secure Connection</span></h1>:""}
       {price? <div className='py-3'>
            <PaymentBox />
        </div>:""}
        <div>
            {price ?<LoadingButton className='py-3 w-full bg-primary text-white'>Place Order</LoadingButton>:<LoadingButton className='py-3 w-full bg-primary text-white'>Enroll for free</LoadingButton>}
        </div>
        </div>
      </div>
     <Details data={data}/>
    </div>
    </div>
    
  )
}
