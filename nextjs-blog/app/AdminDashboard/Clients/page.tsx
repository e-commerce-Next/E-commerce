"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { IoSearchOutline } from "react-icons/io5";
import DeleteIcon from "@mui/icons-material/Delete";

interface Client {
  iduser: number;
  firstName: string;
  lastName: string;
  emailPhone: string;
  adresse: string;
}

const AdminClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/user/getclients");
      const data = await res.json();
      setClients(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const deleteClient = async (userId: number) => {
    try {
      await fetch(`http://localhost:8080/user/delete/${userId}`, {
        method: "DELETE",
      });
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
                      User id
                  </th>
                  <th scope="col" className="px-6 py-3">
                      User Full Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      E-mail address or phone number 
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Actions
                  </th>
              </tr>
          </thead>
  
  
  
  
          <tbody>
          {clients.map((user,index)=>{
                  return (
                      <tr  key={index}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.iduser}
              </th>
              <td className="px-6 py-4">
                  {user.firstName} {user.lastName} 
              </td>
              <td className="px-6 py-4">
                  {user.emailPhone}
              </td>
              <td className="px-6 py-4">
                  {user.adresse}
              </td>
              <td className="px-6 py-4">
              <DeleteIcon onClick={() => deleteClient(user.iduser)}/>
            </td>
          </tr>
                  )
              }
                      
                  )}
              
          </tbody>
      </table>
  </div>
  </div>
    )
};

export default AdminClients;