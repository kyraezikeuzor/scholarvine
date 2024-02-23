'use client'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Logo from './Logo'
import Button from './Button'
import Theme from './Theme'
import Icon from './Icon'

import opps from '@/lib/opps.json'
import { OPPORTUNITY_TYPES } from '@/lib/labels'

import {getPath} from '@/utils/utils'

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

    
    
    return (
        <nav className={`${showNavbar == true ? 'flex' : 'hidden'} z-50 sticky top-0 flex-col items-center shadow-sm backdrop-blur bg-[--clr-base]/50 border-b border-[--clr-base-accent]`}> 
            <nav className='flex flex-row items-center justify-between gap-5 w-full py-[2.5vh] px-[5vw] border-b border-[--clr-base-accent]'>
                <ul className='w-4/5 flex flex-row items-center gap-8'>
                    <Logo/>

                    {/*DESKTOP NAVBAR*/}
                    <ul className='w-2/5 hidden md:flex flex-row gap-5 items-center justify-center text-base'>
                        
                        {/*SEARCH BAR*/}
                        <li className='w-full relative '>
                            <span className='flex flex-row items-center gap-4 bg-transparent  px-6 border-2 border-[--clr-base-accent] rounded-lg'>
                                <input onChange={(e) => setSearchQuery(e.target.value)} className='w-full py-2 focus:outline-none border-none bg-transparent text-sm placeholder:text-sm placeholder:text-[--clr-grey-dark] placeholder:font-medium' type='text' placeholder={`Search 'internships'`}/>
                                <div className='h-10 w-[1px] bg-[--clr-base-accent]'/>
                                <Icon icon="Search" button={true}/>
                            </span>

                            {searchResults.length != 0 && 
                            <div className='absolute top-12 left-0 right-0 bg-[--clr-base] text-sm shadow-lg p-2 flex flex-col gap-1 rounded-lg border border-[--clr-base-accent]'>
                                {searchResults.map((item,index)=> (
                                    <div key={index} className=''>
                                        {item}
                                    </div>
                                ))}
                            </div>}
                        </li>

                    </ul>
                    {/*NAVBAR PAGES*/}
                    <ul className='w-full md:w-1/3 flex flex-row gap-4'>
                        <li className='hidden md:block text-sm font-medium'>
                            <Link href='/explore'>Explore</Link>
                        </li>
                        <li className='hidden md:block text-sm font-medium'>
                            <Link href='/submit-a-program'>Submit a Program</Link>
                        </li>
                    </ul>
                </ul>


                {/*LOGIN & SIGNUP BUTTONS*/}
                {showLoginSignup && 
                <ul className='hidden md:flex flex-row gap-2 w-fit-content items-center'>
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

                {/*USER NAVIGATION PANEL*/}
                {showUserButtons && 
                <ul className='hidden md:flex flex-row gap-[2px] w-fit-content items-center relative'>
                    <li onClick={handleNotifModalState}>
                        <Icon icon="Bell" button={true} size='lg' />
                    </li>
                    <li>
                        <Theme/>
                    </li>
                    <li onClick={handleSettingsBarState} className='flex flex-row'>
                        <img className='w-auto h-8 cursor-pointer box-content p-[2px] rounded-full' src='https://media.licdn.com/dms/image/C5603AQFcuRiwtxIlUg/profile-displayphoto-shrink_200_200/0/1625173224889?e=1711584000&v=beta&t=imAugpf7WkuGBo1wOHNYyju_hMA8-Z7gMdkLycSk3jE'/>
                        <Icon icon='ChevronBottom' size='sm'/>
                    </li>

                    {/* DESKTOP NOTIFICATIONS BAR */}
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
                    {OPPORTUNITY_TYPES && OPPORTUNITY_TYPES.map((item,index)=>(
                        <li key={index} className={`${pathname === `/categories/${item.toLowerCase()}s` && 'border-b-2 border-[--clr-base-text]'} text-sm font-medium`}>
                            <Link href={`/categories/${item.toLowerCase()}s`}>
                                {item}s
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar;