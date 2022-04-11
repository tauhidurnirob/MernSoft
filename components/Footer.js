import React from 'react'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'

import socialOne from '../public/socialIcons/facebook.png'
import socialTwo from '../public/socialIcons/twitter.png'
import socialThree from '../public/socialIcons/instagram.png'
import socialFour from '../public/socialIcons/linkedin.png'

const Footer = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(/footer-bg.png)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                overflow: 'hidden',
            }}>
            <div className='custom-container '>
                <div className='flex flex-col md:flex-row py-10'>
                    <div className='flex-1'>
                        <div className='flex'>
                            <div className='flex-1 my-5'>
                                <h1 className='text-xl text-white font-bold'>
                                    About
                                </h1>
                                <div className='flex flex-col text-white opacity-50 links mt-5'>
                                    <a className='my-2' href='#'>
                                        Our Company
                                    </a>
                                    <a className='my-2' href='#'>
                                        MVP
                                    </a>
                                    <a className='my-2' href='#'>
                                        Startup
                                    </a>
                                    <a className='my-2' href='#'>
                                        Careers
                                    </a>
                                    <a className='my-2' href='#'>
                                        Contact Us
                                    </a>
                                    <a className='my-2' href='#'>
                                        Blog
                                    </a>
                                </div>
                            </div>
                            <div className='flex-1 my-5'>
                                <h1 className='text-xl text-white font-bold'>
                                    Services
                                </h1>
                                <div className='flex flex-col text-white opacity-50 links mt-5'>
                                    <a className='my-2' href='#'>
                                        Web Development
                                    </a>
                                    <a className='my-2' href='#'>
                                        Mobile App Development
                                    </a>
                                    <a className='my-2' href='#'>
                                        Android App Development
                                    </a>
                                    <a className='my-2' href='#'>
                                        ios App Development
                                    </a>
                                    <a className='my-2' href='#'>
                                        Game Development
                                    </a>
                                    <a className='my-2' href='#'>
                                        React Development
                                    </a>
                                    <a className='my-2' href='#'>
                                        Flutter App Development
                                    </a>
                                    <a className='my-2' href='#'>
                                        React Native App Development
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                            <div className='flex-1 my-5'>
                                <h1 className='text-xl text-white font-bold'>
                                    Industries
                                </h1>
                                <div className='flex flex-col text-white opacity-50 links mt-5'>
                                    <a className='my-2' href='#'>
                                        Government Apps
                                    </a>
                                    <a className='my-2' href='#'>
                                        Education Web Apps
                                    </a>
                                    <a className='my-2' href='#'>
                                        Beauty & Fashion Apps
                                    </a>
                                    <a className='my-2' href='#'>
                                        HealthCares Web Apps
                                    </a>
                                    <a className='my-2' href='#'>
                                        On Demand Apps
                                    </a>
                                    <a className='my-2' href='#'>
                                        Social Media Web Apps
                                    </a>
                                    <a className='my-2' href='#'>
                                        E-commerce Web Apps
                                    </a>
                                </div>
                            </div>
                            <div className='flex-1 my-5'>
                                <h1 className='text-xl text-white font-bold'>
                                    Portfolio
                                </h1>
                                <div className='flex flex-col text-white opacity-50 links mt-5'>
                                    <a className='my-2' href='#'>
                                        Helix-d
                                    </a>
                                    <a className='my-2' href='#'>
                                        Naturalabs
                                    </a>
                                    <a className='my-2' href='#'>
                                        WSPS
                                    </a>
                                    <a className='my-2' href='#'>
                                        Alphamatch
                                    </a>
                                    <a className='my-2' href='#'>
                                        ThatsGame
                                    </a>
                                    <a className='my-2' href='#'>
                                        Ideal Protion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center md:justify-end'>
                    <span className='my-auto md:mx-auto  text-white font-bold'>
                        &copy;{new Date().getFullYear()} MernSoft | Sitemap
                    </span>
                    <div className='social-icon flex w-28'>
                        <a href='#'>
                            <Image src={socialOne} alt='img' />
                        </a>
                        <a href='#'>
                            <Image src={socialTwo} alt='img' />
                        </a>
                        <a href='#'>
                            <Image src={socialThree} alt='img' />
                        </a>
                        <a href='#'>
                            <Image src={socialFour} alt='img' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
