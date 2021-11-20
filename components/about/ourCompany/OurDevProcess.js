import React from 'react'

const OurDevProcess = () => {
  return (
    <div className='custom-container'>
      <div className='my-10'>
        <h1 className='title text-center'>
          Our <span className='text-primary'>Development</span> Process
        </h1>
        <p className='custom-paragraph text-center mt-5'>
          We've iterated, innovated, and developed a <br /> process that drives
          efficiencies for all stakeholders
        </p>
      </div>
      <div className='steps'>
        <div className='flex mx-auto flex-col md:flex-row'>
          <div className='flex-auto mx-auto'>
            {/* item two */}
            <img
              className='mx-auto'
              src='/ourDevProcessIcon/blank-space.png'
              alt='icon'
            />

            <div className='flex'>
              <p className='custom-paragraph mt-14 text-right'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Odio, aperiam?
              </p>
              <h1
                className='font-bold px-4 py-2 rounded-full h-full'
                style={{color: '#59D1F6', border: '2px solid #59D1F6'}}>
                Planning
              </h1>
              <img
                className='w-20 h-20'
                src='/ourDevProcessIcon/step-two.png'
                alt='icon'
              />
            </div>
            {/* item four */}
            <img
              className='mx-auto'
              src='/ourDevProcessIcon/blank-space.png'
              alt='icon'
            />

            <div className='flex'>
              <p className='custom-paragraph mt-14 text-right'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Odio, aperiam?
              </p>
              <h1
                className='font-bold px-4 py-2 rounded-full h-full'
                style={{color: '#C66F5E', border: '2px solid #C66F5E'}}>
                Development
              </h1>
              <img
                className='w-20 h-20'
                src='/ourDevProcessIcon/step-four.png'
                alt='icon'
              />
            </div>
            {/* item six */}
            <img
              className='mx-auto'
              src='/ourDevProcessIcon/blank-space.png'
              alt='icon'
            />

            <div className='flex'>
              <p className='custom-paragraph mt-14 text-right'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Odio, aperiam?
              </p>
              <h1
                className='font-bold px-4 py-2 rounded-full h-full'
                style={{color: '#FF9900', border: '2px solid #FF9900'}}>
                Delivery
              </h1>
              <img
                className='w-20 h-20'
                src='/ourDevProcessIcon/step-six.png'
                alt='icon'
              />
            </div>
          </div>
          <div className='md:flex-auto md:block hidden'>
            <img src='/ourDevProcessIcon/middle-line.png' alt='img' />
          </div>
          {/* // right side */}
          <div className='flex-auto mx-auto'>
            {/* // item one */}
            <div className='flex md:mt-0 mt-32'>
              <img
                className='w-20 h-20'
                src='/ourDevProcessIcon/step-one.png'
                alt='icon'
              />
              <h1
                style={{color: '#E8505B', border: '2px solid #E8505B'}}
                className='font-bold px-4 py-2 rounded-full h-full'>
                Consulting
              </h1>
              <p className='custom-paragraph mt-14'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Odio, aperiam?
              </p>
            </div>
            {/* item-three */}
            <img
              className='mx-auto'
              src='/ourDevProcessIcon/blank-space.png'
              alt='icon'
            />
            <div className='flex'>
              <img
                className='w-20 h-20'
                src='/ourDevProcessIcon/step-three.png'
                alt='icon'
              />
              <h1
                style={{color: '#4DD59E', border: '2px solid #4DD59E'}}
                className='font-bold px-4 py-2 rounded-full h-full'>
                Prototyping
              </h1>
              <p className='custom-paragraph mt-14'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Odio, aperiam?
              </p>
            </div>
            {/* item-five */}
            <img
              className='mx-auto'
              src='/ourDevProcessIcon/blank-space.png'
              alt='icon'
            />
            <div className='flex'>
              <img
                className='w-20 h-20'
                src='/ourDevProcessIcon/step-five.png'
                alt='icon'
              />
              <h1
                style={{color: '#819BF9', border: '2px solid #819BF9'}}
                className='font-bold px-4 py-2 rounded-full h-full'>
                Quality
              </h1>
              <p className='custom-paragraph mt-14'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Odio, aperiam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurDevProcess
