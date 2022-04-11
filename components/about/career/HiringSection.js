import React from 'react'
import Image from 'next/image'

import { HiringDataOne, HiringDataTwo } from './HiringSectionData'
const HiringSection = () => {
    return (
        <div id='hiring-section' className='my-10'>
            <div className='custom-container'>
                <h1 className='title text-center'>We’re Hiring!</h1>
                <p className='custom-paragraph text-center pt-5'>
                    A career with MernSoft can offer genuine benefits to you in
                    all terms. If you also want to join our <br /> team; check
                    some current openings and apply. We welcome experienced
                    candidates only.
                </p>

                <div className='mt-10'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='flex-1'>
                            {HiringDataOne.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex shadow-default rounded-2xl p-5 m-5'>
                                    <Image
                                        className='my-auto '
                                        src={item.imgUrl}
                                        alt='img'
                                        width='100'
                                        height='100'
                                    />
                                    <div className='description ml-5 my-auto'>
                                        <h1 className='title text-xl'>
                                            {item.title}
                                        </h1>
                                        <p className='custom-paragraph mt-3'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex-1'>
                            {HiringDataTwo.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex shadow-default rounded-2xl p-5 m-5'>
                                    <Image
                                        className='my-auto '
                                        src={item.imgUrl}
                                        alt='img'
                                        width='100'
                                        height='100'
                                    />
                                    <div className='description ml-5 my-auto'>
                                        <h1 className='title text-xl'>
                                            {item.title}
                                        </h1>
                                        <p className='custom-paragraph mt-3'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HiringSection
