import React from 'react'
import "./HederStyle.css"
interface headetype{
    children:string,
    className?:string
}
export default function HederTitle({children,className}:headetype) {
  const stringArr:string[] = children.split(" ")

  
  return (
    <div>
      <h1 className={className}>{stringArr.slice(0,stringArr.length-2).join(' ')+' '}<span className="underlined underline-clip">{stringArr.splice(stringArr.length-2,stringArr.length).join(' ')}</span></h1>
    </div>
  )
}
