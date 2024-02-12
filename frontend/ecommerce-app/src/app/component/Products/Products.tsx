'use client'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Dropdown from '../Dropdown/Dropdown'
import { Allproducts,getAllproducts } from '@/app/utils/config'

const Products = () => {
     const [ProductData,setProductData] = React.useState<[] | any>([])

     React.useEffect(()=>{
        getAllproducts(setProductData)
     },[])

    
    return (
        <div className='p-3'>
            <h1 className='text-3xl underline font-sans font-bold text-center my-3'>Products</h1>
            <div>
                <Dropdown/>
            </div>
            <div className='w-full p-3 flex flex-wrap'>

                <ProductCard data={ProductData}/>
              
            </div></div>
    )
}

export default Products