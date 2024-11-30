 
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "./shared/button";

const Footer = () => {
  return (
    <section className="py-[100px] bg-black mt-[800px]">
      <div className="container">
        <div className="flex  gap-y-5 justify-between">

          <div>
            <p className="text-base font-openSans font-normal text-white pt-[15px] pb-[32px] max-w-[263px]">
             You’ve got things to do. With seamless integration, you won’thave to wait long for a code review. Your online store can start accepting digital currencies seamlessly and most importantly
            </p>
            {/* social media */}
            <div className="flex items-center gap-x-3">
              <div className="size-[40px] hover:text-yellow-400 hover:-translate-y-1 transition-all hover:bg-sky-600 cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="size-[40px] hover:text-white hover:-translate-y-1 transition-all hover:bg-sky-600 cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaTwitter />
                </span>
              </div>
              <div className="size-[40px] hover:text-[#ffc001] hover:-translate-y-1 transition-all hover:bg-[#a508f2] cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaInstagram />
                </span>
              </div>
              <div className="size-[40px] hover:text-white hover:-translate-y-1 transition-all hover:bg-[#087cb6] cursor-pointer rounded-full text-secondary flex items-center justify-center text-xl bg-[#dbdbdb]">
                <span>
                  <FaLinkedin />
                </span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col lg:flex-row gap-y-10 justify-between gap-x-32">
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
             
          </div>
        </div>
        <div className="border-t border-white mt-10">
            <p className="text-white text-center pt-5">© 2021 Paynow - Payment Services. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
