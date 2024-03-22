'use client'
import React, {useState, useEffect} from 'react'
import Icon from './Icon'

type CheckboxProps = {
    onCheckOn?: any;
    onCheckOff?:any;
    children: React.ReactNode;
    rounded?: true;
}

const Checkbox = ({children, onCheckOn, onCheckOff,rounded}: CheckboxProps) => {

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
        <>
          {
            !rounded ?
            <div onClick={() => setClick(!click)} className='flex flex-row gap-2 items-center px-1 cursor-pointer hover:bg-[--clr-grey-light]'>
              <div className={`h-3 w-3 rounded-sm flex flex-col items-center ${click ? 'bg-[--clr-base-text]' : 'border border-[--clr-grey-base]'}`}>
                  <Icon icon="Check" className={`${click ? 'fill-[--clr-base]':'fill-[--clr-base-text]'}`}/>
              </div>
              <span className='text-sm'>{children}</span>
            </div>
          :
            <div onClick={() => setClick(!click)} className={`flex flex-row items-center gap-1 text-sm font-medium rounded-2xl px-3 py-[2px] 
            border-[3px] border-[--clr-base-accent] cursor-pointer ${click ? 'border-[--clr-blue-light] bg-[--clr-blue-light] text-[--clr-blue-dark]' : ''} `}>
              <span>
                {click ? '-' :  '+'}
              </span>
              <span>
                {children}
              </span>
            </div>
          }
        </>
    )
}

export default Checkbox;