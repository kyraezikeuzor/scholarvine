'use client'
import React, {useState, useEffect} from 'react'
import { User } from '@/types';
import { Opportunity } from '@/types';

import Icon from '@/components/Icon'
import OpportunityComponent from '@/components/Opportunity'

import OPPORTUNITIES from '@/lib/opps.json'
import USERS from '@/lib/users.json'
import {handleViewChange} from '@/utils/utils'

type PageProps = {
    params: {username: string}
}

const UserPage = ({params}:PageProps) => {

    const [user,setUser] = useState<User | null>(null)
    const [savedOpps, setSavedOpps] = useState<Opportunity[] | null>(null)
    const [postedOpps, setPostedOpps] = useState<Opportunity[] | null>(null)
    const [viewComponent, setViewComponent] = useState<{name:string, component:React.ReactNode} | null >(null)


    useEffect(()=>{
        const matchedUser = USERS.find(item => item.Username === params.username);
        if (matchedUser) {
            setUser(matchedUser)
        }
    },[])

    useEffect(()=>{
        if (user) {
            let savedOppsArray = [];
            for (let i = 0; i < user?.SavedOpps?.length; i++) {  
                savedOppsArray.push(OPPORTUNITIES[user?.SavedOpps[i]])
            }
            setSavedOpps(savedOppsArray)
        } 
    },[user])

    useEffect(()=>{
        if (user) {
            let postedOppsArray = [];
            for (let i = 0; i < user?.PostedOpps?.length; i++) {  
                postedOppsArray.push(OPPORTUNITIES[user?.PostedOpps[i]])
            }
            setPostedOpps(postedOppsArray)
        } 
    },[user])

    const views = [
        {
            "name":"Saves",
            "component": 
            <div className='flex flex-col gap-2'>
                {savedOpps?.map((item,index)=>(
                    <OpportunityComponent key={index}
                    ApplicationDeadline={null}
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
            </div>
        },
        {
            "name":"Posts",
            "component": 
            <div className='flex flex-col gap-2'>
                {postedOpps?.map((item,index)=>(
                    <OpportunityComponent key={index}
                    ApplicationDeadline={null}
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
            </div>
        }
    ]

    // Set the initial view to be the first component in the views array
    if (!viewComponent && savedOpps && postedOpps) {
        setViewComponent(views[0])
    }
    

    return (
        <main className='md:px-[15vw] px-[2vw] py-[4vh] flex flex-col gap-5 '>
            <img src={user?.Picture} className='self-center w-1/3 md:w-[6vw] h-auto rounded-full'></img>
            <h1 className='text-3xl md:text-4xl text-center'>{user?.FirstName} {user?.LastName}</h1>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-3 items-center font-semibold text-sm md:text-base'>
                    {views.map((item,index)=>(
                        <span key={index}
                        className={viewComponent?.name === item.name ? 'text-[--clr-blue-base] border-b-2 border-[--clr-blue-base]' : 'cursor-pointer'}
                        onClick={()=>handleViewChange(item.name,setViewComponent,views)}>
                            {item.name}
                        </span>
                    ))}
                </div>

                <div className='bg-[--clr-grey-light] w-full h-[2px]'/>
            </div>

            <section className='flex flex-col gap-2'>
                <h2 className='text-xl'>Opportunities</h2>
                {viewComponent?.component}
            </section>
        </main>
    )

}

export default UserPage;