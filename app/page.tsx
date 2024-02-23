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
    <main className="flex flex-col items-center gap-10">

      <header className='py-[8vh] px-[8vw] flex flex-col gap-8 items-center'>
        <span className='w-fit border border-[--clr-base-accent] rounded-2xl px-3 py-2 text-center font-medium text-sm'>
            Submit a Program to ScholarVine 🡪
        </span>
        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-center text-4xl md:text-5xl lg:text-6xl tracking-tighter'>
            Join the team behind the fastest-growing extracurricular database in the world.
          </h1>
          <p className='text-center text-lg'>Entrepreneurial communities and software to help you earn online.</p>
        </div>
        <div className='flex flex-row gap-1 w-full md:w-3/5 items-center justfy-items-center'>
          <div className='w-1/6'>
            <Button path='/explore'>Explore ➝</Button>
          </div>
          <div className='w-5/6'>
            <SearchBar/>
          </div>
        </div>
        
      </header>

      {/*<section className='p-[2vw] mx-[5vw] text-center '>
        <h2 className='text-base md:text-lg'>Loved by students at</h2>
        <div className='flex flex-row place-items-center justify-between w-full'>
          <img className='w-1/4' src='https://mrvian.com/wp-content/uploads/2022/09/logo-harvard-horizontal.png'/>
          <img className='w-1/4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Baylor_University_logo.svg/2560px-Baylor_University_logo.svg.png'/>
          <img className='w-1/4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/UT_Dallas_Wordmark_-_1_Line.svg/2560px-UT_Dallas_Wordmark_-_1_Line.svg.png'/>
        </div>
        </section>*/}

      <section className='w-full flex flex-row items-center justify-center gap-10 py-8 px-40 bg-[--clr-grey-light]'>
        <div className='flex flex-col items-center gap-[2px]'>
          <span className='text-xl md:text-2xl font-semibold'>123456789</span>
          <span>Total Purchased on Whop</span>
        </div>
        <div className='flex flex-col items-center gap-[2px]'>
          <span className='text-xl md:text-2xl font-semibold'>123456789</span>
          <span>Total Purchased on Whop</span>
        </div>
        <div className='flex flex-col items-center gap-[2px]'>
          <span className='text-xl md:text-2xl font-semibold'>123456789</span>
          <span>Total Purchased on Whop</span>
        </div>
      </section>

      <section className='w-full px-[4vw] flex flex-col flex-wrap gap-[40px]'>

        <section className='flex flex-col gap-2'>
          <div>
            <h2 className='text-xl md:text-2xl font-semibold'>Internships</h2>
            <p className='text-sm text-[--clr-grey-dark]'>Products currently in high demand.</p>
          </div>
          <section className='flex flex-col md:grid grid-cols-4 gap-3'>
            {OPPORTUNITIES.map((item,index) => (
              <Opportunity
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
        <section className='w-full flex flex-col gap-2'>
          <div>
            <h2 className='text-xl md:text-2xl font-semibold'>Explore the Database</h2>
          </div>

          <section className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {OPPORTUNITY_CATEGORIES_GROUPED.map((item,index)=>(
              <div className='flex flex-col gap-1 bg-[--clr-base] border border-[--clr-base-accent] p-3 py-4 md:p-8 text-center text-lg rounded-lg shadow-sm'>
                <h3 className='text-sm md:text-lg  font-semibold'>{item.name}</h3>
                <p className='text-xs md:text-sm'>{item.description}</p>
              </div>
            ))}
          </section>

        </section>

      </section>
      
      
    </main>
  )
}
