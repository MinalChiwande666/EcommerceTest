import { getDecodeToken } from '@/app/utils/checkToken'
import { Addtocart } from '@/app/utils/config'
import React from 'react'
import { useSelector } from 'react-redux'

interface ProductProp {
  data?: any
}
const ProductCard = ({ data }: ProductProp): React.JSX.Element => {
  const category = useSelector((state: any) => { return state.Category.category })
  console.log(data, 'data for products')
  const products: any = [
    {
      id: 1,
      name: 'Laptop',
      price: '20,000',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Flaptop&psig=AOvVaw2-stGYC9ltEnGq0eRQCj07&ust=1707725725513000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNC4gZzsooQDFQAAAAAdAAAAABAE',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'T-Shirt',
      price: '600',
      image: 'https://static.vecteezy.com/system/resources/previews/012/628/220/original/plain-black-t-shirt-on-transparent-background-free-png.png',
      category: 'Cloths'
    },
    {
      id: 3,
      name: 'HeadPhone',
      price: '1000',
      image: 'https://pngfre.com/wp-content/uploads/Headphone-3-1024x677.png',
      category: 'Accessories'
    }
  ]
  const handleAddtoCart = (id:any)=>{
    const token = JSON.parse(localStorage.getItem('userToken'))
    let decode = getDecodeToken(token)
    console.log(decode)
    if(!decode)
    {
     alert('Token required')
    }else
    {
       Addtocart(id,token)
    }
  }
  return (
    <>
      {
        data.
          filter((pro: any) => {
            if (category === '' || category === null || category === 'All') {
              return pro
            }
            else if (pro.category.includes(category)) {
              return pro
            }
          }).
          map((item: any, i: any) => (

            <div
              key={i}
              className="max-w-xs mx-auto mt-4 bg-white rounded overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover object-center" src={item?.image} alt="Product Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item?.name}</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris turpis, fermentum eu eleifend ac, commodo vel est.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-gray-700 font-bold">{item?.price}</span>
                <button onClick={()=>handleAddtoCart(item?._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add To Cart
                </button>
              </div>
            </div>

          ))
      }
    </>

  )
}

export default ProductCard