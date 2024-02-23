"use client"
import React,{useState, ChangeEvent} from 'react'
import '../ui/global.css'
import Nav from '../Navbar/page'
import axios from 'axios'

interface User {
  iduser: number;
}

const UpdateUserProfil = () => {
  
  const [name, setName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [email, setEmail] = useState<string>('');
  const [newPass, setNewpass] = useState<string>('');
  const [iduser, setid] = useState<User | null>(null);
  const [address, setAddress] = useState<string>('');

  

  const updateprofile = () => {
    axios
      .put(
        `http://localhost:8080/user/edit/1`, 
        {
          firstName: name,
          lastName: lastname,
          emailPhone: email,
          image: image,
          password: newPass,
          adresse: address
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  const handelchange = () => {
    updateprofile();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage(file);
    }
  };


  return (
    
    <div>
      
      <Nav/>
      <div style={{"display":"flex","justifyContent":"space-around","marginTop":"2.5rem"}}>
        <div style={{"display":"flex"}}>
        <a href="/home/My Account">Home /</a>
        <p className="text-gray-400 hover:text-red-500">My account</p>   
        </div>
        <div style={{"display":"flex"}}>
        <p>Welcome </p>
        <p className="text-red-400 hover:text-red-500"> UserName</p>
        </div>
       </div>
            
            <div style={{"display":"flex","justifyContent":"flex-start","margin":"3rem 25rem","gap":"20rem"}}>
            <section>
       <div>
        <div>
        <h4>Manage My Account</h4>
            <p className="text-gray-400 hover:text-red-500">My Profile</p>
            <p className="text-gray-400 hover:text-red-500">Adress Book</p>
            <p className="text-gray-400 hover:text-red-500">My Payment Options</p>
        </div>
        <h4>My Orders</h4>
        <p className="text-gray-400 hover:text-red-500">My Returns</p>
        <p className="text-gray-400 hover:text-red-500">My Cancellations</p>
        <h4>My WishList</h4>
       </div>

     </section>

     <section className='p-14 shadow-md '>
    
       
     <form className="max-w-md mx-auto">
     <p className="text-red-500"> Edit Your Profil </p>
  <div className="grid md:grid-cols-2 md:gap-10">

    <div className="relative z-0 w-96 mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>{setName(e.target.value)}}/>
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    
    <div className="relative z-0 w-96 mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>{setLastName(e.target.value)}}/>

        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-10">
  <div className="relative z-0 w-96 mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-[450px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>{setEmail(e.target.value)}}/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  </div>
  
  <div className="relative z-0 w-96 mb-5 group">
      <input type="password" name="password" className="block py-2.5 px-0 w-[450px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  defaultValue={"hello"} onChange={(e)=>{setNewpass(e.target.value)}}/>
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New password</label>
  </div>
  
  <div className="relative z-0 w-96 mb-5 group">
      <input type="password" name="repeat_password" id="confirmed_password" className="block py-2.5 px-0 w-[450px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div> 

  <div style={{"display":"flex","justifyContent":"flex-end"}}>


  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
 > Cancel </button>

  <button type="submit" className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
  >Confirm Changes</button>
  </div>
  
</form>
     </section>
            </div>

    
    </div>
  )
}

export default UpdateUserProfil
