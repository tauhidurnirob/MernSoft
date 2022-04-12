import React from 'react'

const WhyMernSoft = () => {
    return (
        <div>
            <div className='custom-container'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1'>
                        <div className='lg:w-2/3 w-3/3 m-auto'>
                            <h1 className='title text-center'>
                                Why{' '}
                                <span className='text-primary'>MernSoft?</span>
                            </h1>
                            <p className='custom-paragraph my-10'>
                                Are you looking forward to joining a team of
                                passionate, innovative and dedicated
                                professionals? Join us and unlock a new world of
                                opportunities for career growth. We are a
                                vibrant and forward-thinking organization of
                                proactive individuals who love to accept
                                challenges and aim to achieve new milestones
                                with exciting ideas and a result-oriented
                                approach.
                            </p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className=' lg:w-2/3 w-3/3 m-auto'>
                            <img
                                width='400'
                                height='400'
                                src='/whyMernSoft.jpg'
                                alt='img'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <img className='w-full' src='/company-showcase.jpg' alt='img' />
            </div>
        </div>
    )
}

export default WhyMernSoft
