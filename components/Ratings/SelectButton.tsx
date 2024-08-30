'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react'

export default function SelectButton({id}:{id:string}) {
    const router = useRouter()
    function GetValue(e:ChangeEvent<HTMLSelectElement>){
        const sort = e.target.value
        router.push(`/ratings?id=${id}&sort=${sort}`)
    }
  return (
    <div className='shadow rounded-md px-2' >
    <select onChange={GetValue} name="" id="" className='px-3 py-2 text-sm md:text-base bg-white focus:outline-none ' >
        <option value="hightolow">High To Low</option>
        <option value="lowtohigh">Low to High</option>
    </select>
</div>
  )
}
