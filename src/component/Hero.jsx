import React from 'react'

export default function Hero() {
  return (
    <div className=' w-full my-4'>
        <div className=' relative max-h-[500px]'>
            <div className=' absolute  max-h-[500px] bg-black/25 flex flex-col justify-center w-full h-full'>
                <h2>The <span className=' text-orange-500'>Best</span></h2>
                <h2> <span className=' text-orange-500'> Food</span> <span>Devliverd</span></h2>
            </div>
            <img className=' w-full max-h-[500px] object-cover' src = "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="..."/>
        </div>
    </div>
  )
}
