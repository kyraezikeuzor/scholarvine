'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Icon from './Icon'

import opps from '@/lib/opps.json'

export default function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('')
    const searchResults = [];
    
    for (let i = 0; i < opps.length; i++) {
        if (searchQuery && opps[i].Name.toLowerCase().includes(searchQuery.toLowerCase())) {
            searchResults.push(opps[i].Name)
        }
    }

    return (
        <div className='w-full flex flex-row items-center justify-between relative'>
            
            <span className='w-full flex flex-row items-center px-2 py-2 gap-4 px-6 border-[3px] border-[--clr-base-accent] rounded-full shadow-sm'>
                <input onChange={(e) => setSearchQuery(e.target.value)} className='w-full py-1 focus:outline-none border-none bg-transparent text-base placeholder:text-base placeholder:text-[--clr-grey-dark] placeholder:font-medium' type='text' placeholder={`Search`}/>
                <Icon icon="Search" button={true} className='fill-[--clr-grey-base]' />
            </span>


            {/*SEARCH RESULTS MODAL*/}
            {searchResults.length != 0 && 
            <div className='z-40 w-full absolute top-12 left-0 right-0 p-2 bg-[--clr-base] text-sm shadow-lg  flex flex-col gap-1 rounded-lg border border-[--clr-base-accent]'>
                {searchResults.map((item,index)=> (
                    <Link key={index} href={`/explore/o/1`} className=' relative flex flex-row w-full border-b border-[--clr-grey-light] py-1'> 
                        <span className='ml-2'>{item}</span>
                        <Icon icon='Search' size='sm' button={true} className='fill-[--clr-grey-dark] absolute right-2'/>
                    </Link>
                ))}
            </div>}
                    
        </div>
)
}