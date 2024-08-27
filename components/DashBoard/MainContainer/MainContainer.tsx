import React, { Children, ReactNode } from 'react'

export default function MainContainer({children}:{children:ReactNode}) {
  return (
    <div className='w-full'>
      {children}
    </div>
  )
}
