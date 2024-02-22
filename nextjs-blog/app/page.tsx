import Link from "next/link";
import Video from "./Video/page"
import NewArrivals from "./Newarrival/page";
import Services from "./Services/page";
import Footer from "./footer/page";
import SortedProducts from "./sorteproducts/[category]/page";
import Homepage from "./homePage/page"
// import AllProducts from
export default function Home() {
  return (
    <div>
      
      <Homepage/>
     <SortedProducts/>
     <Video/>
     <NewArrivals/>
     <Services/>
     <Footer/>
    </div>
  );
}
