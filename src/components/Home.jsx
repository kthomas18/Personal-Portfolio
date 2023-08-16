import React from 'react'

const Home = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-6xl'>Hi, my name is Thomas</p>
            <div>
                <p className='md:text-4xl sm:text-1xl text-xl py-4'>
                    I am a sophmore studying computer science at Stanford University
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home