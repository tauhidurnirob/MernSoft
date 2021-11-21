import React from 'react'

const WhyMernSoft = () => {
  return (
    <div>
      <div className='custom-container'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            f
            <div className='lg:w-2/3 w-3/3 m-auto'>
              <h1 className='title text-center'>
                Why <span className='text-primary'>MernSoft?</span>
              </h1>
              <p className='custom-paragraph my-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui faucibus in ornare quam viverra orci sagittis eu volutpat
                odio facilisis mauris sit amet massa Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut aliquam, purus sit amet luctus
                venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                purus non enim praesent elementum facilisis leo,
              </p>
            </div>
          </div>
          <div className='flex-1'>
            <div className='m-5'>
              <img
                className='lg:w-2/3 w-3/3 m-auto'
                src='/whyMernSoft.jpg'
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='my-10'>
        <img className='w-full' src='/company-showcase.jpg' alt='img' />
      </div>
    </div>
  )
}

export default WhyMernSoft
