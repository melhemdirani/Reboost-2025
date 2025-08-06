'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export const NavigationSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items data for easy mapping
  const navigationItems = [
    { id: 1, label: 'Home', width: '131px', link: '' },
    { id: 2, label: 'About', width: '93px', link: '/about' },
    { id: 3, label: 'Portfolio', width: '142px', link: '/portfolio' },
    { id: 4, label: 'Services', width: '142px', link: '/services' },
    // { id: 5, label: 'Blog', width: '93px', link: '/blog' },
    { id: 6, label: 'Case Studies', width: '142px', link: '/case-studies' },
  ];

  return (
    <header className='sticky top-0 w-full z-50'>
      <div className='h-[106px] sm:bg-[#00000033] bg-[black] backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)] border-b border-[#1d1d20]'>
        <div className='relative h-full max-w-[1440px] mx-auto'>
          <div className='flex items-center justify-between h-full px-4 md:px-[60px]'>
            <div className='h-[46px] relative'>
              <Link href='/'>
                <img
                  className=' h-[50px] mt-[5px] object-contain cursor-pointer'
                  alt='Logo'
                  src='/reboost.png'
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className='hidden md:block mx-auto'>
              <NavigationMenuList className='flex space-x-0'>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      href={item.link}
                      className={`block ${item.width} h-[58px] rounded-xl overflow-hidden`}
                    >
                      <div className='h-full flex items-center justify-center mx-[20px]'>
                        <span className="font-['Instrument_Sans',Helvetica]  text-[#ffffff] text-[17px] leading-[25.5px]">
                          {item.label}
                        </span>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  key='mobile-nav'
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className='md:hidden absolute top-[106px] left-0 right-0 bg-black flex flex-col items-center py-4 border-b border-[#1d1d20] z-40'
                >
                  {navigationItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      onClick={() => setIsMenuOpen(false)}
                      className='py-3 px-4 w-full text-center text-[white] '
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href='/contact'>
                    <Button className='h-[40px] sm:w-[150px] w-[100px]  mx-4 mt-4 rounded-[29px] bg-white text-black hover:bg-white/90'>
                      <span className="font-['Instrument_Sans',Helvetica]  text-[14px] leading-[25.5px]">
                        Contact Us
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Button */}
            <Link href='/contact'>
              <Button className='hidden md:flex h-[38px] w-[126px] rounded-[29px] bg-white text-black hover:bg-white/90'>
                <span className="font-['Instrument_Sans',Helvetica]  text-[17px] leading-[25.5px]">
                  Contact Us
                </span>
              </Button>
            </Link>
            {/* Mobile menu button */}
            <button
              className='md:hidden p-2'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle menu'
            >
              <motion.svg
                className='w-6 h-6 text-white'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                initial={false}
              >
                <motion.line
                  x1='4'
                  y1='6'
                  x2='20'
                  y2='6'
                  animate={
                    isMenuOpen
                      ? {
                          x1: 6,
                          y1: 18,
                          x2: 18,
                          y2: 6,
                          transition: { duration: 0.22 },
                        }
                      : {
                          x1: 4,
                          y1: 6,
                          x2: 20,
                          y2: 6,
                          transition: { duration: 0.22 },
                        }
                  }
                />
                <motion.line
                  x1='4'
                  y1='12'
                  x2='20'
                  y2='12'
                  animate={
                    isMenuOpen
                      ? { opacity: 0, transition: { duration: 0.18 } }
                      : { opacity: 1, transition: { duration: 0.18 } }
                  }
                />
                <motion.line
                  x1='4'
                  y1='18'
                  x2='20'
                  y2='18'
                  animate={
                    isMenuOpen
                      ? {
                          x1: 6,
                          y1: 6,
                          x2: 18,
                          y2: 18,
                          transition: { duration: 0.22 },
                        }
                      : {
                          x1: 4,
                          y1: 18,
                          x2: 20,
                          y2: 18,
                          transition: { duration: 0.22 },
                        }
                  }
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
