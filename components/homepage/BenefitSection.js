import React from 'react'
import { Benefits } from './BenefitsData'

const BenefitSection = () => {
    return (
        <div className='custom-container py-10  my-10'>
            <div
                style={{
                    backgroundImage: 'url(/benefits-bg.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                <h1 className='title py-10 text-center '>Benefits</h1>
                <div className='flex flex-col md:flex-row'>
                    {Benefits.map((benefit) => (
                        <div
                            className='flex-1 bg-white shadow-default m-5 p-10 rounded-3xl'
                            key={benefit.id}>
                            <img
                                src={benefit.imageUrl}
                                className='w-28'
                                alt='img'
                            />
                            <h3 className='text-2xl title py-8'>
                                {benefit.title}
                            </h3>
                            <p className='text-paragraphColor font-bold'>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitSection
