'use client'
import React from 'react'
import {useRouter } from 'next/navigation'
import labels from '@/lib/labels.json'
import {capitalizeFirstLetter} from '@/utils/utils'

import Database from '@/components/Database'

const oppTypes = labels.find(item => item.name === 'Type');

type PageParamsProps = {
    params: {oppType: string}
}

const TypePage = ({params}:PageParamsProps) => {
    const router = useRouter()
    if (!oppTypes?.list.includes(capitalizeFirstLetter(params.oppType.slice(0, -1)))) {
        console.log(params.oppType + 's')
        router.push('/404')
    } 
    //add categories at the side

    return (
        <main className='px-[10vw] py-[8vh] flex flex-col gap-5'>
            <h1 className='text-xl md:text-2xl lg:text-4xl'>{capitalizeFirstLetter(params.oppType)}</h1>
            
        </main>
    )
}

export default TypePage