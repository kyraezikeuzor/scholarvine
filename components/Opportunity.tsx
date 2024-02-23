'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { User } from '@/types';

import Icon from '@/components/Icon'
import ReadMore from '@/components/ReadMore'

import { 
    OPPORTUNITY_CATEGORIES, 
    OPPORTUNITY_LOCATIONS, 
    OPPORTUNITY_TYPES, 
    OPPORTUNITY_EDUCATION_LEVELS 
} from '@/lib/labels'

import USERS from '@/lib/users.json'

type OpportunityProps = {
    Id:number;
    UserId:number;
    Name:string;
    Company: string;
    Description:string;
    Type: "Internship" | "Program" | "Scholarship" | "Competition" | "Award" | "Fellowship" | "Club";
    Location: typeof OPPORTUNITY_LOCATIONS[number][];
    Deadline: Date | null;
    EducationLevel: typeof OPPORTUNITY_EDUCATION_LEVELS[number][];
    GradeLevel: number[];
    Tags: typeof OPPORTUNITY_CATEGORIES[number][];
    Saved: boolean;
}

const Opportunity = ({Id,UserId,Name,Company,Description,Type,Location,Deadline,EducationLevel,GradeLevel,Tags,Saved}:OpportunityProps) => {

    const [save, setSave] = useState(false)
    const handleSave = () => {
        setSave(!save)
    }

    const [user,setUser] = useState<User | null>(null)
    useEffect(()=>{
        const matchedUser = USERS.find(item => item.Id === UserId);

        if (matchedUser) {
            setUser(matchedUser)
        }

    },[USERS])


    return (
        <div className='relative flex flex-row gap-5 items-center px-4 py-4 border-2 border-[--clr-base-accent] rounded-xl '>
                            
            <Icon onClick={handleSave} 
            icon={save ? "BookmarkFilled" : "Bookmark"} 
            className='absolute top-3 right-3 cursor-pointer'
            />
            
            <div className='w-full flex flex-col gap-2'>
                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-base font-medium items-center leading-5 hover:text-[--clr-blue-base] '>
                            <Link href={`/explore/o/${Id+1}`}>{Name}</Link>
                        </h2> 
                        <span className='flex flex-row gap-1 items-center'>
                            <img className='w-4 h-4 rounded-full' src={user?.Picture}/>
                            <span className='text-xs font-medium'>
                                Posted by <Link href={`/explore/u/${user?.Username}`}><b>@{user?.Username}</b></Link>
                            </span>
                        </span>
                    </div>
                </div> 
                
                <span className='w-full text-xs md:text-xs flex items-center  '>
                    <ReadMore text={Description} charCount={75} noButton/>
                </span>
                
                <span className='w-full flex flex-row flex-wrap items-center gap-[5px]'>

                    <span className='text-xs font-medium border border-[--clr-base-accent] 
                    px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'>
                        🌐 {Company}
                    </span>
                    
                    {Location.map((item,index)=>(
                        <span className='flex flex-row text-xs text-[--clr-] font-medium border border-[--clr-base-accent] 
                        px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'>
                            🗺️ {item}
                        </span>
                    ))}

                    {EducationLevel.map((item,index)=>(
                        <span className='flex flex-row text-xs  font-medium border border-[--clr-base-accent] 
                        px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'>
                            🏫 {item}
                        </span>
                    ))}

                    {GradeLevel.map((item,index)=>(
                        <span className='flex flex-row text-xs  font-medium border border-[--clr-base-accent] 
                        px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'>
                            {item}
                        </span>
                    ))}
                
                    {Tags.map((item,index)=>(
                        <span className='flex flex-row text-xs  font-medium border border-[--clr-base-accent] 
                        px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'>
                            <p className='text-[--clr-blue-base]'>#</p>
                            {item}
                        </span>
                    ))}
                    
                </span>
                    
            </div>
            
        </div>
    )
}

export default Opportunity;