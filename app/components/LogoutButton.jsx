"use client"

import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import  { useRouter } from 'next/navigation'

export default async function LogoutButton() {
    const router = useRouter()

    const handleLogout = async()=>{
        const supabase = createClientComponentClient();
        const {error} = supabase.auth.signOut();

        if(!error){
            router.push("/login")
        }
        else{
          console.log(error)
        }
    }

  return (
    <button className='btn-primary' onClick={handleLogout}>
        LogOut
    </button>
  )
}
