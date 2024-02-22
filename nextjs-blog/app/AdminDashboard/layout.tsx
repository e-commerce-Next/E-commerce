import React from "react"
import Link from "next/link"
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
        <div>
        <input type="search"
            placeholder='What are you looking for?'
            className='bg-gray-200 p-2 text-xs rounded w-56 h-9 right-36'/>
        </div>
        </div>
       </nav>
{children}
      </section>
    )
  }