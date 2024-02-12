'use client'
import Header from '@/app/component/Header/Header'
import { getorder } from '@/app/utils/config'
import React from 'react'

const page = () => {
    const [order, setorder] = React.useState([])

    const getproduct = () => {
        let token = JSON.parse(localStorage.getItem('userToken'))
        getorder(token, setorder)
    }

    React.useEffect(() => {
        getproduct()
    }, [])

    return (
        <div>
            <Header />
            <div className='w-full flex flex-col items-center justify-center'>
                {
                    order.map((item, i) => (
                        <div className='w-[90%] lg:w-[40%] shadow-lg mt-5 p-3 rounded-lg'>
                            <div className='flex items-center'>
                                <h1 className='text-3xl'>#OrderId</h1>
                                <p className='mx-2 text-black/30'>{item?._id.slice(0,20)}</p>
                            </div>
                            <div>{item?.title}</div>
                            <div>{item?.description}</div>
                            <div>{item?.price}</div>
                            <div className='flex items-center w-full border-t p-1'>
                                <h1 className='font-bold'>Status</h1>
                                <p className='mx-2 text-white bg-yellow-500 p-1 rounded-lg'>pending</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page