import useAxios from '../Hooks/useAxios'
import '../Assets/Styles/Navbar.css';
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { AppContext } from '../Context/Context';
import CartPopUp from '../Components/CartPopUp';
import SavedHook from '../Hooks/savedHook';
import Footer from '.././Components/Footer'


export default function RootLayout() {
    // const [mobileOpen, setMobileOpen] = useState(false);
    const {selectAProduct}=useAxios('https://makeup-api.herokuapp.com/api/v1/products.json')
    const { cartDrawer, openDrawer, mobileOpen, setMobileOpen, setCartDrawer } = SavedHook()


    const CartState = useContext(AppContext);
    const state = CartState.state

    // to show changing cart amount at shopping cart icon
    const quantityOnly = state.map(item => item.quantity)
    console.log(quantityOnly);
    const totalCartQuantity = quantityOnly.reduce(function (accumulator, currValue) {
        return accumulator + currValue;
    }, 0)
    console.log(totalCartQuantity);

    const openDropdown = () => {
        setMobileOpen(!mobileOpen);
    }

    const menu = [
        {
            name: 'Home', link: '/',
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
        },
        {
            name: 'About', link: '/about', icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
        },
        {
            name: 'Shop', link: '/shop', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        }
    ]


    return (
        <div className='navbar'>
            <div className='jumbotron h-14 flex justify-between'>
                <div className='py-2 px-2 md:pl-8 lg:pl-12'>
                    <NavLink to='/'>
                        ShopIt
                    </NavLink>
                </div>

                <nav className='largeMenuCentre hidden justify-center w-full inline-block lg:flex lg:w-auto lg:order-1 md:flex md:w-auto md:order-1'>
                    <ul className='navOptions flex'>
                        <div className='flex'>
                            {
                                menu.map((menuItem) => {
                                    return (
                                        <li className='block py-2 pl-3 pr-4' onClick={() => setCartDrawer(false)}>
                                            <NavLink to={menuItem.link}>{menuItem.name}
                                            </NavLink>

                                        </li>
                                    )
                                })
                            }
                        </div>
                    </ul>
                </nav>
                <nav className='hidden justify-end w-full lg:flex lg:w-auto lg:order-1  md:flex md:w-auto md:order-1' >
                    <ul>
                        <div className='flex pl-5 '>
                            <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='findIcon' onClick={() => setCartDrawer(false)}>
                                
                                <NavLink to='/shop'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </NavLink>
                            </li>
                            <li className='block py-2 pl-3 pr-4 rightSideNavbar' id='saveIcon' onClick={() => setCartDrawer(false)}>
                                <NavLink to='/saved'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                </NavLink >
                            </li>
                            <li className='block py-2 pl-3 pr-4 rightSideNavbar flex flex-row justify-end' id='shopIcon' onClick={openDrawer}>
                                <div className='relative'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    {totalCartQuantity <= 0 ? <span className='cartNothing'></span> : <span className='cartQuantityBadge'>{totalCartQuantity}</span>}
                                </div>
                                {cartDrawer ?
                                    <div className='mt-6'>
                                        <CartPopUp />
                                    </div>
                                    : null
                                }
                            </li>
                        </div>
                    </ul>
                </nav>
                <div className='mobileBarIcon flex flex-row lg:hidden md:hidden sm:block pt-2 pr-3' >
                    <div>
                        <ul>
                            <li className='block  pl-3 pr-4 rightSideNavbar flex flex-row justify-end' id='shopIcon' onClick={openDrawer}>
                                <div className='relative'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3 relative">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    {totalCartQuantity <= 0 ? <span className='cartNothing'></span> : <span className='cartQuantityBadgeMobile'>{totalCartQuantity}</span>}
                                </div>
                                {cartDrawer ?
                                    <div className='mt-6'>
                                        <CartPopUp />
                                    </div>
                                    : null
                                }

                            </li>
                        </ul>
                    </div>
                    <div onClick={openDropdown}>
                        <FontAwesomeIcon className='mobileMenuBars' icon={faBars} size="xl" />
                    </div>
                </div>
            </div>



            <div className='flex justify-end'>

                {mobileOpen ?
                    <ul className='navOptionsMobile flex flex-col w-52 text-right lg:hidden md:hidden'>
                        {
                            menu.map((menuItem) => {
                                return (
                                    <li className='block py-2 pl-3 pr-4 ' onClick={() => setMobileOpen(false)}>
                                        <NavLink className='flex flex-row justify-end' to={menuItem.link}>{menuItem.name}
                                            <span className='ml-3'>{menuItem.icon}</span>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }

                        <li className='block py-2 pl-3 pr-4 rightSideNavbar ' id='findIcon'>
                            <NavLink to='/shop' className='flex flex-row justify-end' onClick={() => setMobileOpen(false)}>
                                Search
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className='block py-2 pl-3 pr-4 rightSideNavbar ' id='saveIcon'>
                            <NavLink to='/saved' className='flex flex-row justify-end' onClick={() => setMobileOpen(false)}>
                                Favourites
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                    : null
                }
            </div>
            <main className='pageContainer'>
                    <Outlet />                
                <div className='contentWrapper'>
                </div>
            </main>
            <footer className='appFooter'>
                <Footer onButton={selectAProduct}/>
            </footer>
        </div>
    )
}
