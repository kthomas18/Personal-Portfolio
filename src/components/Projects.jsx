import React from 'react'
import Laptop from '../Assests/Laptop.jpg'

const Projects = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Laptop} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>Personal Website             </h2>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Live Demo</button>
            </div>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Laptop} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>AI Checkerboard Game</h2>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Live Demo</button>
            </div>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Laptop} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>0 to Prod Ticket-Selling Website</h2>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Live Demo</button>
            </div>
            
        </div>
    </div>
  )
}

export default Projects