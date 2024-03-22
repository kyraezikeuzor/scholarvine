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
        <nav className={`${showNavbar == true ? 'flex' : 'hidden'} z-50 sticky top-0 flex-col items-center backdrop-blur bg-[--clr-base]/50 `}> 
            
            <section className='flex flex-row items-center justify-between gap-5 w-full py-[1.5vh] px-[3vw]'>

                <ul className='w-1/2 flex flex-row items-center gap-16 '>
                    <Logo/>
                    <ul className='flex flex-row font-semibold w-full gap-6 text-base text-[--clr-base-text]'>
                        <li>
                            <Link href='/explore' className={`flex flex-row gap-2 ${pathname === '/explore' ? 'text-[--clr-blue-base]' : ''}`}>
                                <Icon icon='Compass' size='sm' color={pathname === '/explore' ? '#6182FF' : ''} />
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link href='/community' className={`flex flex-row gap-2 ${pathname === '/community' ? 'text-[--clr-blue-base]' : ''}`}>
                                <Icon icon='Location' size='sm' color={pathname === '/community' ? '#6182FF' : ''} />
                                Community
                            </Link>
                        </li>
                    </ul>
                </ul>

                <ul className='w-1/2  flex flex-row items-center justify-end gap-8 '>
                    
                    {/*SEARCH BAR*/}
                    <li className='hidden w-full relative '>
                        <span className='flex flex-row items-center gap-4 bg-[--clr-grey-light] px-6 border-2 border-[--clr-base-accent] rounded-3xl'>
                            <input onChange={(e) => setSearchQuery(e.target.value)} className='w-full py-1 focus:outline-none border-none bg-transparent text-sm placeholder:text-sm placeholder:text-[--clr-grey-dark] placeholder:font-medium' type='text' placeholder={`Search 'internships'`}/>
                            <Icon icon="Search" button={true}/>
                        </span>
                        {/*SEARCH RESULTS MODAL*/}
                        {searchResults.length != 0 && 
                        <div className='w-full absolute top-12 left-0 right-0 p-2 bg-[--clr-base] text-sm shadow-lg  flex flex-col gap-1 rounded-lg border border-[--clr-base-accent]'>
                            {searchResults.map((item,index)=> (
                                <Link key={index} href={`/explore/o/1`} className='relative flex flex-row w-full border-b border-[--clr-grey-light] py-1'> 
                                    <span className='ml-2'>{item}</span>
                                    <Icon icon='Search' size='sm' button={true} className='absolute right-2'/>
                                </Link>
                            ))}
                        </div>}
                    </li>

                    {/*LOGIN & SIGNUP BUTTONS*/}
                    {showLoginSignup && 
                    <ul className='hidden md:flex flex-row gap-2 items-center'>
                        <Button path='/login' outline>
                            Login
                        </Button>
                        <Button path='/signup'>
                            Signup
                        </Button>
                    </ul>}

                    {/*USER NAVIGATION PANEL*/}
                    {showUserButtons && 
                    <ul className='hidden md:flex flex-row gap-[2px] w-fit-content items-center relative'>
                        <li onClick={handleNotifModalState}>
                            <Icon icon="Bell" button={true} size='lg' />
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
                        </div>}
                        {/*END OF NOTIFICATIONS PANEL*/} 
                        
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
                        </div>}

                    </ul>}
                    {/*END OF USER PANEL*/} 

                    <li>
                        <Theme/>
                    </li>
                </ul>
                {/* END OF DESKTOP NAVBAR VIEW/}
                

                {/*MOBILE NAVBAR RESPONSIVE CONTENT*/}
                <ul className='md:hidden flex flex-row items-center flex flex-row gap-2'>
                    <ul >
                        <li>
                            <Theme/>
                        </li>
                        <li>
                            <Icon icon="HamburgerMenu" onClick={handleMobileNavState}/>
                        </li>
                    </ul>

                    {/*MOBILE NAVBAR DROPDOWN*/}
                    {openMobileNav && 
                    <div className='md:hidden fixed top-2 left-2 right-2  bg-[--clr-base] border border-[--clr-base-accent] shadow-md rounded-xl'>
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
                    </div>}
                </ul>
                
            </section>
        </nav>
    )
}

export default Navbar;