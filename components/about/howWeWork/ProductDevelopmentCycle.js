import React from 'react'
import Image from 'next/image'
import productDevImage from '../../../public/product-development-cycle.svg'
import stepOne from '../../../public/ProductDevelopmentImage/step-one.svg'
import stepTwo from '../../../public/ProductDevelopmentImage/step-two.svg'
import stepthree from '../../../public/ProductDevelopmentImage/step-three.svg'
import stepfour from '../../../public/ProductDevelopmentImage/step-four.svg'
import dots from '../../../public/ProductDevelopmentImage/dots-line.png'
const ProductDevelopmentCycle = () => {
    return (
        <div className='custom-container my-10'>
            <h1 className='title text-center mb-14'>
                Our Product <span className='text-primary'>Development</span>{' '}
                Cycle
            </h1>
            <div className='flex justify-center'>
                <span className=''>
                    <Image width='800' src={productDevImage} alt='img' />
                </span>
            </div>

            <div className='steps md:w-3/4 w-3/4 mx-auto my-14'>
                {/* step-one */}
                <div className='flex flex-col md:flex-row shadow-default rounded-2xl'>
                    <div className='flex-1 image'>
                        <div className='mx-auto p-5'>
                            <Image src={stepOne} alt='img' />
                        </div>
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
                <div className='flex justify-center my-5'>
                    <Image src={dots} alt='img' />
                </div>
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
                        <div className='mx-auto p-5'>
                            <Image src={stepTwo} alt='img' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                    <Image src={dots} alt='img' />
                </div>
                {/* step-three */}
                <div className='flex flex-col md:flex-row shadow-default rounded-2xl'>
                    <div className='flex-1 image'>
                        <div className='mx-auto p-5'>
                            <Image src={stepthree} alt='img' />
                        </div>
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
                <div className='flex justify-center my-5'>
                    <Image src={dots} alt='img' />
                </div>
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
                        <div className='mx-auto p-5'>
                            <Image src={stepfour} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDevelopmentCycle
