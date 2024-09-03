
import Module, { ModulePropsType } from './Curriculum/Module'
import { CourseType } from '../Courses/CourseCard/CourseCard'
interface props{
  course:CourseType
}
export default function Curriculam({course}:props) {
  const myModule:ModulePropsType[] = course?.module?.length? [{
    title:"Promo Video",
    moduleId:"promo_module",
    data:[{
      text:"Promo Video",
      videolink:course?.promovideo,
      isLock:false,
      videoId:'promo',
      desc:"This is the promo video"
    }]
  },...course?.module]:[{
    title:"Promo Video",
    moduleId:"promo_module",
    data:[{
      text:"Promo Video",
      videolink:course?.promovideo,
      isLock:false,
      videoId:'promo',
      desc:"This is the promo video"
    }]
  }]

  
 
  const data = myModule?.map((item,index)=>{
    return <Module
    title={item.title}
    data={item.data}
    open={index==0 && true}
    key={index}
    courseId={course?._id}
    moduleId={item.moduleId}
    dev={false}
    />
  })
  return (
    <div className='flex flex-col gap-4'>
        {data}

    </div>
  )
}
