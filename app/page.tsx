import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import SearchBar from '@/components/SearchBar'
import ReadMore from '@/components/ReadMore'
import Opportunity from '@/components/Opportunity'

import ExplorePage from './explore/ExplorePage'

import { OPPORTUNITY_CATEGORIES, OPPORTUNITY_CATEGORIES_GROUPED, OPPORTUNITY_TYPES } from '@/lib/labels'
import OPPORTUNITIES from '@/lib/opps.json'

export default function Home() {

  const categoriesObject = OPPORTUNITY_CATEGORIES;
  const categoriesLength = categoriesObject ? categoriesObject.length : 0;
  const typeObject = OPPORTUNITY_TYPES;
  const typeLength = typeObject ? typeObject.length : 0;


  return (
    <main className="flex flex-col items-center gap-5 py-[5vh] ">

      <header className='py-[2vh] px-[5vw] flex flex-col gap-2 items-center'>

        <span className='w-fit border border-[--clr-blue-light] text-[--clr-blue-dark] 
        bg-[--clr-blue-light] rounded-2xl px-4 py-1 text-center font-medium text-base'>
            Submit a Program to Sprig <Icon icon="ArrowTopRight" size="sm" className="fill-[--clr-blue-dark]"/>
        </span>

        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-center text-6xl md:text-7xl lg:text-[92px] tracking-tighter'>
            Explore Sedge
          </h1>
          <p className='text-center text-lg md:text-xl text-[--clr-grey-dark]'>
            Sedge provides a database of 100s of opportunities
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-3 w-full md:w-3/5 items-center justify-center'>
          <div className='w-full md:w-5/6 '>
            <SearchBar/>
          </div>
          <div className='w-full md:w-fit '>
            <Button path='/explore'>Get Started</Button>
          </div>
        </div>

      </header>

      
      <ExplorePage/>
      
      
    </main>
  )
}
