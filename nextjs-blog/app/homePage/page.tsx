import Categories from './categories'
import SlideCategories from './slidecarouss'
import Nav from '../Navbar/page'
import Footer from '../footer/page'
import NewArrivals from '../Newarrival/page'
import Services from '../Services/page'
import AllFlashsale from '../FlashSales/FlashSales'
import CategoriesJBL from '../Video/page'


export default function Homepage () {
    return <div>
        {/* <Nav/> */}
        <SlideCategories/>
        <Categories/>
        {/* <AllFlashsale/>
        <CategoriesJBL/>
        <NewArrivals/>
        <Services/>
        <Footer/> */}
    </div>
}
