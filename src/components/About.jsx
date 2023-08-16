import React from 'react'
import Laptop from '../Assests/Laptop.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[300px] mx-auto my-4'src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
           <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Me</p>
              <p>Grew up in Seattle, Washington, go to school in the bay area. 
                I am excited about the intersection of AI with the technology we use today. 
                I seek to explore and build on my current knowledge of programming which includes JavaScript, React, and tRPc.
                In my free time I enjoying working out, shooting a tech youtube vid, or building a solar car. 
              </p>
              
        </div>
      </div>
    </div>
  )
}

export default About