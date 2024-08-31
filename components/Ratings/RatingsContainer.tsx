import { review } from '@/lib/Types/Types'
import React from 'react'
import ReviewItem from '../SingleCourseDetails/Reviews/ReviewIten';
import SelectButton from './SelectButton';
import SortRatings from '@/lib/Helper/SortRatings';

export default function RatingsContainer({ratings,name,id,sort}:{ratings:review[],name:string,id:string,sort:string}) {
    const sortArray = SortRatings(ratings,sort)
    
  
    
    const data = sortArray?.map(item=>{
    return <ReviewItem
    user={item?.user}
    desc={item?.desc}
    star={item?.star||"0"}
    key={item?.user}
    />
   })
   
  return (
    <div className='container'>
        <div className="header py-4 mb-3 border-b flex justify-between place-items-center"  >
            <div className='md:text-xl text-sm font-bold'>Reviews Of {name}</div>
           <SelectButton id={id}/>
        </div>
     {data}
    </div>
  )
}
