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
         <div className="w-[558px] ">
           <div className="relative">
           <Input  placeholder="Search" className="py-6 pl-14"/>
           <CiSearch className='h-[22px] w-[22px] absolute top-[14px] left-6 cursor-pointer text-[#BDBDBD]'/>
           </div>
          <div className="flex-1 hidden lg:block  py-5">
            <ul className="flex lg:gap-8 md:gap-6 items-center">
              <li className=''>
                <a href="#" className="text-[rgba(13,13,14,0.6)]  text-base font-medium px-3 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
                Peer Groups
                </a>
              </li>
              <li>  
                <a href="#" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
                Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
                About us
                </a>
              </li>
              <li>
                <a href="#" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
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