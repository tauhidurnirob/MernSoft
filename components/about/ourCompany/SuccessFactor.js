import React from 'react'
import {CheckIcon, ChevronRightIcon} from '@heroicons/react/solid'
const successFactor = () => {
  return (
    <div className='custom-container'>
      <h1 className='title text-center'>
        What makes <span className='text-primary'>us different</span> <br />{' '}
        from the competition
      </h1>
      <div className='flex flex-col md:flex-row mt-10'>
        <div className='flex-1'>
          <h1 className='text-secondary text-2xl font-semibold mt-10 mb-5'>
            Our Key Success Factors
          </h1>
          <p className='custom-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            facilis distinctio, maiores ullam tempore blanditiis dolorem debitis
            sapiente suscipit enim tempora molestias quo! Accusantium voluptatum
            odio hic voluptate a sit.
          </p>
          <div className='factors my-10'>
            <li className='list-none flex text-secondary font-bold my-5'>
              <CheckIcon className='heroIcon' />
              Data Driven Decision Making
            </li>
            <li className='list-none flex text-secondary font-bold my-5'>
              <CheckIcon className='heroIcon' />
              User centric Approach
            </li>
            <li className='list-none flex text-secondary font-bold my-5'>
              <CheckIcon className='heroIcon' />
              Agile processes
            </li>
            <li className='list-none flex text-secondary font-bold my-5'>
              <CheckIcon className='heroIcon' />
              Adoption of the latest technologies
            </li>
            <li className='list-none flex text-secondary font-bold my-5'>
              <CheckIcon className='heroIcon' />
              Lean operations, but heavy R&D
            </li>
          </div>
          <div className='call-to-action inline-flex font-bold mb-10'>
            <a className='flex' href='#'>
              Request an estimate
              <ChevronRightIcon className='heroIcon ml-3 border-white' />
            </a>
          </div>
        </div>
        <div className='flex-1 m-auto'>
          <img src='/successFactorsChart.png' alt='icon' />
        </div>
      </div>
    </div>
  )
}

export default successFactor
