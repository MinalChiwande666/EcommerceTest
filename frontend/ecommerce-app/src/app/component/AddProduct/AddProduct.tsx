'use client'
import { UpdateProduct, uploadproduct } from '@/app/utils/config'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
const AddProduct = () => {
    const router = useRouter()
    const updatepro = JSON.parse(localStorage.getItem('update'))
    const uploadref:any= React.useRef(null)
    const [Title,setTitle] = React.useState(updatepro.title?updatepro?.title:'')
    const [Description,setDesc] = React.useState(updatepro.description?updatepro?.description:'')
    const [Price,setPrice] = React.useState(updatepro?.price?updatepro?.price:'')
    const [Category,setcategory] = React.useState(updatepro.category?updatepro?.category:'')
    const [checkimg,setimg] = React.useState([])
    const categories = [
        "Electronics",
        "Cloths",
        "Accessories"
    ]
    const fileToBase64Blob = (file:any, callback:any) => {
        const reader = new FileReader();
    
        // Set up the FileReader onload event
        reader.onload = (event:any) => {
          const base64Data = event.target.result;
          callback(base64Data);
        };
    
        // Read the file as a Data URL
        reader.readAsDataURL(file);
      };
    const handleSubmit = ()=>{
       if(!Title || Title === '')
       {
        alert('Please Enter Title')
       }
       else if(!Description || Description === '')
       {
        alert('Please Enter Description')
       }
       else if(!Price || Price === '')
       {
        alert('Please Enter Price')
       }
       else if(!Category || Category === '')
       {
        alert("Please Select Category")
       }
       else
       {
        
        
        fileToBase64Blob(uploadref?.current?.files[0],(base64:any)=>{
          
            let arr:any = []
            arr.push(base64)
            setimg(arr)
            
        })
       }
       if(checkimg.length >0)
       {
         let uploadobj = {
             title:Title,
             description:Description,
             price:Price,
             category:Category,
             image:checkimg
         }
         const token = JSON.parse(localStorage.getItem('userToken'))
         if(Object.keys(updatepro).length>0)
         {
           console.log('true')
           console.log(uploadobj)
           UpdateProduct(token,updatepro?._id,uploadobj)
           router.push('/')
           localStorage.removeItem('update')
         }else
         {
           uploadproduct(token,uploadobj)
         }
        console.log(uploadobj)
       }else
       {
        console.log('upload photo')
       }
     
       
        
    }

  return (
    <div className='w-full flex p-3 flex-col items-center justify-center'>
       <input value={Title} onChange={(e)=>{
        setTitle(e?.target?.value)
       }} type='text' className='w-[50%] mt-4 p-2 border border-black rounded-lg' placeholder='enter title of product'/>
       <input value={Description} onChange={(e)=>{
        setDesc(e?.target?.value)
       }} type='text' className='w-[50%] mt-4 p-2 border border-black rounded-lg' placeholder='enter title of decription'/>
       <input 
       onChange={(e)=>{
        setPrice(e?.target?.value)
       }}
       value={Price}
       type='number' className='w-[50%] mt-4 p-2 border border-black rounded-lg' placeholder='enter title of price'/>
       <select 
       onChange={(e)=>{
        setcategory(e?.target?.value)
       }}
       className='w-[50%] bg-white mt-4 p-2 border border-black rounded-lg'>
        <option>
            select
        </option>
        {
            categories.map((item,i)=>(
                <option key={i}>{item}</option>
            ))
        }
       </select>
       <input className='mt-4' type="file" ref={uploadref}/>
       <button onClick={handleSubmit} className='w-[50%] btn bg-purple-500 mt-4 p-2 rounded-lg text-white'>Upload</button>
       
    </div>
  )
}

export default AddProduct