import React from 'react'
import work1 from '../../../images/work_1.jpg'
import work_2 from '../../../images/work_2.jpg'
import work_3 from '../../../images/work_3.jpg'
import { ReviewsSlider } from './ReviewsSlider/ReviewsSlider'

import './Works.scss'

export const Works = () => {
    return (
        <section className="works-block" id='works'>
            <div className="container">
                <div className='works-block__images-blocks'>
                    <div className='images__block'>
                        <img src={work1} alt="work_1" />
                        <div><span>депиляция подмышек</span></div>
                    </div>
                    <div className='images__block'>
                        <img src={work_2} alt="work_2" />
                        <div><span>депиляция ног</span></div>
                    </div>
                    <div className='images__block'>
                        <img src={work_3} alt="work_3" />
                        <div><span>депиляция рук</span></div>
                    </div>
                </div>
                <h2>А что говорят девочки?</h2>
                <ReviewsSlider />
            </div>
        </section>
    )
}
