import React from 'react'

const WeDesignSection = () => {
  return (
    <div className='custom-container '>
      <div className='flex flex-col md:flex-row mb-10 md:mb-0'>
        <div className='flex-1 my-auto'>
          <h1 className='title'>
            We design and develop <span className='text-primary'>Apps</span>{' '}
            <br />
            using latest technology!
          </h1>
          <p className='text-paragraphColor font-bold py-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus{' '}
            <br />
            <br />
            in ornare quam viverra Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim
            praesent elementum facilisis leo, vel fringilla est ullamcorper eget
            nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in ornare quam viverra
          </p>
        </div>
        <div className='flex-1 md:mx-10 mx-0 md:my-auto mt-10'>
          <img className='mx-auto' src='/we-design.png' alt='img' />
        </div>
      </div>
    </div>
  )
}

export default WeDesignSection
