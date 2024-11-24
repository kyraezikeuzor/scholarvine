'use client'
import React, {useState, useEffect} from 'react'
import { Opportunity } from '@/types';
import styles from './ExplorePage.module.css'

import Accordion from '@/components/Accordion'
import Checkbox from '@/components/Checkbox'
import Icon from '@/components/Icon'
import OpportunityComponent from '@/components/Opportunity'

import OPPORTUNITIES from '@/lib/opps.json'

import {
    OPPORTUNITY_CATEGORIES, 
    OPPORTUNITY_CATEGORIES_GROUPED, 
    OPPORTUNITY_TYPES, 
    OPPORTUNITY_LOCATIONS, 
    OPPORTUNITY_LOCATIONS_GROUPED,
    OPPORTUNITY_EDUCATION_LEVELS
    } from '@/lib/labels'


const ExplorePage = () => {

    const allPageOpps = OPPORTUNITIES
    const [pageOpps, setPageOpps] = useState(allPageOpps)
    
    const [filter, setFilter] = useState<{ name: string; list: string[] }[]>([
        { name: "Types", list: [] },
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

    // FILTER FUNCTIONALITY
    useEffect(()=>{
        console.log(filter)
        const selectedCategories = filter.find(item => item.name === "Categories");
        const selectedCategoriesList = selectedCategories?.list;

        const selectedTypes = filter.find(item => item.name === "Types");
        const selectedTypesList = selectedTypes?.list;

        const selectedEducation = filter.find(item => item.name === "Education");
        const selectedEducationList = selectedEducation?.list;

        const selectedLocations = filter.find(item => item.name === "Locations");
        const selectedLocationsList = selectedLocations?.list
        
        //const [newPageOpps, setNewPageOpps] = useState(allPageOpps)
        var newPageOpps: typeof allPageOpps = allPageOpps

        if (selectedTypesList?.length != 0) {
            newPageOpps = allPageOpps.filter(item => selectedTypesList?.includes(item.Type))
        } 

        if (newPageOpps) {
            if (selectedCategoriesList?.length != 0) {
                let array: typeof allPageOpps = [];

                for (let i = 0; i < newPageOpps.length; i++) {
                    for (let j = 0; j < newPageOpps[i].Tags.length; j++) {
                        if (selectedCategoriesList?.includes(newPageOpps[i].Tags[j])) {
                            array.push(newPageOpps[i])
                        }  
                    } ;
                }

                newPageOpps = array
            }
            
            if (selectedEducationList?.length != 0) {
                let array: typeof allPageOpps = [];

                for (let i = 0; i < newPageOpps.length; i++) {
                    for (let j = 0; j < newPageOpps[i].EducationLevel.length; j++) {
                        if (selectedEducationList?.includes(newPageOpps[i].EducationLevel[j])) {
                            array.push(newPageOpps[i])
                        }  
                    } ;
                }

                newPageOpps = array
            }

            if (selectedLocationsList?.length != 0) {
                let array: typeof allPageOpps = [];

                for (let i = 0; i < newPageOpps.length; i++) {
                    for (let j = 0; j < newPageOpps[i].Location.length; j++) {
                        if (selectedLocationsList?.includes(newPageOpps[i].Location[j])) {
                            array.push(newPageOpps[i])
                        }  
                    } ;
                }

                newPageOpps = array
            }
        }

        console.log(newPageOpps)
        setPageOpps(newPageOpps)

    }, [filter, allPageOpps])


    // RESPONSIVENESS FUNCTIONALITY
    const [subfilters, setSubfilters] = useState<string[] | null>(null)

    useEffect(()=>{
        let subfilterArray = []
        for (let i = 0; i < filter.length; i++) {
            subfilterArray.push(filter[i].name)
        }
        setSubfilters(subfilterArray)
    },[filter])

    const [openMobileSubfilter, setOpenMobileSubfilter] = useState(false)
    const [mobileSubfilterIndex, setMobileSubfilterIndex] = useState<number | null>(null)
    const [mobileSubfilterName, setMobileSubfilterName] = useState('')

    const handleMobileSubfilter = (index:number) => {
        setOpenMobileSubfilter(!openMobileSubfilter)
        setMobileSubfilterIndex(index)
        setMobileSubfilterName(filter[index].name)
    }

    const handleClearFilterModals = () => {
        
    }

    return (
        <section className={styles.main} onClick={handleClearFilterModals}>

            {/*TYPE SELECTION & DATABASE*/}
            <section className='w-full sticky flex flex-col gap-5'>

                {/*MOBILE FILTER NAVBAR*/}
                <div className='flex flex-wrap items-center gap-1 md:hidden 
                sticky top-[16vh] right-0 left-0 md:relative md:top-0
                py-2 z-40 shadow-sm backdrop-blur bg-[--clr-base]/50 md:shadow-none '>

                    {subfilters?.map((item,index)=>(
                        <div key={index} className='relative'>
                            <span className='flex flex-row gap-1 items-center text-sm font-medium 
                            rounded-2xl border border-[--clr-grey-base] px-3 py-[2px]'
                            onClick={()=>handleMobileSubfilter(index)}>
                                <span>{item}</span>
                                <Icon icon="ChevronBottom" size="sm"/>
                            </span >
                            {openMobileSubfilter && mobileSubfilterIndex==index && 
                            <div className='fixed flex flex-col gap-1  z-50'>

                                {OPPORTUNITY_CATEGORIES_GROUPED.map((item,index)=>(
                                    <Accordion key={index}
                                        head=
                                        {<div className='text-sm font-medium flex flex-row relative cursor-pointer'>
                                            {item.name}
                                        </div>}
                                        body=
                                        {<div className='ml-2'>
                                            {item.list.map((item,index)=>(
                                                <Checkbox key={index}
                                                onCheckOn={() => handleAddItem(item,mobileSubfilterName)} 
                                                onCheckOff={() => handleRemoveItem(item, mobileSubfilterName)}>
                                                    {item}
                                                </Checkbox>
                                            ))}
                                        </div>}
                                    />                    
                                ))}

                            </div>}
                        </div>
                    ))}
                </div>


                {/*DESKTOP & MOBILE OPPORTUNITY TYPE CHECKBOX SELECTORS*/}
                <div className='flex flex-col md:flex-row gap-2 justify-between'>
                    <div className='flex flex-wrap w-fit  items-center gap-2 '>
                        {OPPORTUNITY_TYPES.map((item,index)=>(
                            <Checkbox key={index} rounded 
                            onCheckOn={()=> handleAddItem(item,'Types')}
                            onCheckOff={()=> handleRemoveItem(item,'Types')}
                            >
                                {item}
                            </Checkbox>
                        ))}
                    </div>

                    <div className='md:mt-0 text-sm text-right font-medium'>
                        {pageOpps.length} {`Search Result${pageOpps.length != 1 ? 's' : ''}`}
                    </div>
                </div>


                {/*DATABASE*/}
                <section className='flex flex-col md:grid md:grid-cols-2 lg:md:grid-cols-3 4xl:grid-cols-6 gap-3'>

                    {/*OPPORTUNITY*/}
                    {pageOpps.map((item,index)=>(
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
                </section>

            </section>

            {/*FILTER*/}
            <section className='hidden md:flex sticky flex-col gap-5 w-full max-h-[80vh] top-[16vh] right-[3vw] overflow-y-auto'>

                <div className='flex flex-col gap-1'>
                    <h2 className='text-sm md:text-base'>Categories</h2>
        
                    <div className='flex flex-col gap-1'>    
                        {OPPORTUNITY_CATEGORIES_GROUPED.map((item,index)=>(
                            <Accordion key={index}
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
                        ))}
                    </div>
                </div>

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
    )
}

export default ExplorePage;