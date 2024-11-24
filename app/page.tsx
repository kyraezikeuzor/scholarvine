import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import SearchBar from '@/components/SearchBar'
import ReadMore from '@/components/ReadMore'
import Opportunity from '@/components/Opportunity'

import ExplorePage from '../components/ExplorePage'

import { OPPORTUNITY_CATEGORIES, OPPORTUNITY_CATEGORIES_GROUPED, OPPORTUNITY_TYPES } from '@/lib/labels'
import OPPORTUNITIES from '@/lib/opps.json'

export default function Home() {

  const categoriesObject = OPPORTUNITY_CATEGORIES;
  const categoriesLength = categoriesObject ? categoriesObject.length : 0;
  const typeObject = OPPORTUNITY_TYPES;
  const typeLength = typeObject ? typeObject.length : 0;


  return (
    <main className="flex flex-col items-center gap-3 mx-5 py-[5vh] md:mx-[5vw] ">

      <header className=' w-full py-[2vh] flex flex-col items-center gap-5'>

        <div className='flex flex-col items-center gap-3'>
          <span className=' text-sm md:text-base shadow-sm bg-[--clr-grey-light] text-[--clr-grey-dark] font-semibold rounded-3xl px-4 py-1'>
            Search & Save Programs
          </span>
          <h1 className='text-center mt-[1vh] text-4xl md:text-6xl lg:text-5xl tracking-tight font-semibold'>
            Supercharge your activity list <br className='hidden lg:block'/> with <span className=''>{OPPORTUNITIES.length}</span> academic opportunities
          </h1>
          <p className='text-center text-sm md:text-lg text-[--clr-grey-dark]'>
            Finding a new opportunity is one click away. Discover 100+ activities and programs today.
          </p>
        </div>

        <div className='hidden flex flex-row gap-3 items-center'>
          <Button path='/explore'>
            Get Started 
          </Button>
          <Button path='' outline>
              Browse resources
          </Button>
        </div>

        <div className='w-full flex flex-row items-center justify-center gap-5 '>
          <div className='w-full lg:w-1/2'>
              <SearchBar/>
          </div>
        </div>
      </header>

      <section className="w-full flex flex-col items-center gap-5 py-[2vh]">
          <ExplorePage/>
      </section>
      
    </main>
  )
}
