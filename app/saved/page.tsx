import React from 'react';
import type { Metadata } from 'next'
import SavedOpportunities from '@/components/SavedOpportunities'

export const metadata: Metadata = {
    title: 'Submit to ScholarVine | Search dozens of opportunities',
    description: 'Use ScholarVine to search for dozens of activities and opportunities.',
  }
  

export default function SubmitProgramPage() {

    return (
        <main className='py-[2vh] mx-5 md:mx-[6vw] lg:my-[10vh]'>
            <header className='flex flex-col gap-2'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-center mt-[1vh] text-4xl md:text-6xl lg:text-5xl tracking-tight font-semibold'>
                        Your Saved Programs
                    </h1>
                    <p className='text-center text-sm md:text-lg text-[--clr-grey-dark]'>
                        View your saved programs, activities, and opportunities here.
                    </p>
                </div>
            </header>

            <SavedOpportunities/>
            
        </main>
    )
}