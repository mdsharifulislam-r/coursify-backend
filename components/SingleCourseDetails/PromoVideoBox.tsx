import React from 'react'
import { youtubeParser } from '../Lessons/Videoframe'
import { YouTubeEmbed } from '@next/third-parties/google'

export default function PromoVideoBox({promovideo}:{promovideo:string}) {
  const link = youtubeParser(promovideo||"")

  return (
    <div>
  {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="hidden peer/show" />

  <div className="z-50 w-full bg-[rgba(0,0,0,0.3)] h-screen fixed top-0 left-0 peer-checked/show:flex hidden popUp justify-center place-items-center">
  <div className='md:w-[50%] w-[90%] relative z-[2]'>
  <div className="aspect-video w-full">
  <YouTubeEmbed  videoid={link ?link :""}  params="controls=1" />
  </div>
  </div>
  <label htmlFor="my_modal_7" className='z-0 absolute w-full h-full left-0 top-0'></label>
  </div>
 

    </div>
  )
}
