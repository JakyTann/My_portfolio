import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Navbar = () => {

    const [nav, setNav] = useState(false);
    // const handleFunc = () => setNav(!nav)

    return (
        <nav className='fixed w-full h-[80px] m-auto px-8 flex justify-between items-center text-white bg-[#26252Aff] z-10'>
            <div>
                <h1>JakyTann</h1>
            </div>

            <button className='w-[100px] font-semibold text-lg bg-orange-400 p-2 rounded-xl bg-gradient-to-t from-red-500 to-orange-400'>Resume</button>

            <ul className='hidden md:flex'>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="project" smooth={true} duration={500}>
                        Project
                    </Link>
                </li>
                <li>
                    <Link to="skill" smooth={true} duration={500}>
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Ham */}
            <div onClick={() => setNav(!nav)} className='md:hidden z-10'>{!nav ? <FaBars /> : <FaTimes />}</div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col justify-center items-center h-screen w-full bg-[#26252Aff] '}>
                <li>About</li>
                <li>Project</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>


            {/* Socail icon */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
console.log(onclick)
export default Navbar
