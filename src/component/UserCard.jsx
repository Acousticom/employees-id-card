import React from 'react'

const UserCard = ({user}) => {
    const {name,email,address,phone,company}=user
  return (
    <div className='bg-gradient-to-b from-indigo-500 w-[300px] flex flex-col items-center px-2 py-5 hover:shadow-2xl hover:shadow-gray-600 cursor-pointer rounded-md'>
        <h1 className='text-2xl font-bold text-gray-300'>{company.name}</h1>
        <img src='https://th.bing.com/th/id/OIP.UPZ1-G8gpc5FkNIC2RCWSgHaFj?w=277&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' className='w-[150px] h-[150px] rounded-full border-8 border-orange-600'/>
        
        <h2 className='text-2xl font-semibold'>{name}</h2>
        <p className='text-blue-800 font-semibold text-xl'>Software Developer</p>
        <p><strong>Email-</strong> {email}</p>
        <p><strong>Address-</strong> {address.city}</p>
        <p><strong>Phone-</strong> {phone}</p>
    </div>
  )
}

export default UserCard