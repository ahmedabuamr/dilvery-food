import React from 'react'
import {data} from '../data'

export default function Food() {
    const [foods , setFoods] = React.useState(data)

    const filterType = (category) => {
        setFoods(
          data.filter((item) => {
            return item.category === category;
          })
        );
      };
    
      //   Filter by price
      const filterPrice = (price) => {
        setFoods(
          data.filter((item) => {
            return item.price === price;
          })
        );
      };
  return (
    <div className=' max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className=' text-orange-600 text-4xl mb-6 font-bold text-center'>
            Top Rated Menu Items
        </h1>
        <div className=' flex flex-col lg:flex-row justify-between'>
           <div>
             <p className=' font-bold text-gray-800'>Filter Type</p>
           <div className='flex justfiy-between flex-wrap'>
             <button  onClick={() => setFoods(data)} className='btn-food '>All</button>
             <button  onClick={() => filterType('burger')} className='btn-food'>Burgers</button>
             <button onClick={() => filterType('pizza')} className='btn-food '>Pizza</button>
             <button  onClick={() => filterType('salad')} className='btn-food '>Salads</button>
             <button  onClick={() => filterType('chicken')} className='btn-food '>Checken</button>
           </div>
           </div>

           <div>
             <p className=' font-bold text-gray-800'>Filter Price</p>
          
           <div className='flex justify-between max-w-[390px] w-full'>
             <button   onClick={() => filterPrice('$')} className=' btn-food '>$</button>
             <button   onClick={() => filterPrice('$$')} className='btn-food'>$$</button>
             <button  onClick={() => filterPrice('$$$')} className='btn-food '>$$$</button>
             <button   onClick={() => filterPrice('$$$$')} className='btn-food '>$$$$</button>
           </div>
           </div>
        </div>

        {/* food category */}
        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4  mt-5'>
          {
            foods?.map((item, index)=>(
                <div key={index} className ="shadow-lg rounded-lg hover:scale-105 duration-300 ">
                    <img className='w-full max-h-[200px] rounded-t-lg object-cover'  src={item.image} alt={item.name}/>
                    <div className=' flex justify-between px-2 py-4'>
                        <p>{item.name}</p>
                        <span className=' bg-orange-600 text-white font-bold p-2 rounded-full'>{item.price}</span>
                    </div>
                </div>
            ))
          }
        </div>
    </div>
  )
}
