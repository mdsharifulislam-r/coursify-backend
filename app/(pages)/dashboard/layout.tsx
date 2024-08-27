;
import Header from "@/components/DashBoard/Header/Header";
import MainContainer from "@/components/DashBoard/MainContainer/MainContainer";
import SideBar from "@/components/DashBoard/SideBar/SideBar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | Coursify",
      
    description: "This the dashboard",
  };
  
  export default function Layout({
    children,
    searchParams
  }: {
    children: React.ReactNode;
    searchParams:any
  }) {
   
    
    return (
     <div>
      {children}
     </div>
    );
  }
  