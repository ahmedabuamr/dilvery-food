import React from 'react'

export default function HeadineCard() {
  return (
    <div className='max-w-[1640px] p-4 py-12 grid md:grid-cols-3 gap-6 mx-auto'>
        <div className=' rounded-xl relative'>
            <div className=' absolute bg-black/30 w-full h-full text-white rounded-xl'>
                <p className=' lg:font-bold lg:text-2xl px-2 pt-4'>Lorem, ipsum dolor.</p>
                <p className='px-2'>Lorem, ipsum.</p>
                <button className='  bg-white border-white mx-2 text-black p-2 px-4 rounded-full absolute bottom-4'>Order now</button>
            </div>
            <img className='w-full max-h-[160px] md:max-h-[200px] rounded-xl object-cover' src = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "..."/>
        </div>
        <div className=' rounded-xl relative'>
            <div className=' absolute bg-black/30 w-full h-full text-white rounded-xl'>
                <p className=' lg:font-bold lg:text-2xl px-2 pt-4'>Lorem, ipsum dolor.</p>
                <p className='px-2 '>Lorem, ipsum.</p>
                <button className='  bg-white border-white mx-2 text-black p-2 px-4 rounded-full absolute bottom-4'>Order now</button>
            </div>
            <img className='w-full max-h-[160px] md:max-h-[200px] rounded-xl object-cover' src = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "..."/>
        </div>
        <div className=' rounded-xl relative'>
            <div className=' absolute bg-black/30 w-full h-full text-white rounded-xl'>
                <p className=' lg:font-bold lg:text-2xl px-2 pt-4'>Lorem, ipsum dolor.</p>
                <p className='px-2 '>Lorem, ipsum.</p>
                <button className='  bg-white border-white mx-2 text-black p-2 px-4 rounded-full absolute bottom-4'>Order now</button>
            </div>
            <img className='w-full max-h-[160px] md:max-h-[200px] rounded-xl object-cover' src = "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "..."/>
        </div>
       
    </div>
  )
}
