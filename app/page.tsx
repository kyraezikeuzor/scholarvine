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
    <main className="flex flex-col items-center gap-5 py-[2vh] ">

      <header className='w-full px-5 md:px-[10vw] py-[2vh] flex flex-col items-center gap-5'>

        <div className='flex flex-col items-center gap-2 '>
          <span className='text-sm md:text-base text-[--clr-grey-dark] font-semibold rounded-3xl px-4 py-1'>
            Solving Food Waste One Meal At a Time
          </span>
          <h1 className='text-center text-5xl md:text-6xl lg:text-[75px] tracking-tight font-bold'>
          Tired of themes that <br className='hidden md:inline'/> don’t feel right?  <span className=''></span>
          </h1>
          <p className=' text-sm md:text-lg text-[--clr-grey-dark]'>
            EcoEats is a revolutionary app that connects charities with food.
          </p>
        </div>

        <div className='flex items-center w-full lg:w-2/5 justify-center'>
          <SearchBar/>
        </div>

      </header>

      
      <ExplorePage/>
      
      
    </main>
  )
}
