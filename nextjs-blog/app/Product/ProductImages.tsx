"use client"
// import React, { useState, useEffect } from "react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// export default function ProductImages (props:any){
//     const [images, setImages] = useState([]);
    
//     const [backgroundPosition,setBackgroundPosition]=useState('0% 0%')
//     console.log('hi',images)
//     useEffect(() => {
//         fetch(`http://localhost:8080/image/getAll/${props.id}`)
//             .then((res) => res.json())
//             .then((data) => setImages(data));
//     }, [])
    
//     const swap = (index:any) => {
//         if (index !== 0) {
//           const cl = images[index];
//           const newimg = [...images];
//           newimg[index] = newimg[0];
//           newimg[0] = cl;
//           setImages(newimg);
//         }
//       };
     
//       const handleMouseMove =(e:any)  => {
//         const { left, top, width, height } = e.target.getBoundingClientRect()
//         const x = (e.pageX - left) / width * 100
//         const y = (e.pageY - top) / height * 100
//         setBackgroundPosition(`${x}% ${y}%` )
//       }
//       return (
//         <div className="flex justify-center items-center w-1/2  mt-12">
//           <div className="flex flex-col justify-between  mt-4 w-1/6">
//             {images.slice(1).map((image, index) => (
//               <div className="w-full m-2" key={index}>
//                 <img
//                   src={image.image}
                  
//                   alt={`Small ${index}`}
//                   className="p-2 hover:scale-125"
//                   onClick={() => swap(index + 1)}
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="w-full h-full rounded-md">
//             <div className=" w-4/5   bg-center">
//               {/* <img
//                 src={images[0] ? images[0].image : ''}
//                 className=" w-full h-full  hover:scale-105 mt-4 hover:mr-4 ml-5"
//                 alt=""
//               /> */}
//             <figure style={{backgroundImage:`url(${images[0] ? images[0].image : ''})`,backgroundPosition}} onMouseMove={handleMouseMove}  >
//          <img
//             src={images[0] ? images[0].image : ''}
       
//             alt="zooMED"
//           />
//             </figure>
//             </div>
//           </div>
//         </div>
//       );
// }




















import React, { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './zoom.css'
const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'
export default function ProductImages(props: any) {
  
  const [images, setImages] = useState([]);
 
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')
  
  console.log('hi', images)
  useEffect(() => {
    fetch(`http://localhost:8080/image/getAll/${props.id}`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [])

  const swap = (index: any) => {
    if (index !== 0) {
      const cl = images[index];
      const newimg = [...images];
      newimg[index] = newimg[0];
      newimg[0] = cl;
      setImages(newimg);
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    console.log('x',x)
    const y = (e.pageY - top) / height * 100
    console.log('y',y)
    setBackgroundPosition(`${x}% ${y}%`)
    
  }

  return (
    <div className="flex justify-center items-center w-1/2  mt-12 gap-4">
      <div className="flex flex-col justify-between  mt-4 w-1/6">
        {images.slice(1).map((image, index) => (
          <div className="w-full m-2" key={index}>
            <img
                  src={image.image}
                  
                  alt={`Small ${index}`}
                  className="p-2 hover:scale-125"
                  onClick={() => swap(index + 1)}
                />
           
          </div>
        ))}
      </div>
      <div className="w-full h-full rounded-md">
        <div className=" w-4/5   bg-center">
          {/* <img
            src={images[0] ? images[0].image : ''}
            className=" w-full h-full  hover:scale-105 mt-4 hover:mr-4 ml-5"
            alt=""
          /> */}
          <figure style={{backgroundImage:`url(${images[0] ? images[0].image : ''})`,backgroundPosition}} onMouseMove={handleMouseMove}  >
          <img id="img1"
            src={images[0] ? images[0].image : ''}
            className=" w-full h-full  hover:scale-105 mt-4 hover:mr-4 ml-5"
            alt="zooMED"
          />
            </figure>

        </div>
      </div>
    </div>
  );
}

