import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
        </ul>
    </nav>
    <main>
        <Outlet />
    </main>
    </>
  )
}
