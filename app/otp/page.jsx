import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Button from "@/components/shared/button";

const page = () => {
  return (
    <section className="bg-BgColor py-32">
      <div className="container mx-auto w-[607px] h-[723px] bg-white shadow-sm rounded-[20px]">
        <div className="">
          <h3 className="w-[400px] mx-auto font-medium  text-[64px] text-primaryColor text-center pt-36">
            Check Your Inbox
          </h3>
          <p className="text-center">
            We’ve sent verification code to yourmail@gmail.com
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <InputOTP maxLength={4} className=" ">
            <InputOTPGroup>
              <InputOTPSlot index={0} className="p-7" />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={1} className="p-7" />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={2} className="p-7" />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} className="p-7" />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button className="text-white w-full !mt-6">Reset Password</Button>
      </div>
    </section>
  );
};

export default page;
