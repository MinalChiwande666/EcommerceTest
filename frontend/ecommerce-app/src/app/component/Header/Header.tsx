'use client'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from 'next/navigation'
const Header = () => {
    const router:any = useRouter()

    const handleNavigate = (nav:any)=>{
      router.push(nav)
    }
    return (
        <div className='w-full bg-purple-600'>
            <div className='p-3 flex flex-row items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-sans font-bold'>My Shop</h1>
                </div>
                <div className='flex items-center'>
                    <ul className='flex items-center gap-6'>
                        <li onClick={()=>handleNavigate('/')} className='hover:text-white hover:cursor-pointer'>Home</li>
                        <li onClick={()=>handleNavigate('/pages/cart')} className='hover:text-white hover:cursor-pointer'><FaShoppingCart/></li>
                        <li onClick={()=>handleNavigate('/pages/order')} className='hover:text-white hover:cursor-pointer'>Order History</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header