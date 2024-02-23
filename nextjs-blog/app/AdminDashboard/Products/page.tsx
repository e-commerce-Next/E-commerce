"use client";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface Product {
  idproducts: number;
  productName: string;
  ProductImage: string;
  price: number;
  description:string
}

const AdminProducts = () => {
  const [adminData, setAdminData] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/product/getall");
      const data = await res.json();
      setAdminData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const deleteProd = async (productID: number) => {
    try {
      await fetch(
        `http://localhost:8080/product/delpro/${productID}`,
        {
          method: "DELETE",
        }
      );
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  

  return (
    <div>   
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-4/5 ml-auto mr-auto">
       
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Images
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>




        <tbody>
            {adminData.map((prod,index)=>{
                
                return (
          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {prod.idproducts}
                </th>
                <td className="px-6 py-4">
                {prod.productName}
                </td>
                <td className="px-6 py-4">
             <img src={prod.ProductImage} alt=""  className='w-32 h-24'/>
                </td>
                <td className="px-6 py-4">
                    {prod.description}
                </td>
                <td className="px-6 py-4">
                    ${prod.price} 
                </td>
                <td className="px-6 py-4 cursor-pointer">
                <DeleteIcon onClick={() => deleteProd(prod.idproducts)}/>
                </td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
</div>
</div>
  )
};

export default AdminProducts;