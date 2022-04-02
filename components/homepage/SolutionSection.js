import React from 'react'

const SolutionSection = () => {
    return (
        <div>
            <div className='custom-container'>
                <div className='flex flex-col-reverse md:flex-row'>
                    <div
                        className='flex-1 md:m-2 m-0'
                        style={{
                            backgroundImage: 'url(/solution-bg.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top',
                        }}>
                        <div className='flex flex-col sm:flex-row'>
                            <div className='flex-1 md:my-auto my-0'>
                                <div className='icon-card'>
                                    <img
                                        className='icon-card-image'
                                        src='/solutionIcons/solution-icon-two.png'
                                        alt='img'
                                    />
                                    <h1 className='icon-card-title'>
                                        On Time <br /> Delivery
                                    </h1>
                                </div>
                                <div className='icon-card md:mb-8 mb-0'>
                                    <img
                                        className='icon-card-image'
                                        src='/solutionIcons/solution-icon-four.png'
                                        alt='img'
                                    />
                                    <h1 className='icon-card-title'>
                                        Data <br /> Security
                                    </h1>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div className='icon-card'>
                                    <img
                                        className='icon-card-image'
                                        src='/solutionIcons/solution-icon-one.png'
                                        alt='img'
                                    />
                                    <h1 className='icon-card-title'>
                                        Effective <br /> Communication
                                    </h1>
                                </div>
                                <div className='icon-card'>
                                    <img
                                        className='icon-card-image'
                                        src='/solutionIcons/solution-icon-three.png'
                                        alt='img'
                                    />
                                    <h1 className='icon-card-title'>
                                        Quality <br /> Work
                                    </h1>
                                </div>
                                <div className='icon-card'>
                                    <img
                                        className='icon-card-image'
                                        src='/solutionIcons/solution-icon-five.png'
                                        alt='img'
                                    />
                                    <h1 className='icon-card-title'>
                                        Talented <br /> Developers
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 md:m-2 m-0'>
                        <h1 className='title'>
                            Dynamic and Futuristic <br /> Web Solutions by{' '}
                            <span className='text-primary'>MernSoft</span>
                        </h1>
                        <p className='text-paragraphColor font-bold py-5'>
                            We are Bangladesh’s top-rated mobile application
                            developer. With hundreds of chart-topping
                            applications delivered to startups, businesses and
                            enterprises worldwide, we have emerged as pioneers
                            of digital transformation and tactical disruption.
                            Our experts have many years of skills and knowledge
                            under their belt, which enables them to produce
                            top-notch business solutions that deliver remarkable
                            digital experiences. <br /> <br />
                        </p>
                        <div className='flex flex-col sm:flex-row'>
                            <div className='flex-1'>
                                <div className='icon-card md:mb-8 mb-0'>
                                    <img
                                        className='icon-card-image'
                                        src='/solutionIcons/solution-icon-six.png'
                                        alt='img'
                                    />
                                    <h1 className='icon-card-title'>
                                        Technical <br /> Proficiency
                                    </h1>
                                </div>
                            </div>
                            <div className='flex-1 md:mt-44 mt-0'>
                                <div className='icon-card md:mb-8 mb-0'>
                                    <img
                                        className='icon-card-image'
                                        src='/solutionIcons/solution-icon-seven.png'
                                        alt='img'
                                    />
                                    <h1 className='icon-card-title'>
                                        Industry-Specific <br /> Experience
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionSection
