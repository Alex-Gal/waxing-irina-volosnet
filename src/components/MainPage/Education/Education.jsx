import React from 'react'
import education from '../../../images/education_photo.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Education.scss'

export const Education = () => {
    return (
        <section className="education">
            <div className='education__image'>
                <img src={education} alt="education" />
            </div>

            <div className="container">
                <div className="education__block">
                    <div className='education__text'>
                        <h2>Хочешь стать мастером?</h2>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Я обучу</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Мое обучение включает</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Обучаю. Являюсь технологом бренда Italwax</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>+1000 депиляций, более 5 обучений</p>
                        </AnimationOnScroll>
                        <div className='education__button'>
                            <button>Подробнее про обучение...</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
