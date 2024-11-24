'use client'
import React, { useEffect, useState } from 'react';
import OpportunityComponent from '@/components/Opportunity'

import OPPORTUNITIES from '@/lib/opps.json'

import { Opportunity } from '@/types'

type SavedOpportunity = {
    id: string,
    saved: string;
}

export default function SubmitProgramPage() {
    const [savedOpportunities, setSavedOpportunities] = useState<Opportunity[] | any[]>([])

    // Retrieve all saved opportunities from localStorage and set the save state
    useEffect(() => {
        const savedOpportunityList: {id:number}[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith("SCHOLARVINE_SAVED_OPPORTUNITY_")) {
                const data = window.localStorage.getItem(key);
                if (data === 'true') {
                    savedOpportunityList.push({
                        id: Number(key.split("_")[3]), // Assuming the Id is the last part of the key
                    });
                }
            }
        }

        for (let i = 0; i < savedOpportunityList.length; i++) {
            setSavedOpportunities((prevSavedOpportunities) => [
                ...prevSavedOpportunities,
                OPPORTUNITIES[savedOpportunityList[i].id],
            ]);
        }

        // Now you can do something with the savedOpportunities (e.g., display them)
        console.log(savedOpportunities);
    }, []);


    return (
        <section className='px-[5vw] py-[8vh]'>
            <div className='flex flex-col md:grid md:grid-cols-2 lg:md:grid-cols-3 4xl:grid-cols-6 gap-3'>
                {savedOpportunities.map((item,index)=>(
                    <OpportunityComponent
                    key={index}
                        Id={item.Id}
                        UserId={item.UserId}
                        Name={item.Name}
                        Company={item.Company}
                        Description={item.Description}
                        Type={item.Type}
                        Location={item.Location}
                        ApplicationDeadline={item.ApplicationDeadline}
                        EducationLevel={item.EducationLevel}
                        GradeLevel={item.GradeLevel}
                        Tags={item.Tags}
                    />
                ))}
            </div>
        </section>
    )
}