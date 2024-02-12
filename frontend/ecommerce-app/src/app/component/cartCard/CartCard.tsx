'use client'
import { getDecodeToken } from '@/app/utils/checkToken';
import { BookNow, RemoveCart, getCartPropduct } from '@/app/utils/config';
import React, { SetStateAction } from 'react'
import { MdDelete } from "react-icons/md";
interface CartDataProp {
    data?: [],
    setData?:React.Dispatch<SetStateAction<any>>
}
const CartCard = ({ data ,setData}: CartDataProp): React.JSX.Element => {
    const [deleteResponse,setDeleteResponse] = React.useState<any>(null)
    // const checkToken = ()=>{
    //     let token = JSON.parse(localStorage.getItem('userToken'))
    //     let decode:any = getDecodeToken(token)
    //    if(decode?.userdetail?.role === 'customer')
    //    {
    //     try{

    //       getCartPropduct(token,setCartData)
    //     }catch(e)
    //     {
    //        console.log(e)
    //     }
    //    }else
    //    {
    //     console.log('you are not authorized')
    //    }

    //   }

    const handleDelete = React.useCallback((id:any)=>{
        let token = JSON.parse(localStorage.getItem('userToken'))
        let decode:any = getDecodeToken(token)
        RemoveCart(id,token,setDeleteResponse)
        console.log(deleteResponse,'sdshbdhsbdh')
        // if(deleteResponse?.message === 'Succefully deleted')
        // {
            setTimeout(()=>{
                getCartPropduct(token,setData)
            },1000)
            
        // }
    },[data,deleteResponse,setData])

    const handleorder = (id)=>{
        let token = JSON.parse(localStorage.getItem('userToken'))
        BookNow(token,id)
    }
    return (
        <div className='flex flex-col w-full items-center justify-center'>
            {
                data?.map((item: any, i: any) => (
                    <div className='flex flex-col lg:flex-row items-center justify-between shadow p-3 rounded-lg mt-4'>
                        <div>
                            <img src='https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww' className='w-[100px] h-[100px] object-cover rounded-lg' />
                        </div>
                        <div className='mx-3'>
                            <h1 className='text-3xl'>{item?.title}</h1>
                            <span>{item?.description}</span>
                            <h1>{item?.price}</h1>
                        </div>
                        <div className='w-[360px] lg:w-10'>
                            <button onClick={()=>handleDelete(item?._id)} className='btn'>
                                <MdDelete className='text-3xl lg:text-2xl  text-red-800' />
                            </button>
                        </div>
                        <div>
                            <button onClick={()=>handleorder(item?._id)} className="btn bg-black text-white p-2">Buy Now</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default CartCard