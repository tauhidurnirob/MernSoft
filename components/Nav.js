import React, {useState} from 'react'
import {Transition} from '@headlessui/react'
import {ChevronDownIcon, MenuIcon} from '@heroicons/react/solid'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [changeNavPosition, setChangeNavPosition] = useState(false)

  const navbarPositionHandler = () => {
    if (window.scrollY >= 1) {
      setChangeNavPosition(true)
    } else {
      setChangeNavPosition(false)
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', navbarPositionHandler)
  })
  return (
    <div className='relative'>
      <nav
        className={`bg-white ${
          changeNavPosition ? 'fixed' : 'sticky'
        } w-full z-10 top-0 text-bold`}>
        <div className='max-w-7xl mx-auto px-4 py-5'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex-shrink-0'>
              <h1 className='text-3xl font-bold'>MernSoft</h1>
            </div>
            <div className='flex items-center my-auto'>
              <div className='hidden md:block'>
                <ul className='ml-10 flex items-baseline space-x-4 font-bold lg:text-base text-xs'>
                  <li>
                    <a className='dropdown relative flex hover:text-primary px-2 py-2 cursor-pointer '>
                      About
                      <ChevronDownIcon className='dropdown-arrow lg:w-7 lg:h-7 w-5 h-5 text-primary' />
                      <ul className='dropdown-menu hidden absolute top-10 w-max rounded-lg shadow-default bg-white pt-2'>
                        <li>
                          <a
                            href='#'
                            className='flex  text-secondary py-4 px-6  whitespace-no-wrap'>
                            <img
                              className='mr-2'
                              src='/navIcon/people.png'
                              alt='img'
                            />
                            Our Company
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                            <img
                              className='mr-2'
                              src='/navIcon/personalGrowth.png'
                              alt='img'
                            />
                            How We Work
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                            <img
                              className='mr-2'
                              src='/navIcon/workspace.png'
                              alt='img'
                            />
                            Career
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>

                  <li>
                    <a href='#' className='hover:text-primary px-2 py-2'>
                      Services
                    </a>
                  </li>

                  <li>
                    <a href='#' className='hover:text-primary px-2 py-2 '>
                      Technologies
                    </a>
                  </li>

                  <li>
                    <a className='flex dropdown hover:text-primary px-2 py-2 cursor-pointer'>
                      Portfolio
                      <ChevronDownIcon className='dropdown-arrow lg:w-7 lg:h-7 w-5 h-5 text-primary' />
                      <ul className='dropdown-menu hidden absolute top-10 mt-5 w-max rounded-lg shadow-default bg-white pt-2'>
                        <li>
                          <a
                            href='#'
                            className='flex  text-secondary py-4 px-6  whitespace-no-wrap'>
                            <img
                              className='mr-2'
                              src='/navIcon/people.png'
                              alt='img'
                            />
                            Our Company
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                            <img
                              className='mr-2'
                              src='/navIcon/personalGrowth.png'
                              alt='img'
                            />
                            How We Work
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                            <img
                              className='mr-2'
                              src='/navIcon/workspace.png'
                              alt='img'
                            />
                            Career
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a href='#' className='hover:text-primary px-2 py-2 '>
                      Blog
                    </a>
                  </li>

                  <li>
                    {' '}
                    <a href='#' className='call-to-action'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <MenuIcon className='block h-6 w-6' />
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='block h-6 w-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div className='md:hidden mb-10' id='mobile-menu'>
              <div
                ref={ref}
                className='px-2 pt-2 pb-3 space-y-1 sm:px-3 font-bold'>
                <ul className='absolute top-15 bg-white w-full py-8 z-50'>
                  <a
                    href='#'
                    className='dropdown flex justify-between hover:text-primary px-3 py-2 text-base'>
                    About
                    <img src='/icons/navicon.png' alt='icon' />
                    <ul className='dropdown-menu hidden absolute top-15 my-8 w-11/12 rounded-lg shadow-default bg-white pt-2'>
                      <li>
                        <a
                          href='#'
                          className='flex  text-secondary py-4 px-6  whitespace-no-wrap'>
                          <img
                            className='mr-2'
                            src='/navIcon/people.png'
                            alt='img'
                          />
                          Our Company
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                          <img
                            className='mr-2'
                            src='/navIcon/personalGrowth.png'
                            alt='img'
                          />
                          How We Work
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                          <img
                            className='mr-2'
                            src='/navIcon/workspace.png'
                            alt='img'
                          />
                          Career
                        </a>
                      </li>
                    </ul>
                  </a>

                  <a href='#' className=' hover:text-primary block px-3 py-2'>
                    Services
                  </a>

                  <a href='#' className='hover:text-primary block px-3 py-2'>
                    Technologies
                  </a>

                  <a
                    href='#'
                    className='dropdown flex justify-between hover:text-primary  px-3 py-2'>
                    Portfolio
                    <img src='/icons/navicon.png' alt='icon' />
                    <ul className='dropdown-menu hidden absolute top-15 my-8 w-11/12 rounded-lg shadow-default bg-white pt-2'>
                      <li>
                        <a
                          href='#'
                          className='flex  text-secondary py-4 px-6  whitespace-no-wrap'>
                          <img
                            className='mr-2'
                            src='/navIcon/people.png'
                            alt='img'
                          />
                          Helix-d
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                          <img
                            className='mr-2'
                            src='/navIcon/personalGrowth.png'
                            alt='img'
                          />
                          Naturalabs
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                          <img
                            className='mr-2'
                            src='/navIcon/workspace.png'
                            alt='img'
                          />
                          AlphaMatch
                        </a>
                      </li>
                    </ul>
                  </a>
                  <a
                    href='#'
                    className='hover:text-primary block px-3 pt-2 pb-6'>
                    Blog
                  </a>

                  <a
                    href='#'
                    className='transition duration-500 ease-in-out bg-primary text-white hover:bg-white hover:text-primary px-5 py-2 rounded-full text-sm  border-2 border-primary'>
                    Contact Us
                  </a>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Nav
