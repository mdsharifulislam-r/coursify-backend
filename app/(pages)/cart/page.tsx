
import Header from '@/components/Common/Header'
import dynamic from 'next/dynamic'
import React from 'react'
const CartContainer = dynamic(() => import('@/components/Cart/CartContainer'), { ssr: false })
export default function page() {
  return (
    <div>
      <Header 
      path='Cart'
      />
      <CartContainer/>

    </div>
  )
}
