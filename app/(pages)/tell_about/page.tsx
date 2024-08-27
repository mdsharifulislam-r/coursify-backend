import TellMeAbout from '@/components/Tell_Me/TellMeAbout'
import React from 'react'

export default function page({searchParams}:{searchParams:{type:string}}) {
  const {type} = searchParams
  return (
    <div>
      <TellMeAbout type={type}/>
    </div>
  )
}
