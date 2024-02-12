'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Header2 = () => {
  const router = useRouter()
  return (
    <div className='w-full bg-purple-700 flex flex-row items-center justify-center p-3'>
        <ul className='flex gap-4 '>
            <li onClick={()=>{
              router.push('/')
            }} className='hover:text-white hover:cursor-pointer'>Home</li>
            <li onClick={()=>{
              router.push('pages/addproduct')
            }} className='hover:text-white hover:cursor-pointer'>Add Product</li>
        </ul>
    </div>
  )
}

export default Header2