import React from 'react'

const ProductDevelopmentCycle = () => {
    return (
        <div className='custom-container my-10'>
            <h1 className='title text-center mb-14'>
                Our Product <span className='text-primary'>Development</span>{' '}
                Cycle
            </h1>
            <img
                className=' mx-auto'
                src='/product-development-cycle.svg'
                alt='img'
            />

            <div className='steps md:w-3/4 w-3/4 mx-auto my-14'>
                {/* step-one */}
                <div className='flex flex-col md:flex-row shadow-default rounded-2xl'>
                    <div className='flex-1 image'>
                        <img
                            className='mx-auto p-5'
                            src='/ProductDevelopmentImage/step-one.svg'
                            alt='img'
                        />
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                            <span className='title px-6 py-4 my-20 mx-auto rounded-full shadow-default'>
                                1
                            </span>
                        </div>
                    </div>
                    <div className='flex-1 details'>
                        <div className='mx-auto p-5'>
                            <h1 className='title text-xl'>Define Your Idea</h1>
                            <p className='custom-paragraph pt-3'>
                                Our experts will connect with you to know how
                                your product will be designed. We do proper
                                planning & project estimations to provide Non
                                Disclosure Agreement (NDA), business proposal,
                                product canvas in this stage.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    className='mx-auto my-5'
                    src='/ProductDevelopmentImage/dots-line.png'
                    alt='img'
                />
                {/* step-two */}
                <div className='flex flex-col md:flex-row shadow-default rounded-2xl'>
                    <div className='flex-1 details'>
                        <div className='mx-auto p-5'>
                            <h1 className='title text-xl'>
                                Opt The Best Solution
                            </h1>
                            <p className='custom-paragraph pt-3'>
                                We provide well crafted solutions to take you to
                                your goals. Our extremely professional experts
                                use Agile approach to develop regular and
                                effective communication. This makes us able to
                                adapt changes and react quickly as per business
                                and user requirements.
                            </p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                            <span className='title px-6 py-4 my-20 mx-auto rounded-full shadow-default'>
                                2
                            </span>
                        </div>
                    </div>
                    <div className='flex-1 image'>
                        <img
                            className='mx-auto p-5'
                            src='/ProductDevelopmentImage/step-two.svg'
                            alt='img'
                        />
                    </div>
                </div>
                <img
                    className='mx-auto my-5'
                    src='/ProductDevelopmentImage/dots-line.png'
                    alt='img'
                />
                {/* step-three */}
                <div className='flex flex-col md:flex-row shadow-default rounded-2xl'>
                    <div className='flex-1 image'>
                        <img
                            className='mx-auto p-5'
                            src='/ProductDevelopmentImage/step-three.svg'
                            alt='img'
                        />
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                            <span className='title px-6 py-4 my-20 mx-auto rounded-full shadow-default'>
                                3
                            </span>
                        </div>
                    </div>
                    <div className='flex-1 details'>
                        <div className='mx-auto p-5'>
                            <h1 className='title text-xl'>
                                Start Your Project
                            </h1>
                            <p className='custom-paragraph pt-3'>
                                Once we identify the best solution as per your
                                requirements, all we need is your presence at
                                the project workshop to provide detailed
                                deliverables on timeline.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    className='mx-auto my-5'
                    src='/ProductDevelopmentImage/dots-line.png'
                    alt='img'
                />
                {/* step-four */}
                <div className='flex flex-col md:flex-row shadow-default rounded-2xl'>
                    <div className='flex-1 details'>
                        <div className='mx-auto p-5'>
                            <h1 className='title text-xl'>Get Product Done</h1>
                            <p className='custom-paragraph pt-3'>
                                Connect with our team to provide regular
                                feedback and to test software functionalities.
                                We opt for Agile methodologies in our work.
                            </p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                            <span className='title px-6 py-4 my-20 mx-auto rounded-full shadow-default'>
                                4
                            </span>
                        </div>
                    </div>
                    <div className='flex-1 image'>
                        <img
                            className='mx-auto p-5'
                            src='/ProductDevelopmentImage/step-four.svg'
                            alt='img'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDevelopmentCycle
