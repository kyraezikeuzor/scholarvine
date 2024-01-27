import React from 'react'
import styles from './page.module.css'
import {USER_CATEGORIES, USER_NAME} from '@/lib/user'
import Database from '@/components/Database'


export default function Home(){

    /*name
    categories
    grade level
    */

    return (
        <main className={styles.main}>
            {/*<section className='flex flex-col gap-2 rounded-xl p-6 border-2 border-[--clr-base-accent]'>
                <h1 className='text-lg md:text-xl lg:text-xl'>{USER_NAME}</h1>
                <p className='text-sm'>Head of Design @gumroad / FOunder @getdphg @donothingelse / past Dsign director @vimeo @pentagram @frodgesign @rg</p>
                
                <div className='flex flex-wrap gap-1'>
                    {USER_CATEGORIES.map((item,index)=>(
                        <span className='bg-[--clr-base-accent] text-xs md:text-sm rounded-2xl px-2 py-1 inline-block'>{item}</span>
                    ))}
                </div>
                

            </section>*/}

            <section className='flex flex-col gap-2'>
                <h1 className='text-xl md:text-2xl lg:text-4xl'>Bookmarks</h1>
                <Database/>
            </section>
        </main>
    )
}