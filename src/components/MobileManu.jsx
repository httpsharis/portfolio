import React, { useEffect } from 'react'

function MobileManu({ manuOpen, setManuOpen }) {

    useEffect(() => {
        document.body.style.overflow = manuOpen ? "hidden" : "";
    }, [manuOpen])

    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        bg-[rgba(10,10,10,0.8)]
        ${manuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
                }
    `}
        >
            <button
                onClick={() => setManuOpen(false)}
                className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
                aria-label='Close Manu'
            >
                &times;
            </button>

            {/* Manu */}
            <a
                href="#home"
                onClick={() => setManuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${manuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-5"
                    }
                    `}
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() => setManuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${manuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-5"
                    }
                    `}
            >
                About
            </a>
            <a
                href="#projects"
                onClick={() => setManuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${manuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-5"
                    }
                    `}
            >
                Projects
            </a>
            <a
                href="#contact"
                onClick={() => setManuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${manuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-5"
                    }
                    `}
            >
                Contact
            </a>

        </div>
    )
}

export default MobileManu