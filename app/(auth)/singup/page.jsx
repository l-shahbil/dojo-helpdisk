"use client"

import AuthForm from "../authForm";

export default function Singup() {

  const handleSubmit =async (e,email,password)=>{
    e.preventDefault();
    console.log("user sign-up",email,password)
  }

  return (
    <main>
        <h2 className="text-center">Sing Up</h2>
        <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}
