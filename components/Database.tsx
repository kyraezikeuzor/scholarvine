'use client'
import React, {useState} from 'react'
import opps from '@/lib/opps.json'
import labels from '@/lib/labels.json'

const Database = () => {
    const [showFilterList, setShowFilterList] = useState(false);
    const [filterListIndex, setFilterListIndex] = useState<number | null>(null)

    const handleShowFilterList = (index: number) => {
        setShowFilterList(!showFilterList);
        setFilterListIndex(index);
    }

    return(
        <div className='flex flex-col gap-5'>
            <div className='relative rounded-xl w-full flex flex-row items-center gap-2 flex-wrap'>
                <div className='flex flex-row items-center gap-2  px-4 py-[.1rem] border border-[--clr-base-accent] rounded-2xl'>
                    <input className='z-40 focus:outline-none focus:border-none border-transparent flex flex-col flex-wrap bg-transparent'/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill=""/>
                    </svg>
                </div>
                
                {labels.map((item,index)=>(
                    <div key={index} className='relative flex flex-col gap-2 items-center px-4 py-1 rounded-2xl border border-[--clr-base-accent]'>
                        <div onClick={()=>handleShowFilterList(index)} className='flex flex-row items-center gap-2 hover:cursor-pointer'>
                            <span className='text-sm md:text-sm'>{item.name} </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 18 11" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 0.292908L17.7071 1.70712L9.00001 10.4142L0.292908 1.70712L1.70712 0.292908L9.00001 7.5858L16.2929 0.292908Z" fill=""/>
                            </svg>
                        </div>
                        {showFilterList && filterListIndex==index &&  
                        <div className='z-40 absolute top-8 left-0 shadow-lg min-h-fit max-h-[50vh] min-w-fit overflow-y-auto flex flex-col gap-2 bg-[--clr-base-default] px-4 py-2 border border-[--clr-base-accent] rounded-xl'>
                            {item.list.map((item,index)=>(
                                <span key={index} className='flex flex-row  gap-1'>
                                    <input type='checkbox'/>
                                    <label>{item}</label>
                                </span>
                            ))}
                        </div>}
                    </div>
                ))}
                
            </div>
            <div className='w-full'>
                <div className='flex flex-col gap-2'>
                    {opps.map((item,index)=>(
                    <div key={index} className='border border-[--clr-base-accent] rounded-xl p-2 w-full flex flex-row items-center gap-2'>
                        <img src={item.SRC} className='rounded-full w-auto h-10'/>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm md:text-sm'>{item.Name}</span>
                            <div className='flex flex-row gap-2 '>
                                {item.Tags.map((tag,index)=>(
                                    <span key={index} className='border border-[--clr-base-accent] px-2 rounded-2xl text-xs'>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Database;