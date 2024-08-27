


import { Submit } from '@/lib/Helper/CourseFilter'
import Accordian from './SideBar/Accordian'
import Price from './SideBar/Price'
import Link from 'next/link'

// import Price from './SideBar/Price'
export const instructor = ["Learn With Sumit","Jankar Mahmud","Hitesh","Anisur Rahman","Procoder"]
export const catagories=["Business","Cooking","Digital Marketing","Fitness","Motivation","Online Art","Photography","Programming","Yoga"]
export const lavel = ["All Level","Beginner","Intermatiade","Expert"]
export default function SideBar() {
  
  
  return (
    <div className='w-full bg-white  shadow-xl p-7'>
       <form className='' action={Submit} >
      <Accordian title='Catagories' data={catagories} />
      <Accordian title='Instructor' data={instructor} />
      <Accordian title='Level' data={lavel} />
      <Price/>
      <div>
    <button type='submit' className='bg-primary text-white w-full py-4 rounded-md mt-3'>Apply Filter</button>
      </div>
      <div className='pt-3'>
      <Link type='reset' href={"/courses"} className='py-4 text-center w-full text-white rounded-md bg-secondary block'>Reset Filter</Link>
    </div>
    </form>
    
    </div>
   
  )
}
