'use client'
import React, {useState, useEffect} from 'react'
import Icon from './Icon'

type AccordionProps = {
    head: React.ReactNode;
    body: React.ReactNode;
}

const Accordion = ({head, body}:AccordionProps) => {

    const [click, setClick] = useState(true)

    const handleAccordionClick = () => {
        setClick(!click)
    }

    useEffect(()=>{
        const data = window.localStorage.getItem('SEDGE_APP_ACCORDION');
        if (data != null) setClick(JSON.parse(data))
    },[])


    useEffect(()=>{
        window.localStorage.setItem('SEDGE_APP_ACCORDION', JSON.stringify(click))
    }, [click])

    return (

        <div className='bg-[--clr-base] rounded-xl border-[3px] px-[10px] py-2 border-[--clr-base-accent]'>
            <div className='relative cursor-pointer' onClick={handleAccordionClick}>
                {head}
                <Icon className='absolute top-1 right-0' size='sm' icon={click ? 'ChevronLeft':'ChevronBottom'}/>
            </div>
            <div className={click == true ? 'hidden' : ''}>
                {body}
            </div>
        </div>
    )
}

export default Accordion;