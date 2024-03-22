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
            
            <section className='flex flex-row items-center justify-between gap-5 w-full py-[2vh] px-[6vw]'>
                
                <ul className='w-1/3 flex flex-row items-center gap-16 '>
                    <li>
                        <Logo/>
                    </li>
                    <ul className='flex flex-row font-bold w-full gap-6 text-base text-[--clr-base-text]'>
                        <li>
                            <Link href='/explore' className={`flex flex-row gap-2 ${pathname === '/explore' ? 'text-[--clr-blue-base]' : ''}`}>
                                <Icon icon='Compass' size='sm' className={pathname === '/explore' ? 'fill-[--clr-blue-base]' : ''} />
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link href='/community' className={`flex flex-row gap-2 ${pathname === '/community' ? 'text-[--clr-blue-base]' : ''}`}>
                                <Icon icon='Location' size='sm' className={pathname === '/community' ? 'fill-[--clr-blue-base]' : ''} />
                                Community
                            </Link>
                        </li>
                    </ul>
                </ul>

                <ul className='w-1/3  flex flex-row items-center justify-end gap-8 '>

                    <ul className='hidden md:flex flex-row gap-2 items-center'>
                        <li>
                            <Button path='/create' >
                                Create <Icon icon="ArrowTopRight" className="fill-inherit" size="sm"/>
                            </Button>
                        </li>
                        <li>
                            <Theme/>
                        </li>
                    </ul>
                    
                </ul>
                

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