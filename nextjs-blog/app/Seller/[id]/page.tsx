"use client"
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Link from 'next/link';
import SellerProductEdit from '../../SellerProductEdit/[id]/page'
import SellerAddProduct from '../../SellerAddProduct/[id]/page'
import { useRouter } from "next/navigation";



const ProifleSeller = (props) => {

    const router = useRouter()
    const navigate = (path: string) => {
        router.push(path)
    }

  const [data,setData]=useState([])
  
  console.log(data);
    
  useEffect(() => {
    fetch(`http://localhost:8080/product/getall/${props.params.id}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    const deleteProduct = (id) => {
        fetch(`http://localhost:8080/product/delpro/${id}`,{method: 'DELETE'})
      }
    
      const renderStars = (rating) => {

        const roundedRating = Math.round(rating);
        const stars = [];
    
        for (let i = 0; i < 5; i++) {
          stars.push(
            <span key={i} style={i < roundedRating ? styles.filledStar : styles.emptyStar}>
              ★
            </span>
          );
        }
    
        return stars;
      };
      const styles = {
        filledStar: {
          color: '#FFD700',
        },
        emptyStar: {
          color: '#ccc',
        },
        starRating: {
          marginTop: '10px',
        },
      }
     

  return (
    <div>
<div className="relative overflow-x-auto">
    <div className='mx-[850px] '>
    
    <button onClick={()=>{navigate(`/SellerAddProduct/${props.params.id}`)}}
        type="submit"
        className="inline-block rounded-lg bg-black px-10 py-3 font-medium text-white w-[200px] mt-10 mb-10 ">
        Add Product
    </button>
     
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Delete
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Update
                </th>
            </tr>
        </thead>
        <tbody>
            { data.map((e)=>{
                return (
                    <tr className="bg-white dark:bg-gray-800 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {e.productName}
                        </th>
                        <td className="px-6 py-4">
                            {e.description}
                        </td>
                        <td className="px-6 py-4">
                            {e.quantity}
                        </td>
                        <td className="px-6 py-4">
                            {e.price}
                        </td>
                        <td className="px-6 py-4">
                            <MdDelete size={26} onClick={()=>{deleteProduct(e.idproducts), window.location.reload()}}/>
                        </td>
                        <td className="px-6 py-4">
                           <button onClick={()=>{navigate(`/SellerProductEdit/${e.idproducts}`)}}><FiEdit size={22} /></button> 
                        </td>
                    </tr>
                )
            })}            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProifleSeller