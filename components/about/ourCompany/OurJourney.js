import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/solid'
import Scroll, {animateScroll as scroll} from 'react-scroll'
const OurJourney = () => {
  const Link = Scroll.Link
  return (
    <div className='custom-container'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1'>
          <img className='my-auto mx-auto' src='/ourJourney.jpg' alt='img' />
        </div>
        <div className='flex-1 md:my-auto my-10 md:mx-10 mx-0'>
          <h1 className='title'>
            Our journey Ups & <br />
            Downs in the <span className='text-primary'>industry</span>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurJourney
