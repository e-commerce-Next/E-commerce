import OneProduct from "./OneProduct";
import ProductImages from "./ProductImages";
import RelatedProduct from "./RelatedProduct";

export default function Page(){
    return(
        <div>
           <div className="flex w-full h-[600px] justify-center items-center">
        <ProductImages />
        <OneProduct />
      </div>
      <div className=" flex justify-start mx-60 mt-24">
        <RelatedProduct/>
      </div>
            
        </div>
    )
}