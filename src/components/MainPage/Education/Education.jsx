import React from 'react'
import education from '../../../images/education_photo.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Education.scss'

const Education = () => {
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
                            <p>Стань лучшим мастером восковой депиляции</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Получи новую прибыльную профессию всего за <span>2 дня</span></p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Поделюсь всеми своими секретами и фишками</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Теоретическая и практическая часть</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Отработка <span>всех</span> зон на моделях</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={0.5}>
                            <p>Поддержка и мотивация с моей стороны</p>
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

export default Education;
