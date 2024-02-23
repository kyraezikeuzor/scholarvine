'use client'
import React, {useState, useEffect} from 'react'
import { Opportunity } from '@/types';

import Icon from '@/components/Icon'
import ReadMore from '@/components/ReadMore'

import OPPORTUNITIES from '@/lib/opps.json'


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
      }, [params.oppId]); // Update whenever oppName parameter changes
    

    return (
        <main className='px-[5vw] py-[10vh] flex flex-col'> 
            <h1 className='text-3xl md:text-4xl lg:text-5xl'>{opp?.Name}</h1>
            <div>
                {opp?.Company}
                {opp?.Location}
                
                <span>
                    {opp?.Tags.map((item,index)=>(
                        item
                    ))}
                </span>
            </div>
            <p>{opp?.Description}</p>
        </main>
    )
}

export default OppPage