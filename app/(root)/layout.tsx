import Footer from "@/components/shared/Footer";
import { Header } from "@/components/shared/navbar/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GhaMedia",
    description: "Video Editing Service ",
  };


const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="flex h-screen flex-col" >
    <Header/>
    <main className="flex-1" >{children}</main>
    <Footer/>
</div>
  )
}

export default Layout