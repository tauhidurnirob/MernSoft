import React, {useState} from 'react'
import Links from 'next/link'
import {Transition} from '@headlessui/react'
import {ChevronDownIcon, MenuIcon, XIcon} from '@heroicons/react/solid'
import Scroll, {animateScroll as scroll} from 'react-scroll'

const Link = Scroll.Link

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
              <h1
                className='text-3xl font-bold'
                onClick={() => scroll.scrollToTop()}>
                <Links href='/'>MernSoft</Links>
              </h1>
            </div>
            <div className='flex items-center my-auto'>
              <div className='hidden md:block'>
                <ul className='ml-10 flex items-baseline space-x-4 font-bold lg:text-base text-xs'>
                  <li>
                    <Link>
                      <a className='dropdown relative flex hover:text-primary px-2 py-2 cursor-pointer '>
                        About
                        <ChevronDownIcon className='dropdown-arrow lg:w-7 lg:h-7 w-5 h-5 text-primary' />
                        <ul className='dropdown-menu hidden absolute top-10 w-max rounded-lg shadow-default bg-white pt-2'>
                          <li>
                            <Links href='/ourCompany'>
                              <a className='flex  text-secondary py-4 px-6  whitespace-no-wrap'>
                                <img
                                  className='mr-2'
                                  src='/navIcon/people.png'
                                  alt='img'
                                />
                                Our Company
                              </a>
                            </Links>
                          </li>
                          <li>
                            <Links href='/howWeWork'>
                              <a className='flex  text-secondary py-4 px-6  whitespace-no-wrap'>
                                <img
                                  className='mr-2'
                                  src='/navIcon/workspace.png'
                                  alt='img'
                                />
                                How We Work
                              </a>
                            </Links>
                          </li>
                          <li>
                            <Links href='/career'>
                              <a className='flex  text-secondary py-4 px-6  whitespace-no-wrap'>
                                <img
                                  className='mr-2'
                                  src=' /navIcon/personalGrowth.png'
                                  alt='img'
                                />
                                Career
                              </a>
                            </Links>
                          </li>
                        </ul>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='hover:text-primary px-2 py-2 cursor-pointer'
                      to='service-section'
                      offset={-200}
                      smooth={true}
                      duration={1000}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-primary px-2 py-2 cursor-pointer'
                      to='langTool-section'
                      offset={-200}
                      smooth={true}
                      duration={1000}>
                      Technologies
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='hover:text-primary px-2 py-2 cursor-pointer '
                      to='portfolio-section'
                      offset={-200}
                      smooth={true}
                      duration={1000}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-primary px-2 py-2 cursor-pointer'
                      to='blog-section'
                      offset={-200}
                      smooth={true}
                      duration={1000}>
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='call-to-action'
                      to='contactUs-section'
                      offset={-200}
                      smooth={true}
                      duration={1000}>
                      Contact Us
                    </Link>
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
                  <XIcon className='block h-6 w-6' />
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
                className='w-full h-full  space-y-1 sm:px-3 font-bold'>
                <ul className='absolute top-15 left-0 bg-white w-full px-5 pb-10 z-50 overflow-hidden'>
                  <Link href='#'>
                    <a className='dropdown flex justify-between hover:text-primary px-3 py-2 text-base'>
                      About
                      <img src='/icons/navicon.png' alt='icon' />
                      <ul className='dropdown-menu hidden absolute top-15 my-8 w-11/12 rounded-lg shadow-default bg-white pt-2'>
                        <li>
                          <Links href='/ourCompany'>
                            <a className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                              <img
                                className='mr-2'
                                src='/navIcon/people.png'
                                alt='img'
                              />
                              Our Company
                            </a>
                          </Links>
                        </li>
                        <li>
                          <Links href='/howWeWork'>
                            <a className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                              <img
                                className='mr-2'
                                src='/navIcon/workspace.png'
                                alt='img'
                              />
                              How We Work
                            </a>
                          </Links>
                        </li>
                        <li>
                          <Links href='/career'>
                            <a className='flex text-secondary py-4 px-6  whitespace-no-wrap'>
                              <img
                                className='mr-2'
                                src='/navIcon/personalGrowth.png'
                                alt='img'
                              />
                              Career
                            </a>
                          </Links>
                        </li>
                      </ul>
                    </a>
                  </Link>

                  <Link
                    to='service-section'
                    offset={-200}
                    smooth={true}
                    duration={1000}
                    className='cursor-pointer'>
                    <a className=' hover:text-primary block px-3 py-2'>
                      Services
                    </a>
                  </Link>

                  <Link
                    to='langTool-section'
                    offset={-200}
                    smooth={true}
                    duration={1000}
                    className='cursor-pointer'>
                    <a className='hover:text-primary block px-3 py-2'>
                      Technologies
                    </a>
                  </Link>

                  <Link
                    to='portfolio-section'
                    offset={-200}
                    smooth={true}
                    duration={1000}
                    className='cursor-pointer'>
                    <a className='dropdown flex justify-between hover:text-primary  px-3 py-2'>
                      Portfolio
                    </a>
                  </Link>
                  <Link
                    to='blog-section'
                    offset={-200}
                    smooth={true}
                    duration={1000}
                    className='cursor-pointer'>
                    <a className='hover:text-primary block px-3 pt-2 pb-6'>
                      Blog
                    </a>
                  </Link>

                  <Link
                    to='contactUs-section'
                    offset={-200}
                    smooth={true}
                    duration={1000}
                    className='cursor-pointer'>
                    <a className='call-to-action'>Contact Us</a>
                  </Link>
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
