import React from 'react'
import Link from 'next/link'
import logo from './dojo-logo.png'
import Image from 'next/image';

//components
import LogoutButton from './LogoutButton';

export default function Navbar({user}) {
  return (
    <nav>
        <Image 
        src={logo}
        alt='Dojo Helpdisk Logo'
        width={70}
        quality={100}
        placeholder='blur'
        />
        <h1>Dojo Helpdisk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets" className='mr-auto'>Tickets</Link>
        {user && <span>Hello, {user.email}</span>}
        <LogoutButton />
    </nav>
  )
}
