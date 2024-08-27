import Header from "@/components/Common/Header";
import SingleInstructorDetails from "@/components/InstructorDetails/SingleInstructorDetails";
import { Suspense } from "react";

export default function page({params}:{params:{instructor:string}}) {
  const {instructor} = params
 
  
  return (
    <div>
        <Header path="Instructor Details"/>
      <Suspense fallback={"Loading..."}>
        <SingleInstructorDetails id={instructor}/>
      </Suspense>
    </div>
  )
}
