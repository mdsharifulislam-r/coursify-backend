import React from 'react'

export default function SubscribeSection() {
  return (
    <div className='w-full bg-white pb-12'>
        <div className="container flex justify-center place-items-center flex-col gap-3">
            <h1 className='lg:text-4xl md:text-3xl text-2xl text-center font-bold leading-[1.4] pb-7'>
            Want to get special offers <br /> and Course updates?
            </h1>
            <div className="inputBox  border lg:px-5 lg:py-3 p-2 lg:w-[50%] md:w-[70%] w-[90%] flex rounded-full justify-between place-items-center gap-2">
                <input type="text" className='px-4 py-3 w-[60%]  focus:outline-none' placeholder='Email Address' />
                <button className='px-4 py-3 w-[40%] bg-primary text-white rounded-full'>Subscribe</button>
            </div>
        </div>
      
    </div>
  )
}
