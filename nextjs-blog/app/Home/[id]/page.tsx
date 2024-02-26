import About from "../../AboutUs/page"
import Nav from "../../Navbar/page"
import AllProduct from "../../AllProduct/page"
import Footer from "../../footer/page"
import HomePage from "../../homePage/page"
import AllFlashsale from "../../FlashSales/FlashSales"
import CategoriesJBL from "../../Video/page"
import Services from "../../Services/page"
import NewArrivals from "../../Newarrival/page"
import AllProducts from "../../AllProductHome/page"


export default function Home (props) {
return (
    <div>
        <Nav/>
        <HomePage/>
        <AllFlashsale/>
        <AllProducts />
        <CategoriesJBL/>
        <NewArrivals/>
        <Services/>
        <Footer/>
       
        
        
    </div>
)
}
