"use client"
import React, { useEffect, useState } from 'react';

export default function RelatedProduct() {
    const id = 3;
    const [products, setProducts] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    console.log('hiiii1',relatedProducts)

    useEffect(() => {
        fetch('http://localhost:8080/product/getall')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);

                // Filter the product based on the given id
                const oneProduct = data.find((e) => e.idproducts === id);
                if (oneProduct) {
                    const category = oneProduct.categories[0]?.categoryname;
                    console.log('Category:', category);
                    
                    // Filter related products based on the category
                    const filteredProducts = data.filter((e) => (
                        e.categories.length > 0 && e.categories[0].categoryname === category
                    ));
                    setRelatedProducts(filteredProducts);
                    console.log('hiiii2',relatedProducts)
                    
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="w-96 h-96 flex-row  gap-14 mb-32">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                  <div className="w-5 h-10 bg-red-500 rounded" />
                </div>
                <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Related Item</div>
              </div>
              <div className='flex justify-start items-center gap-8 mt-8'>
    
              
        {
          
          relatedProducts.map((e,i)=>{
            return(
              <div key={i} className=" flex gap-28"  >
                <div className="flex-col justify-center items-center gap-4 inline-flex">
                  <div className="w-[300px] h-[300px] p-5 bg-neutral-100 rounded">
                    <div className="px-3 py-1 left-[12px] top-[12px]  bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                      <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-none">-{e.promop}%</div>
                    </div>
                    <br />
                    <div className=" w-full h-full px-2 left-[40px] top-[35px]  justify-center items-center inline-flex">
                      <img className="w-[300px] h-44" src={e.images[0] &&  e.images[0].image} alt="" />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-black text-base font-medium font-['Poppins'] leading-normal">{e.productName}</div>
                    <div className="justify-start items-start gap-3 inline-flex">
                      <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">${e.price-(e.price * e.promotion)}</div>
                      <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">${e.price}</div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <div className="justify-start items-start flex" />
                      <div className="w-20 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-tight"><h1 className='flex'>Review ({e.ratingp})</h1></div>
                    </div>
                  </div>
                </div>
              </div>
            
            )
          })
        }
        </div>
        </div>
      )
}