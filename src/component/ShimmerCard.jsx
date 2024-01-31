import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='w-[300px] h-[354px] bg-gray-300 flex flex-col items-center py-8 rounded-lg'>
        <p className='w-[200px] bg-gray-400 h-[25px]'></p>
        <p className='w-[150px] h-[150px] bg-gray-400 rounded-full my-2'></p>
        <p className='w-[170px] bg-gray-400 h-[20px] my-1'></p>
        <p className='w-[170px] bg-gray-400 h-[18px] my-1'></p>
        <p className='w-[190px] bg-gray-400 h-[14px] my-1'></p>
        <p className='w-[170px] bg-gray-400 h-[14px] my-1'></p>
        <p className='w-[220px] bg-gray-400 h-[14px] my-1'></p>
    </div>
  )
}

export default ShimmerCard