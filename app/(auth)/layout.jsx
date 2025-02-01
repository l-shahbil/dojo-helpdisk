import Link from "next/link"

export default function AuthLayout({children}) {
  return (
    <>
        <nav>
            <h1>Dojo Helpdisk</h1>
            <Link href={"/singup"}>Sing Up</Link>
            <Link href={"/login"}>Login</Link>
        </nav>
        {children}
    </>
  )
}
