import { Heart, HeartPulse, Soup } from 'lucide-react'
import React from 'react'

const RecipeCard = () => {
  return (
    <div className='flex flex-col rounded-md bg-[#cde5a5] overflow-hidden p-3 relative'>
    <a href="#" className='relative h-32'>
      <img src="" alt="" className='rounded-md w-full object-cover cursor-pointer'/>
      <div className='absolute bottom-2 left-2 rounded-full p-1 cursor-pointer bg-white  flex items-center gap-1 text-sm'><Soup/> 4 serving</div>
      <div className='absolute top-1 right-2 rounded-full p-1 cursor-pointer bg-white'><Heart size={20} className='hover:fill-red-500 hover:text-red-500'/></div>
    </a>
    <div className='flex mt-1'>
      <p className='fonr-bold tracking-wide'>Rosted chicken</p>
    </div>
    <p className='my-2'>Turkish Kitchen</p>
    <div className='flex gap-2 mt-auto'>
      <div className='flex gap-1 bg-[#d6f497]' items-center p-1 rounded-md>
        <HeartPulse size={16}/>
        <span className='text-sm font-semibold'>Gluten-free</span>
      </div>
      <div className='flex gap-1 bg-[#d6f497]' items-center p-1 rounded-md>
        <HeartPulse size={16}/>
        <span className='text-sm font-semibold'>Gluten-free</span>
      </div>
     
    </div>
  </div>
  )
}

export default RecipeCard
