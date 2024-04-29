"use client"
import React, {useState} from "react"
import Nav from '../../Navbar/page'
import SellerNav from '../../SellerNavBar/page'
import axios from "axios"
import { useRouter } from "next/navigation"
import Seller from '../../Seller/[id]/page'
import "./SellerProductEdit.css"

const SellerProductEdit = (props) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [pName, setProductName] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productDescription, setProductDescription] = useState<string>("");
    const [productPromotion, setProductPromotion] = useState<number>(0);

    const router = useRouter()
    const navigate = (path: string) => {
        router.push(path)
    }

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const userId =  localStorage.getItem("id")
    const updateProduct=()=>{
      axios.put(`http://localhost:8080/product/editpro/${props.params.id}`, {
          productName: pName,
          description: productDescription,
          quantity: quantity,
          price: productPrice,
          promotion: productPromotion
      }).then(() => {
          
      }).catch((err) => { 
          console.log('err', err)
          
      })
    }

    const navigateToAllProduct = () => {
        router.push(`/Seller/${props.params.id}`);
      };
    
      const navigateToAddProduct = () => {
        router.push(`/SellerAddProduct/${props.params.id}`);
      };

    return (
        <div className="page-container">
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>
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
                <section className='p-8 bg-white bg-opacity-80 rounded-lg shadow-md'>
                    <form className="max-w-md mx-auto">
                        <p className="text-lg text-gray-700 mb-4">Edit Your Product</p>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                            <input
                                className="w-full py-2.5 px-4 text-sm text-gray-900 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter product name"
                                required
                                onChange={(e) => { setProductName(e.target.value) }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Price</label>
                            <input
                                className="w-full py-2.5 px-4 text-sm text-gray-900 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter product price"
                                type="number"
                                required
                                onChange={(e) => { setProductPrice(Number(e.target.value)) }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Description</label>
                            <textarea
                                className="w-full py-2.5 px-4 text-sm text-gray-900 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter product description"
                                required
                                onChange={(e) => { setProductDescription(e.target.value) }}
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Quantity</label>
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white bg-opacity-50 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
                                    onClick={() => setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))}
                                >
                                    -
                                </button>
                                <input
                                    className="w-16 text-center text-sm text-gray-900 bg-white bg-opacity-50 border-t border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white bg-opacity-50 border border-gray-300 rounded-r-lg focus:outline-none focus:border-blue-500"
                                    onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-300"
                                onClick={navigateToAllProduct}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="ml-4 px-6 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-lg focus:outline-none hover:bg-red-600"
                                onClick={() => { updateProduct(); navigate(`/Seller/${userId}`); }}
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default SellerProductEdit;