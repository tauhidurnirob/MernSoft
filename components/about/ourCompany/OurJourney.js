import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Scroll, { animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import ourJourneyImage from '../../../public/ourJourney.jpg'
const OurJourney = () => {
    const Link = Scroll.Link
    return (
        <div className='custom-container'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1'>
                    <Image
                        className='my-auto mx-auto'
                        src={ourJourneyImage}
                        alt='img'
                    />
                </div>
                <div className='flex-1 md:my-auto my-10 md:mx-10 mx-0'>
                    <h1 className='title'>
                        Our journey Ups & <br />
                        Downs in the{' '}
                        <span className='text-primary'>industry</span>
                    </h1>

                    <Link
                        className='call-to-action font-bold inline-flex cursor-pointer my-10'
                        to='contactUs-section'
                        smooth={true}
                        offset={-200}
                        duration={1000}>
                        Schedule A Free Consultation
                        <ChevronRightIcon className='heroIcon ml-3 border-white' />
                    </Link>

                    <p className='custom-paragraph'>
                        MernSoft has been a part of the web & mobile application
                        development scene for over a decade. We have witnessed
                        changes, have provoked them, and changed ourselves with
                        the flow of time. To stay at the forefront of
                        innovation, we leverage sustained advancements, process
                        orientation, and R&D investments. MernSoft has
                        established itself as one of the best in the region,
                        with a wide array of products and services that are
                        globally acclaimed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurJourney
