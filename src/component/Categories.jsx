import React from 'react'
import { categories } from '../data'
export default function Categories() {
  return (
    <div className='max-w-[1640px] px-4 py-12 mx-auto'>
        <h1 className='font-bold text-4xl text-orange-600 text-center'>Top Rated Menu Items</h1>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-6 py-6'>
            {
                categories.map((item, index)=>(
                    <div key={index} className= "bg-gray-200 rounded-lg p-4 flex items-center justify-between hover:scale-105 duration-300 cursor-pointer">
                        <h1 className='font-bold sm:text-xl'>{item.name}</h1>
                        <img className='w-20' src={item.image} alt ={item.name}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
