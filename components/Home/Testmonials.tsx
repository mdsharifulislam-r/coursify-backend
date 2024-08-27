import Title from "../Common/Title";
import TestContainer from "./Testmonials/TestContainer";

export default function Testmonials() {
  return (
    <div className="w-full bg-dark py-7">
      <div className="containe">
        <Title tagline="EDUCATION FOR EVERYONE" heading={`What Peoples are says`}/>
        <TestContainer/>
      </div>
    </div>
  )
}
