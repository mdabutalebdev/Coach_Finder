import React from 'react'
import FeturedCard from './shared/feturedCard'
import { FeturedData } from '@/app/data/Data'
import { Input } from './ui/input'
import { CiSearch } from "react-icons/ci";


const FeturedCategories = () => {
  return (
    <section className="py-20">
      <div className="container">
    <div className="flex justify-between">
    <h3 className='text-primaryColor font-extrabold text-[48px]'>Featured Categories</h3>
    <div className="relative">
    <Input placeholder="Search anything" className="w-[324px] h-[48px] pl-14"/>
  <CiSearch className='h-[22px] w-[22px] absolute top-[14px] left-6 cursor-pointer text-[#BDBDBD]'/>
    </div>
</div>
<p className='text-primaryColor text-base font-medium w-[777px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
    <div className="flex flex-wrap gap-6 mt-10 justify-center">
    {
      FeturedData.map((data) => (
        <FeturedCard 
          key={data.id}
          src={data.src}
          htext={data.htext}
          ptext={data.ptext}
          
        />
      ))
    }
  </div>
  </div>
    </section>
  )
}

export default FeturedCategories