import React from 'react';

import type { Metadata } from 'next'

import Button from '@/components/Button'
import TallyEmbed from '@/components/TallyEmbed'

export const metadata: Metadata = {
    title: 'Submit to ScholarVine | Search dozens of opportunities',
    description: 'Use ScholarVine to search for hundreds of activities and opportunities.',
  }
  

export default function SubmitProgramPage() {



    return (
        <main className='flex flex-col items-center px-[5vw] py-[10vh]'>
            <header className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-center'>Submit a Program 📬</h1>
                <p>Submit an internship, program, scholarship, or fellowship to ScholarVine.</p>
            </header>
            <section className='w-full lg:w-[550px]  flex flex-col justify-center align-center'>
                <TallyEmbed/>
            </section>

        </main>
    )
}