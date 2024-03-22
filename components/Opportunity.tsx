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
    Type: string;
    Location: string[];
    ApplicationDeadline: Date | null;
    EducationLevel: string[];
    GradeLevel: number[];
    Tags: string[];
}

const Opportunity = ({Id,UserId,Name,Company,Description,Type,Location,ApplicationDeadline,EducationLevel,GradeLevel,Tags}:OpportunityProps) => {

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


    useEffect(()=>{
        const data = window.localStorage.getItem('SEDGE_APP_OPPORTUNITY_SAVED');
        if (data != null) setSave(JSON.parse(data))
    },[])


    useEffect(()=>{
        window.localStorage.setItem('SEDGE_APP_OPPORTUNITY_SAVED', JSON.stringify(save))
    }, [save])


    return (
        <div className='relative flex flex-row gap-2 items-center px-4 py-4 border-[3px] border-[--clr-base-accent] rounded-xl bg-[--clr-base]'>
                            
            <Icon onClick={handleSave} 
            icon={save ? "BookmarkFilled" : "Bookmark"} 
            className='absolute top-3 right-3 cursor-pointer'
            />
            
            <div className='w-full flex flex-col gap-1'>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-[15px] font-medium items-center leading-5 hover:text-[--clr-grey-base] mr-[24px]'>
                        <Link  href={`/explore/o/${Id+1}`}>
                            <span className='mr-2 font-semibold'>
                                {Name}
                            </span>
                            <span className='inline-block text-[11px] font-medium border border-[--clr-base-accent] 
                                px-[8px] py-[1px] rounded-xl bg-transparent'>
                            {Type === 'Internship' ? '🌱' : Type === 'Program' ? '🌻' : Type === 'Scholarship' ? '💲' 
                            : Type === 'Competition' ? '🧩' : Type === 'Fellowship' ? '🛠️' :
                            Type === 'Club' ? '🌎' : ''} {Type}
                            </span>
                        </Link> 
                        
                    </h2> 
                    <span className='hidden flex flex-row gap-1 items-center'>
                        <img className='w-4 h-4 rounded-full' src={user?.Picture}/>
                        <span className='cursor-pointer text-xs font-medium hover:text-[--clr-grey-base]'>
                            Posted by <Link href={`/explore/u/${user?.Username}`}><b>@{user?.Username}</b></Link>
                        </span>
                    </span>
                </div>
                
                <span className='w-full text-xs md:text-xs flex items-center  '>
                    <ReadMore text={Description} charCount={50} noButton/>
                </span>
                
                <span className='w-full flex flex-row flex-wrap items-center gap-[5px]'>

                    <span className='flex flex-row items-center text-[11px] font-medium border border-[--clr-base-accent] 
                    px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'>
                        🌐 {Company}
                    </span>
                    
                    {Location.map((item,index)=>(
                        <span className='flex flex-row items-center text-[11px] text-[--clr-] font-medium border 
                        border-[--clr-base-accent] px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'
                        key={index}>
                            🗺️ {item}
                        </span>
                    ))}

                    {EducationLevel.map((item,index)=>(
                        <span className='flex flex-row items-center text-[11px] font-medium border 
                        border-[--clr-base-accent] px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'
                        key={index}>
                            🏫 {item}
                        </span>
                    ))}

                    {GradeLevel.map((item,index)=>(
                        <span className='flex flex-row items-center text-[11px] font-medium border 
                        border-[--clr-base-accent] px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'
                        key={index}>
                            {item}
                        </span>
                    ))}
                
                    {Tags.map((item,index)=>(
                        <span className='flex flex-row items-center text-[11px]  font-medium border 
                        border-[--clr-base-accent] px-[8px] py-[2px] rounded-xl bg-[--clr-grey-light]'
                        key={index}>
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