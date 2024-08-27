import React from 'react'
import Content from './Content'
import OverView from './OverView'
import Curriculam from './Curriculam'
import Instructor from './Instructor'
import Reviews from './Reviews'
import { Props } from './SideBar'

export default function Container({course}:Props) {
  return (
    <div className='lg:w-[70%]  w-full  '>
      <div role="tablist" className="tabs tabs-lifted w-full ">
        <Content
        data='Overview'
        content={<OverView desc={course?.desc}/>}
        open={true}
        />
        <Content
        data='Curriculum'
        content={<Curriculam course={course}/>}
        />
        <Content
        data='Instructor'
        content={<Instructor/>}
        />
        <Content
        data='Reviews'
        content={<Reviews/>}
        />
  
</div>
    </div>
  )
}
