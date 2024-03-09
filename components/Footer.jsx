'use client'
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import styles from './Footer.module.css'

import Icon from './Icon'
import Logo from './Logo'
import EmailForm from './EmailForm'

import footerData from '@/assets/footer.json';
import {getPath} from '@/utils/utils';

function Footer() {

  const pathname = usePathname()

  let showFooter = true;
  pathname.includes('/explore') || pathname.includes('/categories') || pathname.includes('/home') ? showFooter = false : showFooter = true;


  return (
    <footer className={`${showFooter == false ? 'hidden' : 'flex'} p-5 md:px-[10vw] py-[8vh] flex-col gap-8
    bg-[--clr-blue-dark] text-[--clr-cream-base]`}>
      
      <section className={styles.section}>

        <div className='flex flex-row gap-20 justify-start'>
          {footerData.map((item,index) => (
            <div key={index} className='flex flex-col gap-3'>
              <h3 className='text-2xl font-extrabold'>{item.name}</h3>
              <ul className='flex flex-col gap-3'>
                {item.pages.map((page,index)=> (
                  <li  key={index}> <Link  href={getPath(page)}>{page}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col justify-self-start'>
          <div className='flex flex-row gap-5 md:grid grid-cols-4 gap-2 fill-[--clr-cream-base]'>
            <Link target="_blank" href="d" className=''> 
                <Icon icon="Facebook" size='lg'/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="Instagram" size='lg'/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="YouTube" size='lg'/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="LinkedIn" size='lg'/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="Github" size='lg'/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="Twitter" size='lg'/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="Mail" size='lg'/>
            </Link>
          </div>
        </div>

        <EmailForm/>

      </section>
      <span className='text-sm mt-[5vh]'>The all-in-one platform for digital products, communities, software, and more.</span>

    </footer>
  );
};

export default Footer;