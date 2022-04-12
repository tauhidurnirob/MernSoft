import React from 'react'

const ClientsReview = () => {
    return (
        <div className='custom-container'>
            <div>
                <div
                    className='flex flex-col md:flex-row'
                    style={{
                        backgroundImage: 'url(/client-review-bg.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top',
                        backgroundPositionY: 'center',
                    }}>
                    <div className='flex-auto '>
                        <h1 className='md:ml-28 ml-5  text-primary title'>
                            Clients <br />{' '}
                            <span className='text-secondary'>Review</span>
                        </h1>
                        <div className='review-container shadow-default bg-white rounded-3xl p-5 m-5 md:mr-0 mr-5 mb-0 w-auto md:w-96'>
                            <h1 className='text-2xl text-secondary'>
                                Great Experience
                            </h1>
                            <p className='text-paragraphColor font-bold py-5'>
                                MernSoft reliably delivered high-quality work;
                                the app they developed for us has no issues or
                                crashes. The work ethic of their app developers
                                makes them stand out. They are accommodating and
                                quick to address concerns. They executed the app
                                development process brilliantly, from design to
                                testing.
                            </p>
                            <div className='client-name flex'>
                                <span className='w-16 h-16 rounded-full object-fill'>
                                    <img
                                        src='/clients/client-one.png'
                                        alt='img'
                                    />
                                </span>
                                <h1 className='text-2xl text-secondary ml-5'>
                                    Jane <br /> Harrison
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex-auto my-auto'>
                        <div className='review-container bg-white shadow-default  rounded-3xl p-5 m-5'>
                            <h1 className='text-2xl text-secondary'>
                                Excellent Work
                            </h1>
                            <p className='text-paragraphColor font-bold py-5'>
                                I got my web application developed from
                                Mernsoft, and I feel the team is perfect in
                                delivering the expected end product. I was happy
                                with the liveliness and services they provided
                                for our company. Great User Experience. Good Job
                                Guys!!
                            </p>
                            <div className='client-name flex'>
                                <span className='w-16 h-16 rounded-full object-fill'>
                                    <img
                                        src='/clients/client-two.png'
                                        alt='img'
                                    />
                                </span>
                                <h1 className='text-2xl text-secondary ml-5'>
                                    Maruice <br /> Webb
                                </h1>
                            </div>
                        </div>
                        <div className='review-container bg-white shadow-default rounded-3xl p-5 m-5'>
                            <h1 className='text-2xl text-secondary'>
                                Good Team
                            </h1>
                            <p className='text-paragraphColor font-bold py-5'>
                                MernSoft has served me with a fault-less app to
                                enhance my clientele with ease. Their
                                development team understood my requirements and
                                came up with a solution beyond my expectations.
                                The app they developed for us allows our company
                                to streamline busy schedules and utilize the
                                time efficiently.
                            </p>
                            <div className='client-name flex'>
                                <span className='w-16 h-16 rounded-full object-fill'>
                                    <img
                                        src='/clients/client-three.png'
                                        alt='img'
                                    />
                                </span>
                                <h1 className='text-2xl text-secondary ml-5'>
                                    Richa <br /> Turkstra
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsReview
