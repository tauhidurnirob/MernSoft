import React from 'react'
import Image from 'next/image'

import careerImg from '../../../public/career-illustration.svg'

import Scroll, { animateScroll as scroll } from 'react-scroll'
const HeroSection = () => {
    const Link = Scroll.Link
    return (
        <div className='custom-container'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1 my-auto'>
                    <h1 className='title'>
                        Career & Culture at
                        <br />
                        <span className='text-primary'> MernSoft </span>
                    </h1>

                    <div className='flex py-5'>
                        <Link
                            className='underline text-primary cursor-pointer'
                            to='hiring-section'
                            offset={-200}
                            smooth={true}
                            duration={1000}>
                            View Current Openings
                        </Link>
                    </div>
                </div>
                <div className='flex-1 pl-10 py-10'>
                    <Image className='mx-auto' src={careerImg} alt='img' />
                </div>
            </div>
            <p></p>
        </div>
    )
}

export default HeroSection
