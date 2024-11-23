import React from 'react'
import Link from 'next/link'

type LogoProps = {
    minimal?: true,
    size?: 'lg' | 'xl',
    className?: any
    
}

const Logo = ({minimal, size, className}: LogoProps) => {

    return (
        <Link href="/" className={`${className} flex flex-row items-center gap-2`}>
            <img className={size ? size === 'lg' ? 'w-12' : size === 'xl' ? 'w-14': 'w-8' : 'w-8'} src='/logo-blue.png'/>
            {!minimal && <span className='hidden lg:block font-semibold text-base md:text-lg lg:text-xl'>ScholarVine</span>}
        </Link>
    )
}

export default Logo