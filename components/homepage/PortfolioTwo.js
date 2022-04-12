import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'
import mockUpTwo from '../../public/portfolio-two-mockup.png'
const PortfolioOne = () => {
    return (
        <div
            className='w-full'
            style={{
                backgroundImage: 'url(/portfolio-two.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            <div className='flex flex-col md:flex-row custom-container'>
                <div className='flex-1 md:my-auto my-10'>
                    <div className='our-portfolio py-5'>
                        <span className='title text-primary border-2 border-primary rounded-full px-5 py-3'>
                            Our Portfolio
                        </span>
                    </div>
                    <h1 className='text-secondary font-bold text-3xl py-5'>
                        NextLens
                    </h1>
                    <p className='text-paragraphColor font-bold py-5'>
                        NextLens is a E-commerce application built with Nextjs
                        and Stripe. This app allows users to create an account,
                        add products to their cart, and checkout. The app also
                        allows users to create a profile, add a photo, and add a
                        bio. The app also allows users to create a review for a
                        product and add a rating.
                    </p>
                    <Link href='https://next-lens-one.vercel.app/'>
                        <a
                            target='_blank'
                            className='flex text-lg font-bold text-primary'>
                            Live Demo
                            <ChevronRightIcon className='w-5 h-5 ml-3 my-auto bg-primary text-white rounded-full   border-2 border-primary' />
                        </a>
                    </Link>
                </div>
                <div className='flex-1 mx-auto'>
                    <img
                        className='w-auto'
                        src='/portfolio-two-mockup.png'
                        alt='img'
                    />
                </div>
            </div>
        </div>
    )
}

export default PortfolioOne
