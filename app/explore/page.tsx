import React from 'react'

import SearchBar from '@/components/SearchBar'
import Opportunity from '@/components/Opportunity'
import {
    OPPORTUNITY_TYPES,
    OPPORTUNITY_CATEGORIES_GROUPED,
    OPPORTUNITY_CATEGORIES,
    OPPORTUNITY_LOCATIONS
}
from '@/lib/labels'
import OPPORTUNITIES from '@/lib/opps.json'

export default function Explore(){

    return (
        <main className='mx-[2vw] py-[2vh] md:mx-[15vw]'>
            <h1>Explore</h1>
            <SearchBar/>
            <section className='flex flex-col gap-1'>
                <h1 className='text-lg md:text-xl'>Categories</h1>
                <section className='grid grid-cols-4 gap-4'>
                    
                    {OPPORTUNITY_TYPES.map((item,index)=>(
                        <div className='flex flex-row items-center  p-4 font-semibold rounded-lg border-2 border-[--clr-base-accent]'>
                            {item}s
                        </div>
                    ))}
                </section>
                <section>
                    {OPPORTUNITIES.map((item,index)=>(
                        <Opportunity
                        Id={item.Id}
                        UserId={item.UserId}
                        Name={item.Name}
                        Description={item.Description}
                        Company={item.Company}
                        Type={item.Type}
                        EducationLevel={item.EducationLevel}
                        GradeLevel={item.GradeLevel}
                        Tags={item.Tags}
                        Location={item.Location}
                        />
                    ))}
                </section>
                <section className='flex flex-row flex-wrap gap-2'>
                    
                    {OPPORTUNITY_CATEGORIES.map((item,index)=>(
                        <div className='flex flex-row items-center p-1 bg-[--clr-grey-light] text-sm font-semibold rounded-lg border-2 border-[--clr-base-accent]'>
                            #{item}
                        </div>
                    ))}
                </section>
            </section>
            
            
        </main>
    )
}