"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function ShoppingCart() {
  const [open, setOpen] = useState(false)
  const [carts, setCarts] = useState([]);
  const [refresh,setRefresh]=useState<boolean>(false)
  const [quantity,setQuantity]=useState<number>(1)


const incrementQuantity = () => {
    setQuantity(quantity => quantity+ 1);
};

const decrementQuantity = () => {
    if (quantity > 1) {
        setQuantity(quantity => quantity - 1);
    }
};


const calculateSubtotal = (quantity:number, price:number) => {
  return quantity * price;
};


const userId =  localStorage.getItem("id")
console.log(userId,"userId")

  useEffect(()=>{
   
     fetch(`http://localhost:8080/cart/getall/${userId}`,{method:'GET', headers: {
        'Content-type': 'application/json'}})
      .then((response) => response.json())
      .then((result)=>{
        setCarts(result)
        console.log(result,"carts")
    })
    .catch((err)=>{
        console.log(err);
    })
}, [refresh])



const deleteProdFromCart = async (idcart)=>{
  try {

  await  fetch(`http://localhost:8080/cart/delete/${idcart}`,{method:'DELETE'})
    .then((reponse)=> reponse.json())
    .then((result)=>{console.log("deleted")})
    setRefresh(!refresh)
  }
  
  catch (error) {console.log("error")}
}


  return (
    <>
    
    <AiOutlineShoppingCart
              className='cursor-pointer'
              size={25}f
              onClick={()=>{setOpen(true)}}
            /> 

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 "
                            onClick={() => setOpen(false)}
                          > 
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {carts.map((cart,index) => (
                              <li key={index} className="flex py-6">
                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                                  <img
                                    src={cart.product?.images[0]?.image}
                                    alt='hi'
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      
                                        <h4>{cart.product.productName}</h4>
                                        <div>

                                        <div className="bg-white border border-gray-200 w-[90px] rounded-lg dark:bg-slate-900 dark:border-gray-700">
                        <div className="w-full flex justify-between items-center gap-x-1">
                            <div className="grow py-2 px-3">  
                                <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="number" min={1}  value={quantity}    onChange={(e)=>{setQuantity(Number(e.target.value))}}/>
                            </div>
                            <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                                <button type="button" onClick={()=>{decrementQuantity(cart.product.idproducts)}} className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    -
                                </button>
                                <button type="button" onClick={()=>{incrementQuantity(cart.product.idproducts)}} className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                                        </div>
                                       
                                      
                                    
                                      <p className="ml-4">{calculateSubtotal(cart.product.price,quantity)}</p>
                                    </div>
                                    
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">{cart.product.description}</p> 

                                    <div className="flex">
                                      <button
                                        // type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={()=>{deleteProdFromCart(cart.idcart)}}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{carts.reduce((total, cart) => total + calculateSubtotal(cart.product.price,quantity),0)}$</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}