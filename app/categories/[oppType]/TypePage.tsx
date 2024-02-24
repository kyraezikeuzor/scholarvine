'use client'
import React, {useState, useEffect} from 'react'
import styles from './page.module.css'

import Accordion from '@/components/Accordion'
import Checkbox from '@/components/Checkbox'
import Icon from '@/components/Icon'
import Opportunity from '@/components/Opportunity'

import OPPORTUNITIES from '@/lib/opps.json'

import {
    OPPORTUNITY_CATEGORIES, 
    OPPORTUNITY_CATEGORIES_GROUPED, 
    OPPORTUNITY_TYPES, 
    OPPORTUNITY_LOCATIONS, 
    OPPORTUNITY_LOCATIONS_GROUPED,
    OPPORTUNITY_EDUCATION_LEVELS
    } from '@/lib/labels'

import {capitalizeFirstLetter} from '@/utils/utils'


type PageProps = {
    params: {oppType: string}
}

const OppTypePage = ({params}:PageProps) => {

    const pageName = capitalizeFirstLetter(params.oppType).slice(0,-1)
    const allPageOpps = OPPORTUNITIES.filter(item => item.Type === capitalizeFirstLetter(params.oppType).slice(0,-1))
    const [pageOpps, setPageOpps] = useState(allPageOpps)
    
    const [filter, setFilter] = useState<{ name: string; list: string[] }[]>([
        { name: "Categories", list: [] },
        { name: "Education", list: [] },
        { name: "Locations", list: [] }
      ]);
    

    const handleAddItem = (item:string, listName:string) => {
        let listFilter = filter.find(item => item.name === listName);
        if (listFilter) {
            const updatedList = [...listFilter.list, item]
            setFilter(prevFilter => {
                let prevFilterArray = []
                for (let i = 0; i < prevFilter.length; i++) {
                    if (prevFilter[i].name === listName) {
                        prevFilterArray.push({"name":listName, "list":updatedList})

                    } else {
                        prevFilterArray.push(prevFilter[i])
                    }
                }
                return prevFilterArray;
            })
        }
    }

    const handleRemoveItem = (item:string,listName:string) => {
        let listFilter = filter.find(item => item.name === listName);

        if (listFilter) {
            let updatedList: any[] = [];
            for (let i = 0; i < listFilter.list.length; i++) {
                if (listFilter.list[i] !== item) {
                    updatedList.push(listFilter.list[i])
                }
            }     
            setFilter(prevFilter => {
                let prevFilterArray = []
                for (let i = 0; i < prevFilter.length; i++) {
                    if (prevFilter[i].name === listName) {
                        prevFilterArray.push({"name":listName, "list":updatedList})
                    } else {
                        prevFilterArray.push(prevFilter[i])
                    }
                }
                return prevFilterArray;
            });
        }
    }

    useEffect(()=>{
        console.log(filter)
        const selectedCategories = filter.find(item => item.name === "Categories");
        const selectedCategoriesList = selectedCategories?.list;

        if (selectedCategoriesList) {
            if (selectedCategoriesList.length != 0) {
                
                let newPageOpps = [];
                
                for (let i = 0; i < allPageOpps.length;i++) {
                    for (let j = 0; j < allPageOpps[i].Tags.length; j++) {
                        if (selectedCategoriesList.includes(allPageOpps[i].Tags[j])) {
                            newPageOpps.push(allPageOpps[i])
                        }
                    }
                }
                setPageOpps(newPageOpps)

            } else if (selectedCategoriesList.length == 0) {
                setPageOpps(allPageOpps)
            }
        }
    }, [filter])


    return (
        <main className={styles.main}>
            {/*FILTER*/} 
            <section className={styles.section}>
                <section className='relative'>
                    <section className='w-full px-2 md:w-1/5 md:fixed top-40 bottom-0 overflow-y-scroll flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-sm md:text-base'>Education</h2>
                            <div className='flex flex-col gap-1'>
                                {OPPORTUNITY_EDUCATION_LEVELS.map((item,index)=>(
                                    <Checkbox key={index}
                                    onCheckOn={() => handleAddItem(item,"Education")} 
                                    onCheckOff={() => handleRemoveItem(item, "Education")}>
                                        {item}
                                    </Checkbox>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-sm md:text-base'>Categories</h2>
                                    
                            <div> 
                            {filter.find(item => item.name === "Categories")?.list.map((item,index)=>(
                                <span key={index}>{item}</span>
                            ))}
                                <br/>
                                {filter.find(item => item.name === "Locations")?.list.map((item,index)=>(
                                <span key={index}>{item}</span>
                            ))}
                                <br/>
                            {filter.find(item => item.name === "Education")?.list.map((item,index)=>(
                                <span key={index}>{item}</span>
                            ))}
                            </div>
                
                            <div className='flex flex-col gap-1'>    
                                {OPPORTUNITY_CATEGORIES_GROUPED.map((item,index)=>(
                                    <div className='w-full md:w-full' key={index}>
                                        <Accordion
                                            head=
                                            {<div className='text-sm font-medium flex flex-row relative cursor-pointer'>
                                                {item.name}
                                            </div>}
                                            body=
                                            {<div className='ml-2'>
                                                {item.list.map((item,index)=>(
                                                    <Checkbox key={index}
                                                    onCheckOn={() => handleAddItem(item,"Categories")} 
                                                    onCheckOff={() => handleRemoveItem(item, "Categories")}>
                                                        {item}
                                                    </Checkbox>
                                                ))}
                                            </div>}
                                        />    
                                    </div>                
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-sm md:text-base'>Locations</h2>
                            <div className='flex flex-col gap-1'>
                                {OPPORTUNITY_LOCATIONS_GROUPED.map((item,index)=>(
                                    <Accordion key={index}
                                    head=
                                    {<div className='text-sm font-medium flex flex-row relative cursor-pointer'>
                                        {item.name}
                                    </div>}
                                    body=
                                    {<div className='ml-2'>
                                        {item.list.map((item,index)=>(
                                            <Checkbox key={index}
                                            onCheckOn={() => handleAddItem(item,"Locations")} 
                                            onCheckOff={() => handleRemoveItem(item, "Locations")}>
                                                {item}
                                            </Checkbox>
                                        ))}
                                    </div>}
                                />    
                                ))}
                            </div>
                        </div>
                    </section>
                </section>
                

                {/*DATABASE*/}
                <section className=' flex flex-col '>
                    <h1 className='text-3xl md:text-3xl lg:text-3xl mb-[2vh]'>
                        {pageName}s
                    </h1>
                    <section className='flex flex-col md:grid md:grid-cols-3 2xl:grid-cols-5 gap-3'>

                        {/*OPPORTUNITY*/}
                        {pageOpps.map((item,index)=>(
                            <Opportunity key={index}
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

                    </section>
                </section>

            </section>
    </main>
    )
}

export default OppTypePage;