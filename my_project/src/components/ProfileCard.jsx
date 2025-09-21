
import React from 'react'

export default function ProfileCard({name,title,pic}) {
  return (
    <div className='bg-white shadow-xl/30 w-200 h-100 rounded-4xl flex justify-center items-center'>
      
      <div>
          <img className='size-52 rounded-full mr-12' src={pic} alt="" />
        </div>

        <div className='mb-8'>
          <h1 className='text-3xl font-bold'>{name}</h1>
          <h2 className='text-2xl '>{title.toUpperCase()}</h2>
        </div>
      </div>
      
  
  )
}
