import React from 'react'
import Laptop from '../Assests/Laptop.jpg'
import download from '../Assests/download.jpg'
import myweb from '../Assests/myweb.png'
import weather from '../Assests/weather.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    }
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-screen-xl mx-auto md:grid-cols-3 gap-8'>
            <Carousel responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}> 
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-10 my-7 rounded-lg hover:scale-105 duration-300'>
                <img className='w-32 h-32 mx-auto mt-[-3rem] bg-white'src={myweb} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>Personal Website</h2>
                <button className='bg-[#00df9a] w-full rounded-md font-medium my-6 mx-auto py-3 text-black' title='Click to see live demo' >Live Demo</button>
            </div>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-10 my-7 rounded-lg hover:scale-105 duration-300'>
                <img className='w-32 h-32 mx-auto mt-[-3rem] bg-white'src={download} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>AI Checkerboard Game</h2>
                <button className='bg-[#00df9a] w-full rounded-md font-medium my-6 mx-auto py-3 text-black' title='Click to see live demo'>Live Demo</button>
            </div>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-10 my-7 rounded-lg hover:scale-105 duration-300'>
                <img className='w-32 h-32 mx-auto mt-[-3rem] bg-white'src={Laptop} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>Ticket-Selling Website</h2>
                <button className='bg-[#00df9a] w-full rounded-md font-medium my-6 mx-auto py-3 text-black' title='Click to see live demo'>Live Demo</button>
            </div>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-10 my-7 rounded-lg hover:scale-105 duration-300'>
                <img className='w-32 h-32 mx-auto mt-[-3rem] bg-white'src={weather} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>Executable Weather Map</h2>
                <button className='bg-[#00df9a] w-full rounded-md font-medium my-6 mx-auto py-3 text-black' title='Click to see live demo'>Live Demo</button>
            </div>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-10 my-7 rounded-lg hover:scale-105 duration-300'>
                <img className='w-32 h-32 mx-auto mt-[-3rem] bg-white'src={weather} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>Executable Weather Map</h2>
                <button className='bg-[#00df9a] w-full rounded-md font-medium my-6 mx-auto py-3 text-black' title='Click to see live demo'>Live Demo</button>
            </div>
            <div className='w-full shadow-xl bg-slate-100 flex flex-col p-10 my-7 rounded-lg hover:scale-105 duration-300'>
                <img className='w-32 h-32 mx-auto mt-[-3rem] bg-white'src={weather} alt="" />
                <h2 className='text-4xl font-bold text-center py-8'>Executable Weather Map</h2>
                <button className='bg-[#00df9a] w-full rounded-md font-medium my-6 mx-auto py-3 text-black' title='Click to see live demo'>Live Demo</button>
            </div>
            </Carousel>
        </div>
    </div>
  )
}
export default Projects