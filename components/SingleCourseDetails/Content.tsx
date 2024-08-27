import React from 'react'
interface props{
    data:string,
    content:JSX.Element | string,
    open?:boolean
}
export default function Content({data,content,open}:props) {
  return (
    <>
    <input type="radio" name="my_tabs_2" role="tab" className="tab lg:w-full w-[70%] xs:px-1 !px-1 md:!px-4 text-primary !text-sm md:text-xl" aria-label={data} defaultChecked={open} />
  <div role="tabpanel" className="tab-content pt-10 w-full">
    {content}
  </div>
    </>
  )
}
