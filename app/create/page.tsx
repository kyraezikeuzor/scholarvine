import React from 'react';
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Submit to ScholarVine | Search dozens of opportunities',
    description: 'Use ScholarVine to search for hundreds of activities and opportunities.',
  }
  

export default function SubmitProgramPage() {

    return (
        <main className='px-[5vw] py-[8vh]'>
            <header className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl text-center'>Submit a Program 📬</h1>
                <p>Submit an internship, program, scholarship, fellowship to ScholarVine.</p>
            </header>
            
        </main>
    )
}