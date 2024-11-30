import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Group_profile from "../../app/assets/group_profile.png"
import Map from "../../app/assets/map.svg"
import Star from "../../app/assets/star.svg"
import Clock from "../../app/assets/clock.svg"
import Person from "../../app/assets/person.svg"
import Button from "./button";
import Image from "next/image";


const GroupCard = () => {
  return (
    <Card className="w-full md:w-[588px] py-2">
     
      <div className="flex">
      <CardHeader className="">
        <Image
           src={Group_profile}
           alt='Group_profile'
           className=' '
        />
        </CardHeader>
        <CardHeader className="">
        <CardTitle className="font-extrabold text-base text-primaryColor">Infrastructure Development Company Limited (IDCOL)</CardTitle>
        <div className="flex gap-2">
            <Image
           src={Map}
           alt='Map'
           className=' '
        />
        <CardDescription className="font-medium text-[12px] text-primaryColor opacity-40">New York,USA</CardDescription>
        
        </div>
        <div className="flex">
                <Image
                src={Star}
                alt='Star'
                className='mr-1'
                />
               
                <p className="text-gray-500 font-normal text-sm pl-2 mt-[2px]">4.6(35 reviews)</p>
          </div>
        </CardHeader>
        
      </div>
      {/* ------ */}
<div className="border-t border-[#E2E5F1]  w-[550px] ml-5"></div>
      <CardDescription className="font-bold text-primaryColor text-base ml-7 mt-2">Meeting Format</CardDescription>

     <div className="flex ml-7 py-4 gap-x-5">
     <div className="flex">
     <Image
                src={Person}
                alt='Person'
                className='mr-1'
                />
     <CardDescription className="font-medium text-[12px] text-primaryColor opacity-40">In Personal</CardDescription>
     </div>
     <div className="flex">
     <Image
                src={Clock}
                alt='Clock'
                className='mr-1'
                />
     <CardDescription className="font-medium text-[12px] text-primaryColor opacity-40">1 Hour</CardDescription>
     </div>

     </div>
          {/* peragraph start */}
    <CardContent className="flex gap-x-2">
    <p className="text-gray-500 text-md font-normal leading-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
    </CardContent>
    {/* peragraph end */}

    {/*  btn start */}
    <CardContent className="flex gap-x-2 mr-2 w-full">
        <Button className="font-normal text-[12px] !text-primaryColor   h-[36px] !rounded-[43px] !bg-BgColor">
        Communication
        </Button>
        <Button className="font-normal text-[12px] !text-primaryColor   h-[36px] !rounded-[43px] !bg-BgColor">
        Influence
        </Button>
        <Button className="font-normal text-[12px] !text-primaryColor !px-2   h-[36px] !rounded-[43px] !bg-BgColor">
        Strategic Thinking
        </Button>
        <Button className="font-normal text-[12px] !text-primaryColor !px-2  h-[36px] !rounded-[43px] !bg-BgColor">
        Strategic Thinking
        </Button>
      
    </CardContent>
    {/* btn end */}


     {/* last btn start */}
    <CardFooter className="flex justify-between">
        <div className="flex">
        <h3 className="font-extrabold text-[20px] text-primaryColor">$250</h3> <span className="font-normal text-[12px] text-primaryColor opacity-40 pt-2">/Hour</span>
        </div>
       <Button className="!bg-MenuHColor !text-BtnColor">
       View Details
       </Button>
    </CardFooter>
    {/* last btn end */}
  </Card>
  );
};

export default GroupCard;
