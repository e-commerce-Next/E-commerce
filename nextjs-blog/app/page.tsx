import About from "./AboutUs/page"
import Nav from "./Navbar/page"
import AllProduct from "./AllProduct/page"
import Footer from "./footer/page"
import HomePage from "./homePage/page"
import AllFlashsale from "./FlashSales/FlashSales"
import CategoriesJBL from "./Video/page"
import ShoppingCart from "./Shopp/Shopp"

export default function Home () {
return (
    <div>
        <Nav/>
        <HomePage/>
        <AllFlashsale/>
        <CategoriesJBL/>
        <Footer/>
        
        
    </div>
)
}
