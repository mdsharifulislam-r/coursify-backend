import RegisterContaianer from "@/components/Register/RegisterContaianer";
import { responseData } from "../register/page";

export default function page({searchParams}:any) {
  const response:responseData = searchParams
  return (
    <div>
      <RegisterContaianer login={true} response={response}/>
    </div>
  )
}
