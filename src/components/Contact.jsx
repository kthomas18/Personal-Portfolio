import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-4 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold my-10'> What's Next? </h1>
                <p> I am always interested in new projects and opportunities or discussing my past work! The best way to contact me is by email, or shoot me a message on Linkedin!</p>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <a href="https://www.linkedin.com/in/thomaskebede">
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto ml-4 px-6 py-3 text-black'>Notify Me</button>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Newsletter