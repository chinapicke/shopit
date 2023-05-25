import React from 'react'
import '../Assets/Styles/Navbar.css';
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
            <div className='flex justify-between'>
                <div className='py-2'>
                    ShopIt
                </div>

                <nav className='largeMenuCentre hidden justify-center w-full inline-block lg:flex lg:w-auto lg:order-1 '>
                    <ul className='navOptions flex'>
                        <div className='flex'>
                            <li className='block py-2 pl-3 pr-4'>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className='block py-2 pl-3 pr-4'>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li className='block py-2 pl-3 pr-4'>
                                <NavLink to='/shop'>Shop</NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
                <nav className='hidden justify-end w-full lg:flex lg:w-auto lg:order-1' >
                    <ul>
                    <div className='flex pl-5'>
                        <li className='block py-3 pl-3 pr-4'>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                        </li>
                        <li className='block py-3 pl-3 pr-4'>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faHeart} /> </NavLink>
                        </li>
                        <li className='block py-3 pl-3 pr-4'>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        </li>
                    </div>
                    </ul>
                </nav>



                <div className='mobileBarIcon lg:hidden md:block sm:block pt-2 pr-3' onClick={openDropdown}>
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </div>
                {mobileOpen ?
                    <ul className='navOptions flex flex-col mt-4'>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/cart'><FontAwesomeIcon icon={faHeart} /> </NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4'>
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
