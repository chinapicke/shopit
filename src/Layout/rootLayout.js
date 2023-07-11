import React from 'react'
import '../Assets/Styles/Navbar.css';
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/Context';
import CartPopUp from '../Components/CartPopUp';
import SavedHook from '../Hooks/savedHook';
import Footer from '.././Components/Footer'
import Drawer from '@material-tailwind/react'


export default function RootLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const{cartDrawer, openDrawer} = SavedHook()
    const closeDrawer = () => setMobileOpen(false);
    // const [cartDrawer, setCartDrawer] = useState(false);

    const CartState = useContext(AppContext);
    const state = CartState.state

    // to show changing cart amount at shopping cart icon
    const quantityOnly = state.map(item => item.quantity)
    console.log(quantityOnly);
    const totalCartQuantity = quantityOnly.reduce(function(accumulator,currValue)
    {
       return accumulator + currValue;
    },0)
    console.log(totalCartQuantity);

    const openDropdown = () => {
        setMobileOpen(current => !current);
    }
    
 

    return (
        <>
            <div className='jumbotron flex justify-between'>
                <div className='py-2'>
                    <NavLink to='/'>
                      ShopIt  
                    </NavLink>
                </div>

                <nav className='largeMenuCentre hidden justify-center w-full inline-block lg:flex lg:w-auto lg:order-1 md:flex md:w-auto md:order-1'>
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
                <nav className='hidden justify-end w-full lg:flex lg:w-auto lg:order-1  md:flex md:w-auto md:order-1' >
                    <ul>
                        <div className='flex pl-5'>
                        <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='findIcon'>
                            <NavLink to='/shop'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='saveIcon'>
                            <NavLink to='/saved'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            </NavLink >
                        </li>
                        <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='shopIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={openDrawer}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span>{totalCartQuantity<=0?null:totalCartQuantity }</span>
                                {cartDrawer ?
                                <CartPopUp /> : null
                                }
                        </li>
                        </div>
                    </ul>
                </nav>



                <div className='mobileBarIcon lg:hidden md:hidden sm:block pt-2 pr-3' onClick={openDropdown}>
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </div>
                {mobileOpen ?
                <Drawer onClose={closeDrawer}>
                    <ul className='navOptions flex flex-col mt-4 lg:hidden md:hidden'>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4'>
                            <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='findIcon'>
                            <NavLink to='/shop'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                            </NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='saveIcon'>
                            <NavLink to='/saved'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            </NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='shopIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={openDrawer}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span>{totalCartQuantity<=0?null:totalCartQuantity }</span>
                                {cartDrawer ?
                                <CartPopUp /> : null
                                }
                        </li>
                    </ul>
                    </Drawer> : null
                }
            </div>

            <div className='navbarSeperator w-full h-4'></div>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
