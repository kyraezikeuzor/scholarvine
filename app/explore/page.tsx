import React from 'react'
import ExplorePage from './ExplorePage'
import SearchBar from '@/components/SearchBar'

export default function Explore(){

    return (
        <main className="flex flex-col items-center gap-5 py-[2vh] ">
            <header className='px-[3vw] w-full flex flex-row items-center justify-center gap-5 '>
                <h1 className='font-bold tracking-tight text-2xl'> </h1>
                
                <div className='w-full md:w-1/2'>
                    <SearchBar/>
                </div>
                
            </header>
            
            <ExplorePage/>
        </main>
    )
}