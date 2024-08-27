import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function ButtonLoader() {
  return (
    <div className='flex justify-center'>
 <Oval
    visible={true}
    height="30"
    width="20"
    color="#fff"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />

    </div>
   
  )
}
