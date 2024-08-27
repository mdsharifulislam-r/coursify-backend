
import Header from '@/components/DashBoard/Header/Header'
import DashBoard from '@/components/DashBoard/InstrutorDashBoard/DashBoard'
import MainContainer from '@/components/DashBoard/MainContainer/MainContainer'
import SideBar from '@/components/DashBoard/SideBar/SideBar'
import UpdateForm from '@/components/DashBoard/UpdateForm'
import React from 'react'

export default function page({searchParams}:{searchParams:{id:string,type:string}}) {
  const {id,type}=searchParams
  return (
    <div>
      <Header id={id} type={type}/>
      <div className='container flex gap-4'>
        <SideBar id={id} type={type}/>
        <MainContainer>
          <UpdateForm id={id} type={type}/>
        </MainContainer>
      </div>
      
     </div>
  )
}
