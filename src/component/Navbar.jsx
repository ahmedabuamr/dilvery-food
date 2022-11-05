import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

export default function Navbar() {
 const [nav, setNav] = React.useState(false)

  return (
    <div className=' max-w-[1640px] flex mx-auto justify-between items-center p-4'>
        {/* left site */}
        <div className=' flex items-center'>
           <div onClick={() => setNav(!nav)} className=' cursor-pointer'>
             <AiOutlineMenu size={30}/>
           </div>
           <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
           <div className=' hidden lg:flex items-center bg-gray-200 p-1 text-[14px] rounded-full'>
            <p className='bg-black text-white p-2 rounded-full'>Dilvery</p>
            <p className='p-1'>Puckup</p>
           </div>
        </div>
        {/* left site */}
         
         {/* search input */}
         <div className='w-[200px] px-2 sm:w-[400px] lg:w-[500px] bg-gray-200 rounded-full flex items-center'>
           <AiOutlineSearch size={20}/>
           <input className='p-2 w-full focus:outline-none bg-transparent' type="text" placeholder='Search input'/> 
         </div>
         {/* search input */}

        <button className=' hidden md:flex items-center text-white rounded-full px-4 bg-black py-2'>
            <BsFillCartFill size={20} className="mr-2"/> Cart
        </button>

         {/* overlay */}
         {
          nav ? 
           <div className= {' bg-black/80 fixed top-0 left-0 w-full h-screen duration-300 z-10'}></div>
           :""
         }

        {/* slider drow menu */}
        <div className= {nav ?' bg-white w-[300px] fixed left-0 p-4 duration-300 top-0 h-screen z-10' : "bg-white w-[300px] fixed left-[-100%] p-4 top-0 h-screen z-10" }>
          <AiOutlineClose onClick={() => setNav(!nav)} size={25} className=' absolute top-4 right-4  cursor-pointer'/>
          <h1 className='text-2xl'>Best <span className='font-bold'>Eats</span></h1>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4'>About</li>
                <li className='text-xl py-4'>About</li>
                <li className='text-xl py-4'>About</li>
                <li className='text-xl py-4'>About</li>
                <li className='text-xl py-4'>About</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}
