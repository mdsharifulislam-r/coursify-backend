
import Header from '@/components/Common/Header'
import dynamic from 'next/dynamic'
import React from 'react'
const CheckoutContainer = dynamic(()=>import('@/components/Checkout/CheckoutContainer'),{ssr:false} )
export default function page({searchParams}:any) {
  const {id}:{id:string} = searchParams
  return (
    <div>
      <Header
      path='Checkout'
      />
      <CheckoutContainer id={id}/>
    </div>
  )
}
