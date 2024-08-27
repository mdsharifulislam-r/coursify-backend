'use client'
import React from 'react'
import { FaLock } from 'react-icons/fa'
import PaymentBox from './PaymentBox'
import Details from './Details'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/Hooks'
import { cartItem, deleteCartData } from '@/lib/Store/features/CartSlice'
import { makePrice } from '../Common/Cart'
import LoadingButton from '../Common/Button/Button'
import { EnrollCourse } from '@/lib/Helper/EnrollCourse'
import toast from 'react-hot-toast'

export default function CheckoutContainer({id}:{id:string}) {
    const cartdata = useAppSelector(state=>state.cartReduicer.cartData)
    const user = useAppSelector(state=>state.userReduicer.user)
    const dispatch = useAppDispatch()
    const data:cartItem[] = id ? cartdata.filter(item=>item._id==id) : cartdata
    const price = makePrice(data)
  async function Enroll() {
   
    
    const res = await EnrollCourse({
      courseId:id,
      userId:user?._id
    })
    if(res.isOk){
      toast.success(res.massage)
      dispatch(deleteCartData(data[0].cartId))

    }else{
      toast.error(res.massage)
    }
    
  }
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
            {price ?<LoadingButton className='py-3 w-full bg-primary text-white'>Place Order</LoadingButton>:<LoadingButton onClick={Enroll} className='py-3 w-full bg-primary text-white'>Enroll for free</LoadingButton>}
        </div>
        </div>
      </div>
     <Details data={data}/>
    </div>
    </div>
    
  )
}
