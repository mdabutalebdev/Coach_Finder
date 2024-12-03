import React from 'react'
import Button from './shared/button'
import { SlArrowRight } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
const Header = () => {
  return (
     <section className='bg-BgColor bg-headerBg bg-cover bg-center bg-no-repeat py-32'>
        <div className="h-[44px] w-[433px] bg-white rounded-[70px] mx-auto">
             <div className="flex">
                <Button className='bg-[#007BD3] !rounded-[60px] drop-shadow h-[44px]'>
                    Just Join!
                </Button>
                <p className='text-center pt-3 pl-3'>30 new Groups in this Month</p>
                <SlArrowRight className='ml-7 mt-4'/>
             </div>
             
        </div>
        <div className="container">
                <h1 className='font-extrabold text-[72px]  text-primaryColor text-center'>Discover The <span className='text-BtnColor'>Perfect Peer Group</span> for your Professional Growth</h1>
                <p className='w-[777px] mx-auto text-center leading-[150%] font-medium text-base text-primaryColor'>Ambitious professionals around the world utilize coaching to reach the next level of their Business skills. Tired of figuring out Business on your own?</p>
                <div className="flex gap-x-5 justify-center mt-10">
                   <div className="relative">
                   <Button className='!px-14 text-left'>
                    Find Your Group 
                    </Button>
                    <GoArrowRight className='absolute top-2 right-5 text-white h-7 w-6'/>
                   </div>
                    <Button className='bg-transparent !text-primaryColor'>
                    Browse All
                   </Button>
                </div>
        </div>
     </section>
  )
}

export default Header