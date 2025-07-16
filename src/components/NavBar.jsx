import React, { useEffect } from 'react'

function NavBar({ manuOpen, setManuOpen }) {

    useEffect(() => {
        document.body.style.overflow = manuOpen ? "hidden" : "";
    }, [manuOpen])

    return (
        <nav className='fixed top-0 z-40 w-full bg-[rgba(10,10,10,0.88)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <a href="#home" className='font-mono text-xl text-white font-bold'>
                        haris<span className='text-blue-500'>.dev</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <a href="#home" className='text-gray-300 hover:text-white transition-color'>Home</a>
                        <a href="#about" className='text-gray-300 hover:text-white transition-color'>About</a>
                        <a href="#projects" className='text-gray-300 hover:text-white transition-color'>Projects</a>
                        <a href="#contact" className='text-gray-300 hover:text-white transition-color'>Contact</a>
                    </div>

                    {/* Hamburger Mobile Menu */}
                    <div
                        className='w-7 h-5 relative cursor-pointer z-40 md:hidden'
                        onClick={() => setManuOpen((prev)=> !prev)}
                    >
                        &#9776;
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar