import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../Assests/logo.png'
import icon from '../Assests/icon.png'

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

  return (
    <div className='flex justify-between items-center h-24 max-w-[1400px] mx-auto px-4 text-white'>
        <img className='mx-[-10]' src={logo} alt="" />
        <ul className='hidden md:flex'>
            <li className='p-4 text-2xl'> 
                <Link to='/'>Home</Link>
            </li>
            <li className='p-4 text-2xl'>
                <Link to='/projects'>Projects</Link>
            </li>
            <li className='p-4 text-2xl'>
                <Link to='/about'>About</Link>
            </li>
            <li className='p-4 text-2xl'>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className='mx-[-10]' src={logo} alt="" />
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/projects'>
                    Projects
                </Link>
            </li>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/about'>
                    About
                </Link>
            </li>
            <li className='p-4 border-b border-gray-500'>
                <Link to='/contact'>
                    Contact
                </Link>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar