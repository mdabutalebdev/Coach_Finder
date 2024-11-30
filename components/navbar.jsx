import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image'
import Logo from "../app/assets/logo.png"
import { Input } from './ui/input'
import Button from './shared/button'

const Navbar = () => {
  return (
     <section className='bg-white shadow'>
         <div className="container flex justify-between py-5">
         <div className="w-[25%]">
               <Image
               src={Logo}
               alt='Logo'
               
               
               />
         </div>
         <div className="w-[548px] ">
           <div className="relative">
           <Input  placeholder="Search" className="py-6 pl-14"/>
           <CiSearch className='h-[22px] w-[22px] absolute top-[14px] left-6 cursor-pointer text-[#BDBDBD]'/>
           </div>
          <div className="flex-1 hidden lg:block ml-10 py-5">
            <ul className="flex lg:gap-8 md:gap-6 items-center">
              <li>
                <a href="#" className="text-primaryColor text-base font-medium ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-primaryColor text-base font-medium ">
                Peer Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-primaryColor text-base font-medium ">
                Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-primaryColor text-base font-medium ">
                About us
                </a>
              </li>
              <li>
                <a href="#" className="text-primaryColor text-base font-medium ">
                Contact Us
                </a>
              </li>
            </ul>
          </div>
         </div>
           <div className="w-[25%]">
           <Button className='mr-3 text-white'>
            Browse All
            </Button>
            <Button className='!bg-transparent !text-primaryColor'>
             Login
            </Button>
           </div>
         </div>
     </section>
  )
}

export default Navbar