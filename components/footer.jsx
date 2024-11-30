 
import { FaFacebook, FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
 
import Button from "./shared/button";

const Footer = () => {
  return (
    <section className="py-[100px] bg-black mt-[800px]">
      <div className="container">
        <div className="flex  gap-y-5 justify-between">
          {/* part one start */}
          <div className="">
            <p className="text-base font-openSans font-normal text-white pt-[15px] pb-[32px] max-w-[263px]">
             You’ve got things to do. With seamless integration, you won’thave to wait long for a code review. Your online store can start accepting digital currencies seamlessly and most importantly
            </p>
            {/* social media */}
            <div className="flex items-center gap-x-6">
              <div className="cursor-pointer text-3xl text-white">
                <span>
                <FaFacebook />
                </span>
              </div>
              <div className="cursor-pointer text-3xl text-white">
                <span>
                  <FaTwitter />
                </span>
              </div>
              
              <div className="cursor-pointer text-3xl text-white">
                <span>
                  <FaInstagram />
                </span>
              </div>
              <div className="cursor-pointer text-3xl text-white">
                <span>
                  <FaLinkedin />
                </span>
              </div>
              <div className=" cursor-pointer text-3xl text-white">
                <span>
                <FaGoogle />
                </span>
              </div>
            </div>
          </div>
           {/* part one end */}
           {/* part two start */}
          <div className="">
          <ul className="flex flex-col gap-y-4">
              <li className="font-openSans font-bold text-white text-[18px]">
              Jump To
              </li>
              {[
                "Privacy Policy",
                "Terms of Service",
                "Pricing",
                 
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-openSans hover:text-thirdColor  font-normal text-base text-white"
                >
                  <a href="#" className="inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
       {/* part two end */}
        {/* part three start */}
          <div className="">
          <ul className="flex flex-col gap-y-4">
              <li className="font-openSans font-bold text-white text-[18px]">
              Contributor
              </li>
              {[
                "Be a Contributor",
                "Contributor FAQ",
                 
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-openSans font-normal text-base text-white"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
           
            {/* part three end */}
            {/* part 4th start */}
            <div className="">
            <ul className="flex flex-col gap-y-4">
              <li className="font-openSans font-bold text-white text-[18px]">
              Get in touch
              </li>
              <p className="w-[180px] text-white pb-5">hello@Payslave.com
              734 Broadway, Floor 5 New York, NY 10003</p>
            </ul>
              <div className="flex">
                 <Button className="mr-2 !bg-transparent border border-white text-white">
                 Sign Up
                 </Button>
                 <Button className="text-white">
                 Login
                 </Button>
              </div>
            </div>
             {/* part 4th end */}
         
        </div>
        <div className="border-t border-white mt-10">
            <p className="text-white text-center pt-5">© 2021 Paynow - Payment Services. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
