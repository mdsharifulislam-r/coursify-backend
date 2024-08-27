import CheckBox from "./CheckBox";

interface props{
    title:string,
    data:string[]
}
export default function Accordian({title,data}:props): JSX.Element {
    const boxes = data?.map((item,index)=>{
        return (
            <CheckBox name={item} key={index}/>
        )
    })
  return (
    <div className="pb-4">
        <h1 className="title text-2xl font-semibold">{title}</h1>
        <div className="flex flex-col gap-3 py-3 border-b">
            {boxes}
        </div>
    </div>
  )
 
}