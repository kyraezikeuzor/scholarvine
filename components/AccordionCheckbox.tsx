'use client'
import React, {useState, useEffect} from 'react'
import Icon from './Icon'
import Checkbox from './Checkbox'

type AccordionProps = {
    head: string;
    body: string[];
    onCheckOnItem: any;
    onCheckOffItem: any;
}

interface checkItemType {
    itemIndex: number;
    check: boolean;
}

const Accordion = ({head, body, onCheckOnItem, onCheckOffItem}:AccordionProps) => {
    
    const [clickAll, setClickAll] = useState(false)

    const [checkItem, setCheckItem] = useState<checkItemType>({itemIndex: -1, check: false});
    const [prevCheckItem, setPrevCheckItem] = useState<checkItemType>({itemIndex: -1, check: false});

    const [checklist, setChecklist] = useState(() => {
        let itemArray = [];
        for (let i = 0; i < body.length; i++) {
            itemArray.push(false)
        }
        return itemArray;
    })


    const handleAccordionClick = () => {
        setClickAll(!clickAll)
    }

    useEffect(()=>{
        if (clickAll == true) {
            let checklistArray = []
            for (let i = 0; i < checklist.length;i++) {
                checklistArray.push(true)
            }
            setChecklist(checklistArray)
        }

    }, [clickAll])

    const handleAccordionItemClick = (index:number) => {
        setPrevCheckItem({itemIndex: index, check: checklist[index]})
        setCheckItem({itemIndex: index, check: !checklist[index]})

        setChecklist(prevChecklist => {
            let checklistArray = [];
            for (let i = 0; i < prevChecklist.length; i++) {
                if (index == i) {
                    checklistArray.push(!checklist[index])
                } else {
                    checklistArray.push(checklist[i])
                }
            }
            return checklistArray;
        })

        // Check conditions and call appropriate functions
        if (!checkItem.itemIndex && prevCheckItem.itemIndex) {
            onCheckOffItem();
          } else if (checkItem.itemIndex && !prevCheckItem.itemIndex) {
            onCheckOnItem();
          }

    }

    // FUNCTIONALITY FOR CHECK ITEM
    /*useEffect(() => {
        // Check conditions and call appropriate functions
        if (!checkItem.itemIndex && prevCheckItem.itemIndex) {
          onCheckOffItem();
        } else if (checkItem.itemIndex && !prevCheckItem.itemIndex) {
          onCheckOnItem();
        }
      }, [checkItem, prevCheckItem]);
    */

    return (
        <div className='w-5/6 text-sm'>
            
            <div className='relative flex flex-row justify-between hover:bg-[--clr-grey-light]' >
                <div onClick={handleAccordionClick} className='flex flex-row gap-2 items-center px-1 cursor-pointer '>
                    <div className={`h-3 w-3 rounded-sm flex flex-col items-center ${clickAll ? 'bg-[--clr-base-text]' : 'border border-[--clr-grey-base]'}`}>
                        <Icon icon="Check" color="white"/>
                    </div>
                    {head}
                </div>
                <Icon className='absolute top-1 right-0' size='sm' icon="ChevronBottom"/>
            </div>
            <div className='ml-2'>
                {body.map((item,index)=>(
                    <div className='flex flex-row gap-2 items-center px-1 cursor-pointer '
                    onClick={()=>{handleAccordionItemClick(index)}}>
                        <div className={`h-3 w-3 rounded-sm flex flex-col items-center ${clickAll || checklist[index] ? 'bg-[--clr-base-text]' : 'border border-[--clr-grey-base]'}`}>
                            <Icon icon="Check" color="white"/>
                        </div>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion;