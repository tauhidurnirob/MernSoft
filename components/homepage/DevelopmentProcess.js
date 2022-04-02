import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { ProcessData } from './ProcessData'

import showcaseOne from '../../public/we-turn-one.png'
import showcaseTwo from '../../public/we-turn-two.png'
import showcaseThree from '../../public/we-turn-three.png'

const DevelopmentProcess = () => {
    const [isOpen, setIsOpen] = useState(null)

    const toggle = (index) => {
        if (isOpen === index) {
            return setIsOpen(null)
        }
        setIsOpen(index)
    }
    return (
        <div className='custom-container my-10'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1'>
                    <h1 className='title'>
                        We Turn An Idea <br />
                        Into{' '}
                        <span className='text-primary'> Smart Software</span>
                    </h1>
                    <p className='text-paragraphColor font-bold py-5'>
                        We build amazing Web & eCommerce solution, Custom
                        software for Accounts, HRM & more. ... Transform your
                        ideas into custom business applications.
                    </p>
                    <div className='cored-section my-10 '>
                        {ProcessData.map((item, index) => (
                            <div
                                className='processes p-5 my-5 shadow-default bg-white rounded-2xl'
                                key={index}>
                                <div className='flex justify-between'>
                                    <h1 className='text-secondary font-bold text-xl'>
                                        {item.title}
                                    </h1>
                                    <a onClick={() => toggle(index)}>
                                        {isOpen === index ? (
                                            <ChevronDownIcon className='heroIcon' />
                                        ) : (
                                            <ChevronRightIcon className='heroIcon' />
                                        )}
                                    </a>
                                </div>
                                <p className='text-paragraphColor font-bold pt-3'>
                                    {isOpen === index ? item.description : null}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex-1 m-auto'>
                    <div className='flex'>
                        <div className='flex-1 m-5 mb-0'>
                            <span className='mb-5 w-56 float-right'>
                                <Image src={showcaseOne} alt='img' />
                            </span>
                            <Image src={showcaseTwo} alt='img' />
                        </div>
                        <div className='flex-1 relative'>
                            <div className='absolute bottom-0'>
                                <span>
                                    <Image src={showcaseThree} alt='img' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevelopmentProcess
