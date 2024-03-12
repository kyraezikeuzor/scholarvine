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
        <div className='w-full relative'>
            
            <span className='flex flex-row items-center gap-4 bg-[--clr-grey-light] px-6 border-2 border-[--clr-base-accent] rounded-3xl'>
                <input onChange={(e) => setSearchQuery(e.target.value)} className='w-full py-1 focus:outline-none border-none bg-transparent text-sm placeholder:text-sm placeholder:text-[--clr-grey-dark] placeholder:font-medium' type='text' placeholder={`Search 'internships'`}/>
                <Icon icon="Search" button={true}/>
            </span>

            {/*SEARCH RESULTS MODAL*/}
            {searchResults.length != 0 && 
            <div className='z-40 w-full absolute top-12 left-0 right-0 p-2 bg-[--clr-base] text-sm shadow-lg  flex flex-col gap-1 rounded-lg border border-[--clr-base-accent]'>
                {searchResults.map((item,index)=> (
                    <Link key={index} href={`/explore/o/1`} className=' relative flex flex-row w-full border-b border-[--clr-grey-light] py-1'> 
                        <span className='ml-2'>{item}</span>
                        <Icon icon='Search' size='sm' button={true} className='absolute right-2'/>
                    </Link>
                ))}
            </div>}
                    
        </div>
)
}