'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function LinkProb({id}:{id:string}) {
    const [hydred,setHydred]=useState(false)
    useEffect(()=>{
        setHydred(true)
    },[])
    const router = useRouter()
  return (
    <div>
      {hydred && <button onClick={()=>router.push(`/ratings?id=${id}`)} className='text-primary p-3'>See All Reviews</button>}
    </div>
  )
}
