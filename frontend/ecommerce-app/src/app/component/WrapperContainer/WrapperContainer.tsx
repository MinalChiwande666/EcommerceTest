import React from 'react'

interface WrapperProp{
    children:React.ReactNode
}
const WrapperContainer = ({children}:WrapperProp):React.JSX.Element => {
  return (
    <div className='w-full bg-black h-[100vh] flex items-center justify-center text-white'>
        {children}
    </div>
  )
}

export default WrapperContainer