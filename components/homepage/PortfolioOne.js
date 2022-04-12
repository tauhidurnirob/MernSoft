import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'

const PortfolioOne = () => {
    return (
        <div
            id='portfolio-section'
            className='w-full'
            style={{
                backgroundImage: 'url(/portfolio-one-bg.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            <div className='flex flex-col md:flex-row custom-container'>
                <div className='flex-1 md:my-auto my-10'>
                    <div className='our-portfolio py-5'>
                        <span className='title border-2 text-primary border-primary rounded-full px-5 py-3'>
                            Our Portfolio
                        </span>
                    </div>
                    <h1 className='text-secondary font-bold text-3xl py-5'>
                        Lead Chat
                    </h1>
                    <p className='text-paragraphColor font-bold py-5'>
                        This is a full-fledged Firebase Chat Application. With
                        social authentication including Google and Facebook
                        using Firebase, online statuses, great design, and
                        functionality, image support, sound notifications, the
                        ability to create multiple rooms, and much more.
                    </p>
                    <Link href='https://leadchat.netlify.app/'>
                        <a
                            target='_blank'
                            className='flex text-lg font-bold text-primary'>
                            Live Demo
                            <ChevronRightIcon className='w-5 h-5s ml-3 my-auto bg-primary text-white rounded-full   border-2 border-primary' />
                        </a>
                    </Link>
                </div>
                <div className='flex-1 mx-auto'>
                    <img
                        className='w-auto'
                        src='/portfolio-one-mock-ups.png'
                        alt='img'
                    />
                </div>
            </div>
        </div>
    )
}

export default PortfolioOne
