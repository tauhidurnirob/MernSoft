import React from 'react'

const SingleLangTool = ({ data, cardIndex }) => {
    return (
        <div>
            {data[cardIndex].map((item) => (
                <div className='custom-container' key={item.id}>
                    <div className='flex flex-col md:flex-row'>
                        <div className='flex-1'>
                            <ul className='flex'>
                                <div className='flex-1'>
                                    <li className='flex custom-paragraph my-5'>
                                        <img src={item.firstImgUrl} alt='img' />
                                        <span className='my-auto ml-3'>
                                            {item.firstTitle}
                                        </span>
                                    </li>
                                    <li className='flex custom-paragraph my-5'>
                                        <img
                                            src={item.secondImgUrl}
                                            alt='img'
                                        />
                                        <span className='my-auto ml-3'>
                                            {item.secondTitle}
                                        </span>
                                    </li>
                                    <li className='flex custom-paragraph my-5'>
                                        <img src={item.thirdImgUrl} alt='img' />
                                        <span className='my-auto ml-3'>
                                            {item.thirdTitle}
                                        </span>
                                    </li>
                                </div>
                                <div className='flex-1'>
                                    <li className='flex custom-paragraph my-5'>
                                        <img
                                            src={item.fourthImgUrl}
                                            alt='img'
                                        />
                                        <span className='my-auto ml-3'>
                                            {item.fourthTitle}
                                        </span>
                                    </li>
                                    <li className='flex custom-paragraph my-5'>
                                        <img src={item.fifthImgUrl} alt='img' />
                                        <span className='my-auto ml-3'>
                                            {item.fifthTitle}
                                        </span>
                                    </li>
                                    <li className='flex custom-paragraph my-5'>
                                        <img src={item.sixthImgUrl} alt='img' />
                                        <span className='my-auto ml-3'>
                                            {item.sixthTitle}
                                        </span>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className='flex-1 md:mt-0 mt-10'>
                            <div className='w-4/5 mx-auto'>
                                <img src={item.rightSection} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SingleLangTool
