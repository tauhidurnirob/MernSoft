import React from 'react'
import Slider from 'react-slick'

// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ClientsLogo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000,
    centerMode: true,
    variableWidth: true
  }
  return (
    <div className='my-10 overflow-hidden'>
      <h1 className='text-center text-3xl font-bold text-primary py-10'>
        Our <span className='text-secondary'>Clients</span>
      </h1>
      <Slider {...settings}>
        <div>
          <img className='w-32' src='/clients/clientslogo-one.svg' alt='img' />
        </div>
        <div>
          <img className='w-32' src='/clients/clientslogo-two.svg' alt='img' />
        </div>
        <div>
          <img
            className='w-32'
            src='/clients/clientslogo-three.svg'
            alt='img'
          />
        </div>
        <div>
          <img className='w-32' src='/clients/clientslogo-four.svg' alt='img' />
        </div>
        <div>
          <img className='w-32' src='/clients/clientslogo-five.svg' alt='img' />
        </div>
        <div>
          <img className='w-32' src='/clients/clientslogo-six.svg' alt='img' />
        </div>
      </Slider>
    </div>
  )
}
export default ClientsLogo
