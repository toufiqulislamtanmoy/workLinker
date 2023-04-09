import './Header.css'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-[#F9F9FF]'>

            <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    {/* Logo Section */}
                    <Link to='/' className='inline-flex items-center'>
                        <h4 className='font-bold text-3xl'>WorkLinker</h4>
                    </Link>

                    {/* Nav Items Section */}
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'text-[#7E90FE]' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/statistic'
                                className={({ isActive }) => (isActive ? 'text-[#7E90FE]' : '')}
                            >
                                Statistic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/appliedjobs'
                                className={({ isActive }) => (isActive ? 'text-[#7E90FE]' : '')}
                            >
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blogs'
                                className={({ isActive }) => (isActive ? 'text-[#7E90FE]' : '')}
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                    {/* Applying start */}
                    <Link
                        to='/'
                        className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Start Applying
                    </Link>

                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-5 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>
                                                <h4>WorkLinker</h4>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link to='/' className='default'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/books'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Books
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/about'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/apply'
                                                    className='mt-11 bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                                >
                                                    Start Applying
                                                </Link>
                                            </li>

                                        </ul>
                                    </nav>


                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;