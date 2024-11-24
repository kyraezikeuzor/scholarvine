'use client'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Logo from './Logo'
import Button from './Button'
import Theme from './Theme'
import Icon from './Icon'

import opps from '@/lib/opps.json'


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
        <nav className={`${showNavbar == true ? 'flex' : 'hidden'} z-50 sticky top-0 flex-col items-center backdrop-blur shadow-sm bg-[--clr-base]/50 border-b border-[--clr-base-accent] `}> 
            
            <section className='flex flex-row items-center justify-between gap-5 w-full py-2 md:py-[1vh] p-5 md:px-[5vw] '>
                
                <ul className='w-full flex flex-row items-center gap-16 '>
                    <li>
                        <Logo/>
                    </li>
                    <ul className='hidden md:flex flex-row font-semibold w-full gap-6 text-base text-[--clr-base-text]'>
                        <li>
                            <Link href='/saved' className={`flex flex-row gap-2 ${pathname === '/saved' ? 'text-[--clr-blue-base]' : ''}`}>
                                <Icon icon='Bookmark' size='sm' className={pathname === '/saved' ? 'fill-[--clr-blue-base]' : ''} />
                                Your Saved Programs
                            </Link>
                        </li>
                        <li>
                            <Link href='/learn-more' className={`flex flex-row gap-2 ${pathname === '/learn-more' ? 'text-[--clr-blue-base]' : ''}`}>
                                <Icon icon='Location' size='sm' className={pathname === '/learn-more' ? 'fill-[--clr-blue-base]' : ''} />
                                Learn More
                            </Link>
                        </li>
                    </ul>
                </ul>

                <ul className='w-1/3 hidden md:flex flex-row items-center justify-end gap-8 '>
                    <ul className='flex flex-row gap-2 items-center'>
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
                <ul className='md:hidden w-full flex flex-row items-center justify-end  gap-2'>
                    <li>
                        <Theme/>
                    </li>
                    <li>
                        <Icon icon="HamburgerMenu" className='cursor-pointer' size='lg' onClick={handleMobileNavState}/>
                    </li>

                    {/*MOBILE NAVBAR DROPDOWN*/}
                    {openMobileNav && 
                    <div className='md:hidden fixed top-2 left-2 right-2 bg-[--clr-base] border border-[--clr-base-accent] shadow-md rounded-xl'>
                        
                        <div className='w-full h-auto relative font-semibold flex flex-col gap-2 p-4 rounded-xl'>
                            <ul className='mt-12 flex flex-col' onClick={handleMobileNavState}>
                                <li onClick={handleMobileNavState} className='inline-block border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light]  cursor-pointer'>
                                    <Link href='/saved'>Your Saved Programs</Link>
                                </li>
                                <li onClick={handleMobileNavState} className='inline-block border-b border-[--clr-base-accent] py-2 hover:bg-[--clr-grey-light]  cursor-pointer'>
                                    <Link href='/learn-more'>Learn More</Link>
                                </li>
                            </ul>
                            <Logo className='absolute top-2 left-4'/>
                            <Icon icon='XCircle' size='lg' onClick={handleMobileNavState} className='absolute top-2 right-4 cursor-pointer'/>
                        </div>
                    </div>}
                </ul>
                
            </section>
        </nav>
    )
}

export default Navbar;