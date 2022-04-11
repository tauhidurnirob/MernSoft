import React from 'react'
import Image from 'next/image'
import Scroll, { animateScroll as scroll } from 'react-scroll'

import bannerImage from '../../public/banner-illiustration.svg'

const HeroSection = () => {
    const Link = Scroll.Link
    return (
        <div className='custom-container'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1 my-auto'>
                    <h1 className='title'>
                        Leading
                        <span className='text-primary'>
                            {' '}
                            Software Design & Development{' '}
                        </span>
                        Company Trusted By Brands Accross the Globe
                    </h1>
                    <p className='text-paragraphColor font-bold py-5'>
                        Providing custom software development and IT outsourcing
                        services. Our developers build custom software for
                        individuals, startups, and small to medium business.
                    </p>
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
                    <Image src={bannerImage} alt='img' />
                </div>
            </div>
            <p></p>
        </div>
    )
}

export default HeroSection
