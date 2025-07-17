import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

function Contact() {
    return (
        <section
            id='contact'
            className='min-h-screen flex items-center justify-center py-20'
        >

            <RevealOnScroll>

                <div className='px-4 w-150'>

                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center '>Get In Touch</h2>

                    <form className='space-y-4'>
                        <div className='relative'>
                            <input type="text" id='name' name='name' required className='w-ful bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:ouline-none focus:border-blue-500 focus:bg-blue-500/5' />
                        </div>
                    </form>
                </div>

            </RevealOnScroll>

        </section>
    )
}

export default Contact