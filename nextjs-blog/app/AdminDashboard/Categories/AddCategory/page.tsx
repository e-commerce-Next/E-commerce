// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Button from '@mui/material/Button';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';



// const AddCateg = () => {
//   const [image, setImage] = useState<File | null>(null);
//   const [url, setUrl] = useState<string>('');
//   const [catName, setCatName] = useState<string>('');
//   const [ref, setRef] = useState<boolean>(false);

  
//   const router = useRouter();

//   const addCat = async (Category: { categoryname: string, CategoryImage:string}) => {
//     try {
//       await fetch('http://localhost:8080/categories/addcategorie', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(Category),
//       });
      
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const uploadImage = async () => {
//     try {
//       const data = new FormData();
//       if (image) {
//         data.append('file', image);
//         data.append('upload_preset', 'ml_default');
//         data.append('cloud_name', 'dwn1x1okc');
//         const response = await fetch('https://api.cloudinary.com/v1_1/ml_default/image/upload', {
//           method: 'POST',
//           body: data,
//         });
//         const responseData = await response.json();
//         setUrl(responseData.secure_url);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center'>
//         <Link href='../AddCategory'>Add New Category</Link>
//         <Link href="../../../AdminDashboard">Get Back to Administration </Link>
//       </div>

//       <div className='grid justify-center align-middle items-center box-border rounded-lg shadow-2xl border-black mt-30 gap-x-64 bg-gray-200 h-auto w-2/4 ml-96 '>
//         <div>
//           <h1 className='text-xl font-bold text-red mt-8'>Name of Category :</h1> <br />
//           <input
//             className='bg-white shadow-md rounded pe-40 pt-2 pb-2 w-10/12 mb-4 text-center gap-40'
//             placeholder='Category Name '
//             onChange={(e) => {
//               setCatName(e.target.value);
//             }}
//           />
//         </div>

//         <div className='fit-content mb-4 font-extrabold lg:text-xl'>
//           <h1 className='text-xl font-bold text-red mt-8'> Picture of Category :</h1> <br />
//           <Button component='label' variant='contained'>
//             <input type='file' onChange={(e) => setImage(e.target.files?.[0] || null)}></input>
//           </Button>

//           <Button onClick={() => uploadImage()}>
//             {' '}
//             <AddAPhotoIcon sx={{ width: 40, height: 40 }} /> <br />{' '}
//           </Button>
//           <div>
//             <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url} alt='pho'/>
//           </div>
//         </div>
//         <h1 className='text-xl font-bold text-red mt-7'>Confirm :</h1>
        
//           {' '}
//           <button
//             className='bg-black mt-5 h-11 w-52 text-white mb-10 shadow-md rounded'
//             onClick={() => {
//               addCat({ categoryname: catName, CategoryImage: url }); 
//               router.push("../../Categories")
//             }}
//           >
//             Join to Categories{' '}
//           </button>
        
//       </div>

     
//     </div>
//   );
// };

// export default AddCateg;