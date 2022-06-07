import React from 'react'
import work1 from '../../../images/work_1.jpg'
import work_2 from '../../../images/work_2.jpg'
import work_3 from '../../../images/work_3.jpg'
import { ReviewsSlider } from './ReviewsSlider/ReviewsSlider'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Works.scss'

export const Works = () => {
    return (
        <section className="works-block" id='works'>
            <div className="container">
                <div className='works-block__images-blocks'>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={400} duration={0.5} animateOnce={true}>
                        <div className='images__block'>
                            <img src={work1} alt="work_1" />
                            <div><span>депиляция подмышек</span></div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={100} duration={0.5} animateOnce={true}>
                        <div className='images__block'>
                            <img src={work_2} alt="work_2" />
                            <div><span>депиляция ног</span></div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={250} duration={0.5} animateOnce={true}>
                        <div className='images__block'>
                            <img src={work_3} alt="work_3" />
                            <div><span>депиляция рук</span></div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <h2>А что говорят девочки?</h2>
                <ReviewsSlider />
            </div>
        </section>
    )
}
