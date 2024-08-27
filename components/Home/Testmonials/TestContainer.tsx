import Image from "next/image"
import image from "@/assets/Home/Teacher/teacher3.webp"
import image2 from "@/assets/Home/Teacher/teacher1.webp"
import image3 from "@/assets/Home/Teacher/teacher2.webp"
import Marquee from "react-fast-marquee"
import Link from "next/link"
import { ImQuotesLeft } from "react-icons/im";
interface TestType{
    image:any,
    name:string,
    title:string,
    desc?:string
}
export function TestCard({image,name,title,desc}:TestType)
{
    return (
        <div className="bg-white max-w-[400px] mx-3 p-5 min-w-64 relative rounded-md">
            <div className=" absolute text-5xl opacity-30 text-primary right-5 top-5"><ImQuotesLeft/></div>
            <div className="imageBox ">
                <div className="box flex place-items-center gap-3">
                    <div className="imageBox w-[60px] h-[60px] border relative rounded-full overflow-hidden">
                        <Image src={image} className=" absolute w-full h-full left-0 top-0 object-cover" alt="image" width={100} height={100}/>
                    </div>
                    <div className="textBox">
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="font-extralight text-sm">{title}</p>
                    </div>
                </div>
            </div>
            <div className="textBox pt-5">
                <p className="text-lg text-slate-500">Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.</p>
                <Link href={"#"} className="py-4 text-sm text-primary">Read More</Link>
            </div>
        </div>
    )
}
export default function TestContainer() {
  return (
    <div className="py-3 flex flex-col gap-5 pt-11 ">
   <Marquee 
   
   autoFill={true}
   className="  scrollbar scrollbar-none" 
   gradient={true}
   gradientColor="rgb(248,251,253)"
   gradientWidth={200}
   >
      <TestCard
      image={image}
      name="Michael D. Lovelady"
      title="Executive Designer @ Google"
      />
    <TestCard
      image={image2}
      name="Michael D. Lovelady"
      title="Executive Designer @ Google"
      />
      <TestCard
      image={image3}
      name="Michael D. Lovelady"
      title="Executive Designer @ Google"
      />
      </Marquee>
      <Marquee 
  
   autoFill={true}
   className=" scrollbar scrollbar-none" 
   gradient={true}
   gradientColor="rgb(248,251,253)"
   gradientWidth={200}
   direction="right"
   >
     <TestCard
      image={image}
      name="Michael D. Lovelady"
      title="Executive Designer @ Google"
      />
    <TestCard
      image={image2}
      name="Michael D. Lovelady"
      title="Executive Designer @ Google"
      />
      <TestCard
      image={image3}
      name="Michael D. Lovelady"
      title="Executive Designer @ Google"
      />
      </Marquee>
    </div>

      
  )
}
