 
import FeturedCategories from "@/components/feturedCategories";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import PeerGroup from "@/components/peerGroup";
 
 


export default function Home() {
  return (
     <>
     
      <Navbar/>
      <Header />
     
      <FeturedCategories />
      <PeerGroup />
      <Footer />
     
     </>
  );
}
