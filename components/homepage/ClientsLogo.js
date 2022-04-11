import React, { Component } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import clientOne from '../../public/clients/clientslogo-one.svg'
import clientTwo from '../../public/clients/clientslogo-two.svg'
import clientThree from '../../public/clients/clientslogo-three.svg'
import clientFour from '../../public/clients/clientslogo-four.svg'
import clientFive from '../../public/clients/clientslogo-five.svg'
import clientSix from '../../public/clients/clientslogo-six.svg'
import clientSeven from '../../public/clients/clientslogo-seven.svg'
import clientEight from '../../public/clients/clientslogo-eight.svg'

// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class ClientsLogo extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: 'linear',
        }
        return (
            <div className='overflow-hidden my-10'>
                <h1 className='text-center title my-10'>
                    Our <span className='text-primary'>Clients</span>
                </h1>
                <Slider {...settings}>
                    <div>
                        <h3>
                            <Image className='w-52' src={clientOne} alt='img' />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image className='w-52' src={clientTwo} alt='img' />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                className='w-52'
                                src={clientThree}
                                alt='img'
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                className='w-52'
                                src={clientFour}
                                alt='img'
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                className='w-52'
                                src={clientFive}
                                alt='img'
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image className='w-52' src={clientSix} alt='img' />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                className='w-52'
                                src={clientSeven}
                                alt='img'
                            />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <Image
                                className='w-52'
                                src={clientEight}
                                alt='img'
                            />
                        </h3>
                    </div>
                </Slider>
            </div>
        )
    }
}
