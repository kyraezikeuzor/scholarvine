'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import Logo from './Logo'



const Auth = () => {

    const pathname = usePathname()
    
    return (
        <section className='w-full h-[100vh] flex flex-col items-center'>
        <form className='w-[350px] md:w-[400px] my-auto border border-[--clr-base-accent] rounded-xl p-8 shadow-sm flex flex-col gap-3 items-center'>
            <Logo minimal={true} className='w-12'/>
            <h1 className='my-5 text-xl md:text-xl lg:text-[26px] text-center'>{pathname === '/signup' ? 'Sign up for' : 'Log in to'} Ambit</h1>

            <label className='text-sm md:text-sm font-medium self-start'>Email</label>
            <input 
            type='email' 
            placeholder='johndoe@scholarvine.com' 
            className='w-full py-2 px-4 rounded-lg placeholder:text-sm'/>
            
            <label className='text-sm md:text-sm font-medium self-start'>Password</label>
            <input 
            type='password' 
            placeholder='Apples123' 
            className='w-full py-2 px-4 rounded-lg placeholder:text-sm'/>
            
            {pathname === '/signup' && 
            <>
                <label className='text-sm md:text-sm font-medium self-start'>Confirm Password</label>
                <input 
                type='password'
                placeholder='Apples123'
                className='w-full py-2 px-4 rounded-lg placeholder:text-sm' 
                /> 
            </>}

            <button className='mt-10 w-full bg-[--clr-blue-base] p-2 rounded-xl text-white font-medium'>{pathname === '/signup' ? 'Sign up' : 'Log in'}</button>
        
            <p className='text-xs md:text-sm font-medium'>{pathname === '/signup' ? 'Already have an account' : 'New to Ambit'}? <Link href={pathname === '/signup' ? '/login' : '/signup'} className='text-[--clr-blue-base]'>Sign {pathname === 'signup' ? 'in' : 'up'}</Link></p>
        </form>
        </section>

    )
}

export default Auth