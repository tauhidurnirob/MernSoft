import React from 'react'
import Scroll, { animateScroll as scroll } from 'react-scroll'

const HeroSection = () => {
    const Link = Scroll.Link
    return (
        <div className='custom-container'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1 my-auto'>
                    <h1 className='title'>
                        We are a Group of <br /> Telanted
                        <span className='text-primary'> Developers </span>
                    </h1>
                    <div className='flex py-5'>
                        <Link
                            className='call-to-action font-bold cursor-pointer'
                            to='contactUs-section'
                            offset={-200}
                            smooth={true}
                            duration={1000}>
                            Schedule A Free Consultation
                        </Link>
                    </div>
                </div>
                <div className='flex-1 pl-10 py-10'>
                    <img
                        className='mx-auto'
                        src='/hero-howWeWork.svg'
                        alt='img'
                    />
                </div>
            </div>
            <p></p>
        </div>
    )
}

export default HeroSection
