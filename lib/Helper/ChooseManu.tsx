import DashBoard from '@/components/DashBoard/InstrutorDashBoard/DashBoard';
import EnrollStudents from '@/components/DashBoard/InstrutorDashBoard/EnrollStudents';
import Reviews from '@/components/DashBoard/InstrutorDashBoard/Reviews';
import UpdateForm from '@/components/DashBoard/UpdateForm';
import React from 'react'

export default function ChooseManu({id,text,type}:{id:string,text:string,type:string}) {
switch (text) {
    case "dashboard":
        return <DashBoard/>
    case "my_profile":
        return <UpdateForm id={id} type={type}/>
    case "enroll_students":
        return <EnrollStudents userId={id}/>
    case "reviews":
        return <Reviews id={id}/>

    default:
        return <DashBoard/>
      
}
}
