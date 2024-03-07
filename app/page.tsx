import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Icon from '@/components/Icon'
import SearchBar from '@/components/SearchBar'
import ReadMore from '@/components/ReadMore'
import Opportunity from '@/components/Opportunity'

import { OPPORTUNITY_CATEGORIES, OPPORTUNITY_CATEGORIES_GROUPED, OPPORTUNITY_TYPES } from '@/lib/labels'
import OPPORTUNITIES from '@/lib/opps.json'

export default function Home() {

  const categoriesObject = OPPORTUNITY_CATEGORIES;
  const categoriesLength = categoriesObject ? categoriesObject.length : 0;
  const typeObject = OPPORTUNITY_TYPES;
  const typeLength = typeObject ? typeObject.length : 0;


  return (
    <main className="flex flex-col items-center gap-5">
      <header className='py-[8vh] px-[8vw] flex flex-col gap-5 items-center'>

        <span className='w-fit border border-[--clr-grey-base] rounded-2xl px-6 py-1 text-center font-medium text-sm'>
            Submit a Program to Sprig 🡪
        </span>

        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-center text-4xl md:text-5xl lg:text-5xl tracking-tighter'>
            Join the team behind the fastest-growing extracurricular database in the world.
          </h1>
          <p className='text-center text-lg'>Entrepreneurial communities and software to help you earn online.</p>
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

      

      <section className='w-full py-[4vh] px-[3vw] flex flex-col gap-[40px]'>
        
        <section className='flex flex-col gap-2'>

          <section className='flex flex-col md:grid grid-cols-4 gap-2'>
            {OPPORTUNITIES.map((item,index) => (
              <Opportunity key={index}
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
        

      </section>
      
      
    </main>
  )
}
