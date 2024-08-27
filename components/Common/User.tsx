import Image from 'next/image'
import React from 'react'

export default function Users() {
  return (
    <div className='px-5 py-5 shadow-lg bg-white flex justify-center rounded-md'>
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <Image width={1000} height={1000} alt='' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <Image width={1000} height={1000} alt='' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <Image width={1000} height={1000} alt='' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span>+99</span>
    </div>
  </div>
</div>
    </div>
  )
}
