'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Opportunity } from '@/types';
import { User } from '@/types';

import Icon from '@/components/Icon'
import ReadMore from '@/components/ReadMore'

import OPPORTUNITIES from '@/lib/opps.json'
import USERS from '@/lib/users.json'


type PageProps = {
    params: {oppId: string}
}

const OppPage = ({params}:PageProps) => {

    const [opp, setOpp] = useState<Opportunity | null>(null);

    useEffect(() => {
        // Find the opportunity matching the oppName parameter
        const matchedOpp = OPPORTUNITIES.find((opp,index) => params.oppId == (opp.Id+1).toString());
        
        // If a matching opportunity is found, set the opp state
        if (matchedOpp) {
          setOpp(matchedOpp);
        }
        
      }, [params.oppId]); 


    const [user,setUser] = useState<User | null>(null)
    useEffect(()=>{
        const matchedUser = USERS.find(item => item.Id == opp?.UserId);

        if (matchedUser) {
            setUser(matchedUser)
        }

    },[opp])
    

    return (
        <main className='md:px-[15vw] py-[10vh] flex flex-col'> 
            <h1 className='text-3xl md:text-4xl lg:text-5xl'>{opp?.Name}</h1>
            <div className='flex flex-row gap-1 items-center'>
                <img className='w-4 h-4 rounded-full' src={user?.Picture}/>
                <span className='text-xs font-medium hover:text-[--clr-grey-base]'>
                    Posted by <Link href={`/explore/u/${user?.Username}`}><b>@{user?.Username}</b></Link>
                </span>
            </div>
            <div className='flex flex-row gap-1'>
                <div className='flex flex-row gap-1'>
                    <span>{opp?.Company}</span>
                    <span>{opp?.Location}</span>
                </div>
                <span className='flex flex-row gap-1'>
                    {opp?.Tags.map((item,index)=>(
                        <span key={index}>{item}</span>
                    ))}
                </span>
            </div>
            <p>{opp?.Description}</p>
        </main>
    )
}

export default OppPage