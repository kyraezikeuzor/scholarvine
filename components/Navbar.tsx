'use client'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Logo from './Logo'
import Button from './Button'
import Theme from './Theme'
import Icon from './Icon'

import opps from '@/lib/opps.json'
import labels from '@/lib/labels.json'
const oppTypes = labels.find(item => item.name === 'Type');

const Navbar = () => {
    const pathname = usePathname()

    let showNavbar = true;
    pathname === '/signup' || pathname === '/login' ? showNavbar = false : true;

    let showLoginSignup = true
    let showUserButtons = false
    pathname === '/home'? showLoginSignup = false : showLoginSignup = true
    pathname === '/home' ? showUserButtons = true : showUserButtons = false


    const [openMobileNav, setOpenMobileNav] = useState(false);
    const handleMobileNavState = () => {
        setOpenMobileNav(!openMobileNav);
    }

    const [openNotifModal, setOpenNotifModal] = useState(false);
    const handleNotifModalState = () => {
        setOpenNotifModal(!openNotifModal);
        if (openSettingsBar == true) {
            setOpenSettingsBar(false)
        }
    }

    const [openSettingsBar, setOpenSettingsBar] = useState(false);
    const handleSettingsBarState = () => {
        setOpenSettingsBar(!openSettingsBar);
        if (openNotifModal == true) {
            setOpenNotifModal(false)
        }
    }

    const [searchQuery, setSearchQuery] = useState('')
    const searchResults = [];
    for (let i = 0; i < opps.length; i++) {
        if (searchQuery && opps[i].Name.toLowerCase().includes(searchQuery.toLowerCase())) {
            searchResults.push(opps[i].Name)
        }
    }

    // Storing data in localStorage
localStorage.setItem('username', searchQuery);

// Retrieving data from localStorage
var username = localStorage.getItem('username');

    return (
        <>
       {showNavbar && <nav className='z-50 sticky top-0 flex flex-col items-center justify-between shadow-sm backdrop-blur bg-[--clr-base]/50 border-b border-[--clr-base-accent] '> 
            
            <nav className='z-50 sticky top-0 flex flex-row items-center gap-5 w-full justify-between py-2 px-[5vw] border-b border-[--clr-base-accent]'>
                <Logo/>

{username}

                {/*DESKTOP NAVBAR*/}
                <ul className='hidden md:flex flex-row gap-5 w-full items-center justify-center text-base'>
                    <li className='font-medium'><Link href='/home'>Home</Link></li>
                    <li className='font-medium'><Link href='/explore'>Inbox</Link></li>
                    <li className='font-medium'><Link href='/explore'>Explore</Link></li>
                    
                    <li className='w-1/2 relative'>
                        <span className='flex flex-row items-center gap-2 bg-[--clr-base-accent] px-4 py-[.1rem]  rounded-2xl'>
                            <input onChange={(e) => setSearchQuery(e.target.value)} className='w-full focus:outline-none focus:border-none border-transparent bg-transparent text-sm placeholder:text-sm placeholder:text-[--clr-grey-base] placeholder:font-medium' type='text' placeholder=''/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill=""/>
                            </svg>
                        </span>

                        {searchResults.length != 0 && <div className='absolute top-8 left-0 right-0 bg-[--clr-base] text-sm shadow-lg p-2 flex flex-col gap-1 rounded-lg border border-[--clr-base-accent]'>
                            {searchResults.map((item,index)=> (
                                <div key={index} className=''>
                                    {item}
                                </div>
                            ))}
                        </div>}

                    </li>
                </ul>


                {showUserButtons && 
                <ul className='hidden md:flex flex-row w-30 items-center  relative'>
                    <li onClick={handleNotifModalState}>
                        <Icon icon="Bell" button={true} size='lg' />
                    </li>
                    <li>
                        <Theme/>
                    </li>
                    
                    <li onClick={handleSettingsBarState}>
                        <img  className='w-12 h-auto cursor-pointer box-content p-[2px] rounded-full' src='https://media.licdn.com/dms/image/C5603AQFcuRiwtxIlUg/profile-displayphoto-shrink_200_200/0/1625173224889?e=1711584000&v=beta&t=imAugpf7WkuGBo1wOHNYyju_hMA8-Z7gMdkLycSk3jE'/>
                    </li>
                    {openNotifModal && 
                    <div className='absolute top-10 right-20 shadow-lg bg-[--clr-base] border border-[--clr-base-accent] w-60 flex flex-col gap-4 text-sm rounded-2xl'>
                        <div className='px-3 py-2'>
                            New Notification
                        </div>
                    </div>
                    }
                    
                    {/* DESKTOP SETTINGS BAR */}
                    {openSettingsBar && 
                    <div className='absolute top-10 right-0 shadow-lg bg-[--clr-base] border border-[--clr-base-accent] w-60 flex flex-col gap-4 text-sm rounded-2xl'>
                        <div className='border-b border-[--clr-base-accent] p-3'>
                            <div className='flex flex-row items-center gap-2 w-full'>
                                <img onClick={handleSettingsBarState} className='w-8 h-auto cursor-pointer rounded-full' src='https://media.licdn.com/dms/image/C5603AQFcuRiwtxIlUg/profile-displayphoto-shrink_200_200/0/1625173224889?e=1711584000&v=beta&t=imAugpf7WkuGBo1wOHNYyju_hMA8-Z7gMdkLycSk3jE'/>
                                <div className='flex flex-col'>
                                    <span className='text-sm font-medium leading-4'>Chetachi Ezikeuzor</span>
                                    <span className='text-sm text-[--clr-grey-dark]'>@chetachie</span>
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col items-center'>
                            
                            <Link href='/settings' className='cursor-pointer w-full px-3 py-2 hover:bg-[--clr-base-accent]'>
                                <span className='w-fit flex flex-row gap-1 items-start text-sm font-medium'>
                                    <Icon icon="Settings" size='sm'/>
                                    Edit Profile
                                </span>
                            </Link>
                            <Link href='/settings'  className='cursor-pointer w-full px-3 py-2 hover:bg-[--clr-base-accent]'>
                                <span className='w-fit flex flex-row gap-1 items-start text-sm font-medium'>
                                    <Icon icon="Bell" size='sm'/>
                                    Notifications
                                </span>
                            </Link>
                            <Link href='/settings' className='cursor-pointer w-full px-3 py-2 hover:bg-[--clr-base-accent]'>
                                <span className='w-fit flex flex-row gap-1 items-start text-sm font-medium'>
                                    <Icon icon="Settings" size='sm'/>
                                    Settings
                                </span>
                            </Link>
                            
                        </div>
                        <span className='bg-[--clr-base-accent] h-[1px] w-full'></span>
                        <div className='px-3 pb-3 flex flex-row items-start gap-2'>
                            <Button>
                                Logout
                            </Button>
                        </div> 
                    </div>
                    }

                </ul>}

                {showLoginSignup && 
                <ul className='hidden md:flex flex-row gap-2 items-center'>
                    <Button path='/signup'>
                        Signup
                    </Button>
                    <Button path='/login'>
                        Login
                    </Button>
                    <li>
                        <Theme/>
                    </li>
                </ul>}
                
                
                {/*MOBILE NAVBAR*/}
                <ul className='md:hidden flex flex-row items-center flex flex-row gap-2'>
                    <li>
                        <Theme/>
                    </li>
                    <li>
                        <Icon icon="HamburgerMenu" onClick={handleMobileNavState}/>
                    </li>
                </ul>

                {/*MOBILE NAVBAR*/}
                {openMobileNav && 
                <nav className='md:hidden fixed top-2 left-2 right-2  bg-[--clr-base] border border-[--clr-base-accent] shadow-md rounded-xl'>
                    <div className='w-full h-auto relative flex flex-col gap-2 p-4 rounded-xl'>
                        <ul className='mt-12 flex flex-col' onClick={handleMobileNavState}>
                            <li onClick={handleMobileNavState} className='inline-block border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light] rounded-lg '>
                                <Link href='/home'>Home</Link>
                            </li>
                            <li onClick={handleMobileNavState} className='border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light] rounded-lg '>
                                <Link href='/explore'>Explore</Link>
                            </li>

                            {showUserButtons && 
                            <ul>
                                <li onClick={handleMobileNavState} className='border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light] rounded-lg'>
                                    <Link href='/explore'>Account Settings</Link>
                                </li>
                                <li onClick={handleMobileNavState} className='mt-10 border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light] rounded-lg'>
                                    <Button path='/login'>Logout</Button>
                                </li>
                            </ul>
                            }
                        </ul>
        
                        <Logo className='absolute top-2 left-4'/>
                        <Icon icon='XCircle' onClick={handleMobileNavState} className='absolute top-2 right-4'/>
                    </div>
                </nav>}
            </nav>

            {/*SUB NAVBAR*/}
            <nav className='flex flex-row items-center w-full py-2 px-[5vw]'>
                <ul className='overflow-x-auto w-full flex flex-row gap-5'>
                    {oppTypes && oppTypes.list.map((item,index)=>(
                        <li key={index} className='text-sm font-medium'><Link href={`/explore/${item.toLowerCase()}s`}>{item}s</Link></li>
                    ))}
                </ul>
            </nav>
        </nav>}
        </>
 
    )
}

export default Navbar;