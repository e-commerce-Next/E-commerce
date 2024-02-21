import Link from "next/link";
import CategoriesJBL from "./Video/page";
import NewArrivals from "./Newarrival/page";
import Services from "./Services/page";
import Footer from "./footer/page";
export default function Home() {
  return (
    <div>
      <CategoriesJBL/>
      <NewArrivals/>
      <Services/>
      <Footer/>

    </div>
  );
}