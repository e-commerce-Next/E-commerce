import About from "./AboutUs/page"
import Nav from "./Navbar/page"
import AllProduct from "./AllProductHome/AllProductHome"
import Footer from "./footer/page"
import FlashSales from './FlashSales/FlashSales'
import Services from "./Services/page"
import Video from "./Video/page"
import NewArrivals from "./Newarrival/page"
import Homes from "./homePage/page"
import SlideCategories from "./Slidecarrosel/page"
import Categories from "./homePage/page"

export default function Home () {
return (
    <div>
        <Nav/>
       
       <SlideCategories/>
       
       <FlashSales/>
       <Video/>
       <Categories/>
        <AllProduct />
        
        <NewArrivals/>
       <Services/>
        <Footer/>
       
        
    </div>
)
}
