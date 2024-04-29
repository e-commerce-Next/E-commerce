"use client"
import React,{useState, ChangeEvent} from 'react'

import Nav from '../../Navbar/page'
import axios from 'axios'
import './User.css'


interface User {
  iduser: number;
}

    const UpdateUserProfil = (props) => {
      
      const [name, setName] = useState<string>('');
      const [lastname, setLastName] = useState<string>('');
      
      const [email, setEmail] = useState<string>('');
      const [newPass, setNewpass] = useState<string>('');
      const [iduser, setid] = useState<User | null>(null);
      

      console.log(props);
      
      const userId =  localStorage.getItem("id")
      const updateprofile = (id,obj) => {
        axios
          .put(
            `http://localhost:8080/user/edit/${props.params.iduser}`, obj
            
          )
          .then((res) => {
            console.log(res.data,"ggg");
          })
          .catch((err) => {
            console.log(err);
          });
      };

      

      // const handelchange = () => {
      //   updateprofile();
      // };

      // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      //   const file = event.target.files && event.target.files[0];
      //   if (file) {
      //     setImage(file);
      //   }
      // };


      return (
        
        <div>
          
          <Nav/>
          <div className="container mx-auto px-8 py-12">
  <div className="flex justify-between items-center mb-8">
    <div className="flex items-center space-x-2">
      <a href="/home/My Account" className="text-gray-600 hover:text-red-500">Home</a>
      <span>/</span>
      <p className="text-gray-600 hover:text-red-500">My Account</p>
    </div>
    <div className="flex items-center space-x-2">
      <p className="text-gray-600">Welcome</p>
      <p className="text-red-500 hover:text-red-700">{props.searchParams.first_name}</p>
    </div>
  </div>

  <div className="flex justify-between items-start">
    <section className="mr-24">
      <div>
        <h4 className="text-lg font-semibold mb-4">Manage My Account</h4>
        <div className="space-y-2">
          <p className="text-gray-600 hover:text-red-500">My Profile</p>
          <p className="text-gray-600 hover:text-red-500">Address Book</p>
          <p className="text-gray-600 hover:text-red-500">My Payment Options</p>
        </div>
        <h4 className="text-lg font-semibold mt-8 mb-4">My Orders</h4>
        <div className="space-y-2">
          <p className="text-gray-600 hover:text-red-500">My Returns</p>
          <p className="text-gray-600 hover:text-red-500">My Cancellations</p>
        </div>
        <h4 className="text-lg font-semibold mt-8">My Wishlist</h4>
      </div>
    </section>

    <section className="p-8 bg-white rounded-lg shadow-md">
      <form className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input type="text" name="first_name" id="first_name" className="input-field" placeholder=" " onChange={(e)=>{setName(e.target.value)}}/>
            <label  className="input-label">First Name</label>
          </div>
          <div className="relative">
            <input type="text" name="last_name" id="last_name" className="input-field" placeholder=" " onChange={(e)=>{setLastName(e.target.value)}}/>
            <label  className="input-label">Last Name</label>
          </div>
          <div className="relative">
            <input type="email" name="email" id="email" className="input-field" placeholder=" " onChange={(e)=>{setEmail(e.target.value)}}/>
            <label  className="input-label">Email Address</label>
          </div>
          <div className="relative">
            <input type="password" name="password" id="password" className="input-field" placeholder=" " onChange={(e)=>{setNewpass(e.target.value)}}/>
            <label  className="input-label">New Password</label>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button type="button" className="btn-cancel">Cancel</button>
          <button type="submit" className="btn-confirm" onClick={()=>{updateprofile(userId, {
              firstName: name,
              lastName: lastname,
              emailPhone: email,
    
              password: newPass,
              
            })}}>Confirm Changes</button>
        </div>
      </form>
    </section>
  </div>
</div>


        
        </div>
      )
    }

    export default UpdateUserProfil
