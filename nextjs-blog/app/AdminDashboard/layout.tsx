import React from "react"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5";
export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav >
        
        <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
          <Link href='../AdminDashboard' >Administration</Link>
        <Link href="../AdminDashboard/Clients">Clients</Link>
        <Link href='../AdminDashboard/Sellers'>Sellers</Link>
        <Link href='../AdminDashboard/Categories'>Categories</Link>
        <Link href="../AdminDashboard/Products">Products</Link>
        <div className="flex">
        <input type="search"
            placeholder='What are you looking for?'
            className=' text-zinc-950 p-2 text-xs rounded w-56 h-9 right-36'/>
            <IoSearchOutline size={35} />
        </div>
        </div>
       </nav>
{children}
      </section>
    )
  }