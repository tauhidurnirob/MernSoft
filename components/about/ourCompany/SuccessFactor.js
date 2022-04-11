import React from 'react'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Scroll, { animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import successFactorImage from '../../../public/successFactorsChart.png'

const successFactor = () => {
    const Link = Scroll.Link
    return (
        <div className='custom-container'>
            <h1 className='title text-center'>
                What makes <span className='text-primary'>us different</span>{' '}
                <br /> from the competition
            </h1>
            <div className='flex flex-col md:flex-row mt-10'>
                <div className='flex-1'>
                    <h1 className='text-secondary text-2xl font-semibold mt-10 mb-5'>
                        Our Key Success Factors
                    </h1>
                    <p className='custom-paragraph'>
                        We hire only the most most inquisitive minds, driven by
                        critical thinking.
                    </p>
                    <div className='factors my-10'>
                        <li className='list-none flex text-secondary font-bold my-5'>
                            <CheckIcon className='heroIcon mr-3' />
                            Data Driven Decision Making
                        </li>
                        <li className='list-none flex text-secondary font-bold my-5'>
                            <CheckIcon className='heroIcon mr-3' />
                            User centric Approach
                        </li>
                        <li className='list-none flex text-secondary font-bold my-5'>
                            <CheckIcon className='heroIcon mr-3' />
                            Agile processes
                        </li>
                        <li className='list-none flex text-secondary font-bold my-5'>
                            <CheckIcon className='heroIcon mr-3' />
                            Adoption of the latest technologies
                        </li>
                        <li className='list-none flex text-secondary font-bold my-5'>
                            <CheckIcon className='heroIcon mr-3' />
                            Lean operations, but heavy R&D
                        </li>
                    </div>
                    <Link
                        className='call-to-action font-bold inline-flex cursor-pointer my-10'
                        to='contactUs-section'
                        smooth={true}
                        offset={-200}
                        duration={1000}>
                        Request An Estimate
                        <ChevronRightIcon className='heroIcon ml-3 border-white' />
                    </Link>
                </div>
                <div className='flex-1 m-auto'>
                    <Image src={successFactorImage} alt='img' />
                </div>
            </div>
        </div>
    )
}

export default successFactor
