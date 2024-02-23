'use client'
import React, {useState, useEffect} from 'react'
import Icon from './Icon'

type CheckboxProps = {
    onCheckOn?: any;
    onCheckOff?:any;
    children: React.ReactNode;
}

const Checkbox = ({children, onCheckOn, onCheckOff}: CheckboxProps) => {

    const [click, setClick] = useState(false)
    const [prevClick, setPrevClick] = useState(false);

    useEffect(() => {
      // Update prevClick whenever click changes
      setPrevClick(click);
    }, [click]);

    useEffect(() => {
        // Check conditions and call appropriate functions
        if (!click && prevClick) {
          onCheckOff();
        } else if (click && !prevClick) {
          onCheckOn();
        }
      }, [click, prevClick]);

    return (
        <div onClick={() => setClick(!click)} className='flex flex-row gap-2 items-center px-1 cursor-pointer hover:bg-[--clr-grey-light]'>
            <div className={`h-3 w-3 rounded-sm flex flex-col items-center ${click ? 'bg-[--clr-base-text]' : 'border border-[--clr-grey-base]'}`}>
                <Icon icon="Check" color="white"/>
            </div>
            <span className='text-sm'>{children}</span>
            
        </div>
    )
}

export default Checkbox;