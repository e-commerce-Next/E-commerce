import React, { useEffect, useState } from 'react'
import { Stack,TextField,Rating,Button} from '@mui/material'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import './ProfileSeller.css'



const ProifleSeller = () => {

  


  return (
    <div>
       

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Delete
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Update
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <img src="" alt="" />
                </td>
                <td className="px-6 py-4">
                    <img src="" alt="" />
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProifleSeller