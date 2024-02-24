"use client"
import { useState } from 'react';
import { useRouter} from 'next/navigation';
// import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Seller from '../Seller/[id]'
import Shopp from './Shopp'



const Nav: React.FC = () => {
 const [show,setShow]=useState(false)
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const ShowCom =() => {
  if(show == true ) {
    setShow(false)
  }
  else setShow(true)
 }

  const router=useRouter()
const navigate=(path:string)=>{
router.push(path)
}
  
const handleLogout = () => {
  localStorage.removeItem("id");
  
  navigate("/Signin")
};


  return (
    <div className='w-full h-full' >
        
      <nav>
        <div className='flex items-center justify-center gap-2 h-14 bg-black text-white'>
          <h3 className='text-sm md:text-base'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
          <span className='text-base underline cursor-pointer ml-11'>Shop Now!</span>
          <select name='language' className='text-white bg-black' title='lang'>
            <option>English</option>
          </select>
        </div>
        <div className=' justify-center gap-8 mt-6 mb-6 ml-20 flex items-center cursor-pointer'>
          <h1 className='absolute left-10 font-bold text-3xl mb-1 mr-36 ' onClick={() => navigate("/")} >Exclusive 🛒</h1>
  <div className="flex gap-4 ">


          <p  className='cursor-pointer' onClick={()=>{navigate('/')}}>Home</p>
          <p  className='cursor-pointer' onClick={()=>{navigate('/Contact')}}>Contact</p>
          <p  className='cursor-pointer' onClick={()=>{navigate('/AboutUs')}}>AboutUs</p>
          <p  className='cursor-pointer' onClick={()=>{navigate('/Signup')}}>Sign Up</p>
  </div>
          
          
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

          <div className="flex items-center gap-20 absolute right-14" >  
            <FaRegHeart 
            className='cursor-pointer'
            size={25}
            onClick={()=> navigate("/Wishlist")} />
        
            
              <Shopp/> 
            <div className="relative">
          <button
            className="cursor-pointer focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {<CgProfile size={28}/>}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
             
                  <button onClick={() => navigate("/User")} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Profile</button>
                  <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Logout</button>
             
            </div>
          )}
        </div>

          </div>
        </div>
      </nav>
      <hr className='text-gray-300' />
    </div>
  )
}
export default Nav;