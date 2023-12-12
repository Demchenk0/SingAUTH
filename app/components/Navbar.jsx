import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
        <ul className="flex">
            <li>
                <Link className='p-2 cursor-pointer' href='/'>Home</Link>
            </li>
            <li>
                <Link className='p-2 cursor-pointer' href='/about'>About</Link>
            </li>
            <li>
                <Link className='p-2 cursor-pointer' href='/profile'>Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar