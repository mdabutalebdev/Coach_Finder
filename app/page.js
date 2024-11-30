import AutoSlide from "@/components/autoslide";
import FeturedCategories from "@/components/feturedCategories";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Button from "@/components/shared/Button";
 


export default function Home() {
  return (
     <>
     
      <Navbar/>
      <Header />
     
      <FeturedCategories />
      <Footer />
     
     </>
  );
}
