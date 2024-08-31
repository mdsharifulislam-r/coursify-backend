import React from 'react'

export default function PromoVideoBox({promovideo}:{promovideo:string}) {
  return (
    <div>
      {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="hidden peer/show" />

  <div className="z-50 w-full bg-[rgba(0,0,0,0.3)] h-screen fixed top-0 left-0 peer-checked/show:flex hidden popUp justify-center place-items-center">
  <div className='md:w-[50%] w-[90%] relative z-[2]'>
  <div className="aspect-video">
    <iframe
      className="h-full w-full rounded-lg"
      src={promovideo}
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  </div>
  </div>
  <label htmlFor="my_modal_7" className='z-0 absolute w-full h-full left-0 top-0'></label>
  </div>
 

    </div>
  )
}
