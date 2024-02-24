"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

 

const SellerNav: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router=useRouter()
const navigate=(path:string)=>{
router.push(path)
}
  


  return (
    <div className=' bg-black w-full h-[50px]' >
        <nav>
            <div className=' justify-center pt-3 text-white gap-8 mt-6 mb-6 ml-20 flex items-center '>  
                <Link href='../homePage'>Home</Link>
                <Link href="../Contact">Contact</Link>
                <Link href='../AboutUs'>AboutUs</Link>
                <Link href=''><p >Sign Up</p></Link>
            </div>
        </nav>
    </div>
  );
};

export default SellerNav;