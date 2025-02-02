import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

//components
import Navbar from "../components/Navbar";

export default async function DashboardLayout({children}) {


  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
