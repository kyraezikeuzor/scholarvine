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

    return (

        <div className='rounded-xl border-2 px-[10px] py-2 border-[--clr-base-accent]'>
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