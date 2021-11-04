import React, {Component} from 'react'
import Slider from 'react-slick'

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
      cssEase: 'linear'
    }
    return (
      <div className='overflow-hidden my-10'>
        <h1 className='text-center title my-10'>
          Our <span className='text-primary'>Clients</span>
        </h1>
        <Slider {...settings}>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-one.svg'
                alt='img'
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-two.svg'
                alt='img'
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-three.svg'
                alt='img'
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-four.svg'
                alt='img'
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-five.svg'
                alt='img'
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-six.svg'
                alt='img'
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-seven.svg'
                alt='img'
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className='w-52'
                src='/clients/clientslogo-eight.svg'
                alt='img'
              />
            </h3>
          </div>
        </Slider>
      </div>
    )
  }
}
