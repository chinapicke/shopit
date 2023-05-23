import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function RootLayout() {
  return (
    <>
    <div>
        ShopIt
    </div>
    <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li>
                <NavLink to='/cart'><FontAwesomeIcon icon={faCartShopping} /></NavLink>
            </li>
        </ul>
    </nav>
    <main>
        <Outlet />
    </main>
    </>
  )
}
