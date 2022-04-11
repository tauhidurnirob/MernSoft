import React from 'react'
import Image from 'next/image'
import weDesign from '../../../public/we-design.png'
const WeDesignSection = () => {
    return (
        <div className='custom-container '>
            <div className='flex flex-col md:flex-row mb-10 md:mb-0'>
                <div className='flex-1 my-auto'>
                    <h1 className='title'>
                        We design and develop{' '}
                        <span className='text-primary'>Apps</span> <br />
                        using latest technology!
                    </h1>
                    <p className='text-paragraphColor font-bold py-10'>
                        When it comes to app development, MernSoft employs an
                        analytical and agile approach. We rely on software
                        development strategies, the latest technologies, and
                        industry’s best practices to design, develop and deploy
                        custom applications. <br /> <br /> Our products and
                        services are specially crafted to meet the demanding
                        requirements of the client and tackle any problem that
                        affects their business in a swift and effective manner.
                    </p>
                </div>
                <div className='flex-1 md:mx-10 mx-0 md:my-auto mt-10'>
                    <Image className='mx-auto' src={weDesign} alt='img' />
                </div>
            </div>
        </div>
    )
}

export default WeDesignSection
