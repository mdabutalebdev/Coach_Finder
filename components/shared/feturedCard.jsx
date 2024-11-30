import React from "react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const FeturedCard = ({ htext, className, ptext, src, alt }) => {
  return (
 
       
        <div
          className={`h-[298px] w-[369px] rounded-xl text-center bg-white border border-[#EAF2FB] hover:shadow-md group`}
        >
          <div className="h-16 w-16 rounded-full bg-EAF2FB shadow-[#EAF2FB] mx-auto relative my-5 shadow-[0_10px_20px_rgb(234,242,251)]"> 
             <Image src={src} alt="alt" className={`ml-20 h-[26px] w-6 absolute top-5 right-5`} />
          </div>
          <h3 className={`text-[20px] font-bold  ${className}`}>{htext}</h3>
          <p
            className={`text-base font-normal w-[321px] mx-auto leading-7 ${className}`}
          >
            {ptext}
          </p>

          <div className="flex justify-center">
            <h4
              className={`text-base font-medium text-SecondaryColor group-hover:text-BtnColor group-hover:text-[18px]  ${className}`}
            >
              Learn
            </h4>
            <HiArrowNarrowRight  className="mt-[1px] ml-1 text-SecondaryColor group-hover:text-BtnColor h-6 w-6" />
          </div>
        </div>
  
  );
};

export default FeturedCard;
