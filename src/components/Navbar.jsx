import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <ul className='hidden md:flex'>
            <li className='p-4'> 
                <Link to='/'>Home</Link>
            </li>
            <li className='p-4'>
                <Link to='/projects'>Projects</Link>
            </li>
            <li className='p-4'>
                <Link to='/about'>About</Link>
            </li>
            <li className='p-4'>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/'>Home</Link>
            </li>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/projects'>Projects</Link>
            </li>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/about'>About</Link>
            </li>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/contact'>Contact</Link>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar