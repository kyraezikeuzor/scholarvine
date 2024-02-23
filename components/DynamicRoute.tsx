'use client'
import React, {useState, useEffect} from 'react'
import {useRouter, usePathname} from 'next/navigation'


const DynamicRoute = ({routeItem, list, children}: {routeItem:any, list:Array<any>, children:React.ReactNode}) => {
    const router = useRouter();
    const [pageName, setPageName] = useState('')

    if (list.includes(routeItem)) { 
        return (
            <>
                {children}
            </>
        )
    } else {
        router.push('/404')
    }


    return <></>


    
}

export default DynamicRoute