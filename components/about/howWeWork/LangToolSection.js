import React, {useState} from 'react'
import {LangToolData} from './LangToolData'
import SingleLangTool from './SingleLangTool'
const LangToolSection = () => {
  const [active, setActive] = useState('FirstCard')

  return (
    <div id='langTool-section' className='custom-container'>
      <h1 className='title text-center'>Languages, tools and frameworks</h1>
      <p className='custom-paragraph mt-5 text-center'>
        Whatever the field or platform, we make it happen
      </p>
      <div className='flex flex-col md:flex-row mt-10'>
        <div className='flex-auto'>
          {/* left-side */}
          <div className='flex'>
            <img
              className='w-2/4 h-auto'
              src='/languageTools/left-side.png'
              alt='img'
            />
            <div className='details md:mr-5 mr-0 my-32 text-right'>
              <h1 className='title'>Front-end</h1>
              <p className='custom-paragraph pt-3 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitorLorem ipsum dolor sit ameLorem ipsum dolor sit
                amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor
              </p>
            </div>
          </div>
        </div>
        <div className='flex-auto md:block hidden'>
          <div className='bg-primary w-1 h-5/6 my-14 rounded-full'></div>
        </div>
        <div className='flex-auto'>
          {/* right-side */}
          <div className='flex'>
            <div className='details md:ml-5 ml-0 my-32'>
              <h1 className='title'>Back-end</h1>
              <p className='custom-paragraph pt-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitorLorem ipsum dolor sit ameLorem ipsum dolor sit
                amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor
              </p>
            </div>
            <img
              className='w-2/4 h-auto'
              src='/languageTools/right-side.png'
              alt='img'
            />
          </div>
        </div>
      </div>
      {/* LangTool-section */}
      <div className='langTool-section mt-14'>
        <nav className='mb-10'>
          <ul className='flex flex-wrap'>
            <button
              onClick={() => setActive('FirstCard')}
              className={`lang-navbar-btn ml-0 ${
                active === 'FirstCard' ? 'active' : ''
              }`}
              type='button'>
              Design
            </button>
            <button
              onClick={() => setActive('SecondCard')}
              className={`lang-navbar-btn ${
                active === 'SecondCard' ? 'active' : ''
              }`}
              type='button'>
              Front-end
            </button>
            <button
              onClick={() => setActive('ThirdCard')}
              className={`lang-navbar-btn ${
                active === 'ThirdCard' ? 'active' : ''
              }`}
              type='button'>
              Back-end
            </button>
            <button
              onClick={() => setActive('FourthCard')}
              className={`lang-navbar-btn ${
                active === 'FourthCard' ? 'active' : ''
              }`}
              type='button'>
              Mobile
            </button>
          </ul>
        </nav>
        {active === 'FirstCard' && (
          <SingleLangTool data={LangToolData} cardIndex={0} />
        )}
        {active === 'SecondCard' && (
          <SingleLangTool data={LangToolData} cardIndex={1} />
        )}
        {active === 'ThirdCard' && (
          <SingleLangTool data={LangToolData} cardIndex={2} />
        )}
        {active === 'FourthCard' && (
          <SingleLangTool data={LangToolData} cardIndex={3} />
        )}
      </div>
    </div>
  )
}

export default LangToolSection
