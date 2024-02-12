'use client'
import { setcategory } from '@/app/redux/FilterReducer/Category'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Dropdown = () => {
    const dispatch = useDispatch()
    const category = useSelector((state:any)=> {return state.Category.category})
    
    const [Show, setShow] = React.useState<Boolean | any>(false)
    const categories = [
        "All",
        "Electronics",
        "Cloths",
        "Accessories"
    ]

    const handleCategory = React.useCallback((item:any)=>{
     dispatch(setcategory(item))
     
    },[dispatch,category])
    return (
        <div className="relative">
            <button onClick={() => {
                setShow(!Show)
            }} className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300">
                filter Product
            </button>
            {Show &&
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden sm:block">
                    {
                        categories.map((item, i) => (
                            <p
                            key={i} 
                            onClick={()=>handleCategory(item)}
                            className="block px-4 py-2 text-gray-800 hover:bg-blue-200">{item}</p>
                        ))
                    }

                </div>
            }
        </div>
    )
}

export default Dropdown