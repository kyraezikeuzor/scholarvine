'use client'
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import styles from './Footer.module.css'

import Icon from './Icon'
import Logo from './Logo'

import footerData from '@/assets/footer.json';
import {getPath} from '@/utils/utils';

function Footer() {

  const pathname = usePathname()

  let showFooter = true;
  pathname.includes('/explore') || pathname.includes('/categories') || pathname.includes('/home') ? showFooter = false : showFooter = true;


  return (
    <div className={`${showFooter == false ? 'hidden' : 'flex'} px-[5vw] py-[12vh] flex-col gap-8`}>
      <Logo/>
      <div className={styles.footer}>
        <div className='flex flex-row gap-4 justify-between'>
          {footerData.map((item,index) => (
            <div key={index} className='flex flex-col gap-1'>
              <h6 className='text-base font-semibold'>{item.name}</h6>
              <ul className='flex flex-col gap-2'>
                {item.pages.map((page,index)=> (
                  <li  key={index}> <Link  href={getPath(page)}>{page}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col justify-self-end'>
          <span className='text-sm'>© 2024 All rights reserved.</span>
          <span className='text-sm'>Built with ❤️ by fellow highschoolers</span>
          
          <div className='hidden flex flex-row gap-1 '>
            <Link target="_blank" href="d" className=''> 
                <Icon  icon="Facebook"/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="Instagram"/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="YouTube"/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="LinkedIn"/>
            </Link>
            <Link target="_blank" href="http://instagram.com/computefutures" > 
                <Icon icon="Twitter"/>
            </Link>
            
          </div>
        </div>

      </div>
      <span className='text-sm mt-[5vh]'>The all-in-one platform for digital products, communities, software, and more.</span>
    </div>
  );
};

export default Footer;