import React from 'react'
import '../Styles/Navbar.css';
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function RootLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const openDropdown = () => {
        setMobileOpen(current => !current);
    }
    return (
        <>
            <div>
                <div>
                    ShopIt
                </div>

                <nav className='largeMenu hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 '>
                    <ul className='navOptions flex flex-col mt-4'>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li block py-2 pl-3 pr-4>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faHeart} /> </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='mobileBarIcon lg:hidden md:block sm:block pt-4' onClick={openDropdown}>
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </div>
                {mobileOpen ?
                    <ul className='navOptions flex flex-col mt-4'>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li block py-2 pl-3 pr-4>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faHeart} /> </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        </li>
                    </ul> : null
                }
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}
