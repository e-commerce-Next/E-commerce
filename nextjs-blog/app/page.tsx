import About from "./AboutUs/page"
import Nav from "./Navbar/page"
import AllProducts from "./categorypage/page"
import Footer from "./footer/page"
import SellerProfil from "./Seller/page"
import SellerProductEdit from "./SellerProductEdit/page"

export default function Home () {
return (
    <div>
        <Nav/>
        {/* <AllProducts/> */}
        <SellerProfil/>
        
        <Footer/>
        
    </div>
)
}
