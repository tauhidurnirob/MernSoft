import React from 'react'
import Image from 'next/image'
import Scroll, { animateScroll as scroll } from 'react-scroll'

import blankSpace from '../../../public/ourDevProcessIcon/blank-space.png'
import stepOne from '../../../public/ourDevProcessIcon/step-one.png'
import stepTwo from '../../../public/ourDevProcessIcon/step-two.png'
import stepThree from '../../../public/ourDevProcessIcon/step-three.png'
import stepFour from '../../../public/ourDevProcessIcon/step-four.png'
import stepFive from '../../../public/ourDevProcessIcon/step-five.png'
import stepSix from '../../../public/ourDevProcessIcon/step-six.png'
import line from '../../../public/ourDevProcessIcon/middle-line.png'
const OurDevProcess = () => {
    return (
        <div className='custom-container'>
            <div className='my-10'>
                <h1 className='title text-center'>
                    Our <span className='text-primary'>Development</span>{' '}
                    Process
                </h1>
                <p className='custom-paragraph text-center mt-5'>
                    {"We've"} iterated, innovated, and developed a <br />{' '}
                    process that drives efficiencies for all stakeholders
                </p>
            </div>
            <div className='steps'>
                <div className='flex mx-auto flex-col md:flex-row'>
                    <div className='flex-auto mx-auto'>
                        {/* item two */}
                        <div className='mx-auto'>
                            <Image src={blankSpace} alt='icon' />
                        </div>

                        <div className='flex'>
                            <p className='custom-paragraph mt-14 text-right'>
                                Our App Developers outline a project <br /> plan
                                after understanding your business objectives.
                            </p>
                            <h1
                                className='font-bold px-4 py-2 rounded-full h-full'
                                style={{
                                    color: '#59D1F6',
                                    border: '2px solid #59D1F6',
                                }}>
                                Planning
                            </h1>
                            <div className='w-20 h-20'>
                                <Image src={stepTwo} alt='icon' />
                            </div>
                        </div>
                        {/* item four */}
                        <div className='mx-auto'>
                            <Image src={blankSpace} alt='icon' />
                        </div>

                        <div className='flex'>
                            <p className='custom-paragraph mt-14 text-right'>
                                As an app development company, we follow
                                <br />
                                an agile application development methodology.
                            </p>
                            <h1
                                className='font-bold px-4 py-2 rounded-full h-full'
                                style={{
                                    color: '#C66F5E',
                                    border: '2px solid #C66F5E',
                                }}>
                                Development
                            </h1>
                            <div className='w-20 h-20'>
                                <Image src={stepFour} alt='icon' />
                            </div>
                        </div>
                        {/* item six */}
                        <div className='mx-auto'>
                            <Image src={blankSpace} alt='icon' />
                        </div>

                        <div className='flex'>
                            <p className='custom-paragraph mt-14 text-right'>
                                We carry out a final deployment even <br />{' '}
                                after fully developing your application. <br />{' '}
                                Our company also provides support and <br />{' '}
                                maintenance even after application deployment.
                            </p>
                            <h1
                                className='font-bold px-4 py-2 rounded-full h-full'
                                style={{
                                    color: '#FF9900',
                                    border: '2px solid #FF9900',
                                }}>
                                Delivery
                            </h1>
                            <div className='w-20 h-20'>
                                <Image src={stepSix} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='md:flex-auto md:block hidden'>
                        <Image src={line} alt='img' />
                    </div>
                    {/* // right side */}
                    <div className='flex-auto mx-auto'>
                        {/* // item one */}
                        <div className='flex md:mt-0 mt-32'>
                            <div className='w-20 h-20'>
                                <Image src={stepOne} alt='icon' />
                            </div>
                            <h1
                                style={{
                                    color: '#E8505B',
                                    border: '2px solid #E8505B',
                                }}
                                className='font-bold px-4 py-2 rounded-full h-full'>
                                Consulting
                            </h1>
                            <p className='custom-paragraph mt-14'>
                                Our mobile app development team evaluates <br />
                                multiple range of solutions.
                            </p>
                        </div>
                        {/* item-three */}
                        <div className='mx-auto'>
                            <Image src={blankSpace} alt='icon' />
                        </div>
                        <div className='flex'>
                            <div className='w-20 h-20'>
                                <Image src={stepThree} alt='icon' />
                            </div>
                            <h1
                                style={{
                                    color: '#4DD59E',
                                    border: '2px solid #4DD59E',
                                }}
                                className='font-bold px-4 py-2 rounded-full h-full'>
                                Prototyping
                            </h1>
                            <p className='custom-paragraph mt-14'>
                                We create frameworks and define network,
                                <br /> database and UI layers in this stage.
                            </p>
                        </div>
                        {/* item-five */}
                        <div className='mx-auto'>
                            <Image src={blankSpace} alt='icon' />
                        </div>
                        <div className='flex'>
                            <div className='w-20 h-20'>
                                <Image src={stepFive} alt='icon' />
                            </div>
                            <h1
                                style={{
                                    color: '#819BF9',
                                    border: '2px solid #819BF9',
                                }}
                                className='font-bold px-4 py-2 rounded-full h-full'>
                                Quality
                            </h1>
                            <p className='custom-paragraph mt-14'>
                                We have expert testers that do functional,
                                <br /> integration, and performance testing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDevProcess
