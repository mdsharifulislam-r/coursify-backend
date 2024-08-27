import Image from 'next/image'
import React from 'react'
import paypalImage from "@/assets/Checkout/PayPal_logo.svg.png"
import { cartItem } from '@/lib/Store/features/CartSlice'
import { makePrice } from '../Common/Cart'
export default function PaymentBox() {


  return (
    <div>
      <div className="form-control bg-dark p-5">
  <label className=" flex place-items-center gap-3 cursor-pointer">
 
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
    <div>
        <Image src={paypalImage} alt='' width={300} height={100} className='h-7 w-auto'/>
    </div>
  </label>
</div>

    </div>
  )
}
