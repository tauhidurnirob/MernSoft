import React from 'react'
import {Services} from './servicesData'
import {ChevronRightIcon} from '@heroicons/react/solid'
import Scroll from 'react-scroll'

const Element = Scroll.Element

const ourServices = () => {
  return (
    <Element id='service-section'>
      <div className='custom-container'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1 services-icons'>
            <div
              className='flex flex-col sm:flex-row'
              style={{
                backgroundImage: 'url(/services-bg.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top'
              }}>
              <div className='flex-1'>
                {' '}
                <div className='icon-card'>
                  <img
                    className='icon-card-image'
                    src='/servicesIcons/colorMode.png'
                    alt='icon'
                  />

                  <h1 className='icon-card-title'>
                    UI / UX <br />
                    Design
                  </h1>
                </div>
                <div className='icon-card'>
                  <img
                    className='icon-card-image'
                    src='/servicesIcons/webDevelopment.png'
                    alt='icon'
                  />

                  <h1 className='icon-card-title'>
                    Web <br />
                    Development
                  </h1>
                </div>
              </div>
              <div className='flex-1 md:mt-24 mt-0'>
                <div className='icon-card'>
                  <img
                    className='icon-card-image'
                    src='/servicesIcons/androidDevelopment.png'
                    alt='icon'
                  />

                  <h1 className='icon-card-title'>
                    Android <br />
                    Development
                  </h1>
                </div>
                <div className='icon-card'>
                  <img
                    className='icon-card-image '
                    src='/servicesIcons/iosDevelopment.png'
                    alt='icon'
                  />

                  <h1 className='icon-card-title'>
                    ios <br />
                    Development
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 md:my-auto my-10 md:ml-5 ml-0 services-details'>
            <h1 className='title'>
              Our <span className='text-primary'>Services</span>
            </h1>
            <p className='text-paragraphColor font-bold my-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <a href='#' className='flex text-lg font-bold text-primary'>
              Show All Services{' '}
              <ChevronRightIcon className='w-5 h-5s ml-3 my-auto bg-primary text-white rounded-full   border-2 border-primary' />
            </a>
          </div>
        </div>

        <div className='my-10'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 mx-auto'>
              <h1 className='text-secondary font-bold lg:text-4xl text-3xl my-10'>
                Top-notch{' '}
                <span className='text-primary'>
                  Software <br /> Development
                </span>{' '}
                services
              </h1>
              <img src='/top-notch-service.png' alt='img' />
            </div>
            <div className='flex-1 mt-10'>
              {Services.map((service) => (
                <div
                  className='flex shadow-default bg-white   lg:p-8 sm:p-5 p-3 lg:m-8 sm:m-5 m-3 rounded-3xl '
                  key={service.id}>
                  <img className='w-16' src={service.imageUrl} alt='img' />
                  <div className='service-details ml-3 sm:ml-5'>
                    <h1 className='text-lg font-bold text-secondary'>
                      {service.title}
                    </h1>
                    <p className='font-bold text-paragraphColor text-sm sm:text-base'>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default ourServices
