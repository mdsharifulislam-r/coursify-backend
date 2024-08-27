import React, { SelectHTMLAttributes } from 'react'

export default function SelectBox(props:SelectHTMLAttributes<HTMLSelectElement>&{element?:string[],title:string}) {
 const data = props.element?.length ? props.element?.map(item=>{
    return <option value={item} key={item}>{item}</option>
 }):[]
    return (
    <select {...props} className="select select-accent w-full">
    <option disabled selected>{props.title}</option>
    {data.length?data:props.children}
  </select>
  )
}
