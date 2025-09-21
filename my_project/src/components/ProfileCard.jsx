
import React from 'react'

export default function ProfileCard({ user }) {
  return (
    <div className='bg-white shadow-xl/30 w-160 h-80 rounded-4xl flex justify-center items-center'>
      
      <div>
        <img className='size-52 rounded-full mr-12' src={user.pic} alt="" />
      </div>

      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>{user.name}</h1>
        <h2 className='text-2xl '>{user.title?.toUpperCase() ?? "UX/UI Designer"}</h2>
      </div>
    </div>


  )
}
