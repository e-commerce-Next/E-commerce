"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Seller from '../Seller/[id]'

const Nav: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router=useRouter()
const navigate=(path:string)=>{
router.push(path)
}
  


  return (
    <div className='w-full h-full' >
     
      <nav>
        <div className='flex items-center justify-center gap-2 h-16 bg-black text-white'>
          <h3 className='text-sm md:text-base'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
          <span className='text-base underline cursor-pointer ml-11'>Shop Now!</span>
          <select name='language' className='text-white bg-black' title='lang'>
            <option>English</option>
          </select>
        </div>
        <div className=' justify-center gap-8 mt-6 mb-6 ml-20 flex items-center '>
          <h1 className='absolute left-10 font-bold text-3xl mb-1 mr-36'>Exclusive 🛒</h1>
  
          <Link href='../homePage'>Home</Link>
          <Link href="../Contact">Contact</Link>
          <Link href='../AboutUs'>AboutUs</Link>
          <Link href=''><p >Sign Up</p></Link>
          <div  className=' test w-auto h-auto flex items-center gap-2 right-14 ml-10' >
            <input
              type='search'
              placeholder='What are you looking for?'
              className='bg-gray-200 p-2 text-xs w-56 h-9 border- '
              />
                <IoSearchOutline
              size={24}
              className='cursor-pointer'
              />
            </div>
          <div className="flex items-center gap-10 absolute right-14" >  
            <FaRegHeart 
            className='cursor-pointer'
            size={25}
            onClick={()=> navigate("/app/Wishlist")} />
        
            <AiOutlineShoppingCart
              className='cursor-pointer'
              size={26}
              onClick={() => navigate('/app/Cart')}
            />
            <div className="relative">
          <button
            className="cursor-pointer focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {<CgProfile size={28}/>}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
             
                  <button onClick={() => navigate(`/Seller/1`)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Profile</button>
                  {/* <button onClick={logoutFunction} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Logout</button> */}
             
            </div>
          )}
        </div>
          </div>
        </div>
      </nav>
      <hr className='text-gray-300' />
    </div>
  );
};

export default Nav;