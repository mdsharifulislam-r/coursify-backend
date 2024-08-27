import React from 'react'
interface props{
    name:string
}
export default function CheckBox({name}:props) {
  return (
    <div className="">
    <label className="cursor-pointer flex gap-3 place-items-center">
     
    <input
  type="checkbox"
  name={name?.split(" ").join("_").toLowerCase()}
  value={name?.split(" ").join("_").toLowerCase()}
  className="checkbox border-orange-400 [--chkbg:theme(colors.primary)] [--chkfg:white]" />

      <span className="label-text">{name}</span>
    </label>
  </div>
  )
}
