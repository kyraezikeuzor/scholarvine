import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Database from '@/components/Database'
import Link from 'next/link'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import SearchBar from '@/components/SearchBar'

import labels from '@/lib/labels.json'
import opps from '@/lib/opps.json'

export default function Home() {

  // Find the "Categories" object
  const categoriesObject = labels.find(item => item.name === 'Categories');

  // Get the length of the "list" array within "Categories"
  const categoriesLength = categoriesObject ? categoriesObject.list.length : 0;

  // Find the "Categories" object
  const typeObject = labels.find(item => item.name === 'Type');

  // Get the length of the "list" array within "Categories"
  const typeLength = typeObject ? typeObject.list.length : 0;




  return (
    <main className="flex flex-col gap-5">
      <header className='pt-[10vh] mx-[10vw] flex flex-col gap-5 items-center '>
        <span className=' border border-[--clr-base-accent] rounded-2xl box-border flex flex-row gap-1 flex-wrap font-medium bg-[--clr-base] py-1 px-4 text-sm md:text-base text-[--clr-grey-dark] text-center w-fit'>
        Now enhanced with <span>ScholarVine<span className='bg-gradient-to-r from-[#D16EDE] via-[#F3AAD8] to-[#FFB392] to-[#FFB83F] text-transparent bg-clip-text font-semibold'>+</span></span> <Icon className='inline-block' icon='ArrowTopRight' size='sm'/>
        </span>
        <h1 className='text-center text-5xl md:text-7xl lg:text-[92px] tracking-tighter'>Ace your next exam <br className='hidden md:block lg:block'/>with ScholarVine <span className='bg-gradient-to-r from-[#D16EDE] via-[#F3AAD8] to-[#FFB392] to-[#FFB83F] inline-block text-transparent bg-clip-text'></span></h1>
        <p className='text-center text-base md:text-lg lg:text-xl'>Search over <span className='text-[--clr-base-text] font-semibold'>{opps.length}+</span> opportunities in over <span className='text-[--clr-base-text] font-semibold'>{categoriesLength}+</span> categories.</p>
        {/*<div className='flex flex-row gap-5 justify-center items-center'>
          <Link className='font-medium' href='/signup'>Explore</Link>
          <Button>Signup</Button>
          </div>*/}
        <SearchBar/>
          
        
      </header>
      <section className='p-[2vw] mx-[5vw] text-center '>
        <h2 className='text-xl md:text-xl'>Loved by students at</h2>
        <div className='flex flex-row place-items-center w-full'>
          <img className='w-1/3' src='https://mrvian.com/wp-content/uploads/2022/09/logo-harvard-horizontal.png'/>
          <img className='w-1/3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Baylor_University_logo.svg/2560px-Baylor_University_logo.svg.png'/>
          <img className='w-1/3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/UT_Dallas_Wordmark_-_1_Line.svg/2560px-UT_Dallas_Wordmark_-_1_Line.svg.png'/>
        </div>
      </section>

      <section className='w-full px-[10vw] flex flex-col flex-wrap gap-5'>
        <span className='text-2xl font-semibold'>Explore ScholarVine</span>
        {opps.map((item,index) => (
        <div className='w-full flex flex-row gap-2 p-2 bg-[--clr-base-default] border border-[--clr-base-accent] rounded-xl'>
          <img className='w-10 h-auto' src={item.SRC}/>
          <div className='flex flex-col'>
            <span className='text-xl font-semibold'>{item.Name}</span>
            
            <span>{item.Company}</span>
            <span>{item.Location}</span>
          </div>
          
        </div>))}
      </section>



      <section className='mx-[10vw]'>
        <h2>Save to yor account</h2>
        <p>Baylor University Harvard University University of Texas at Dallas</p>
      </section>

      <section>
        Powerful database indexing features
      </section>
      <section>
        Frequently asked questions
      </section>
      
    </main>
  )
}
