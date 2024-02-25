"use client"
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Link from 'next/link';
import SellerProductEdit from '../../SellerProductEdit/[id]/page'
import SellerAddProduct from '../../SellerAddProduct/[id]/page'
import { useRouter } from "next/navigation";
import Seller from '../../Seller/[id]/page'
import './Seller.css'

const ProfileSeller = (props) => {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/product/getall/${props.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/product/delpro/${id}`, { method: 'DELETE' })
      .then(() => {
      })
      .catch((error) => console.error('Error deleting product:', error));
  };

  const navigateToAddProduct = () => {
    router.push(`/SellerAddProduct/${props.params.id}`);
  };

  const navigateToEditProduct = (productId) => {
    router.push(`/SellerProductEdit/${productId}`);
  };

  const navigateToAllProduct = (productId) => {
    router.push(`/Seller/${props.params.id}`);
  };

  return (
    <div className='page-container'>
        <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Seller Profile</h1>
        <div className="space-x-4">
          <button
            onClick={navigateToAddProduct}
            className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-white font-medium hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
          <button
            onClick={navigateToAllProduct}
            className="inline-block rounded-lg bg-gray-500 px-6 py-2 text-white font-medium hover:bg-gray-600 transition duration-300"
          >
            See All Products
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 border border-gray-300">Product Name</th>
              <th className="px-6 py-3 border border-gray-300">Description</th>
              <th className="px-6 py-3 border border-gray-300">Quantity</th>
              <th className="px-6 py-3 border border-gray-300">Price</th>
              <th className="px-6 py-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.idproducts} className="bg-white">
                <td className="px-6 py-4 border border-gray-300">{product.productName}</td>
                <td className="px-6 py-4 border border-gray-300">{product.description}</td>
                <td className="px-6 py-4 border border-gray-300">{product.quantity}</td>
                <td className="px-6 py-4 border border-gray-300">{product.price}</td>
                <td className="px-6 py-4 border border-gray-300">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {deleteProduct(product.idproducts),window.location.reload()}}
                      className="text-red-500 hover:text-red-700"
                    >
                      <MdDelete size={26} />
                    </button>
                    <button
                      onClick={() => {navigateToEditProduct(product.idproducts)}}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit size={22} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ProfileSeller;
