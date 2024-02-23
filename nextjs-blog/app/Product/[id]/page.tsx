"use client"
import OneProduct from "../OneProduct";
import ProductImages from "../ProductImages";
import RelatedProduct from "../RelatedProduct";
import NavBar from '../../Navbar/page'
import Footer from "../../footer/page";
import Zoom from "../Zoom";


export default function Page(props:any) {
    
   console.log('props',props.params.id)
    return (
        <div>
            
            <NavBar />
            <div className="flex w-full h-[600px] justify-center items-center">
                <ProductImages  id={props.params.id}/>
                <OneProduct id={props.params.id} />
            </div>
            <div className=" flex justify-start mx-60 mt-24">
                <RelatedProduct id={props.params.id} />
            </div>
            <Footer />
           
        </div>
    )
}