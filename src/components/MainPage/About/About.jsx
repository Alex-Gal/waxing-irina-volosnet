import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import about from '../../../images/about_photo.jpg'
import razor from '../../../icons/razor.png'

import './About.scss'

const About = () => {
    return (
        <section className='about-block' id='section1'>
            <div className="container">
                <div className='about-block__title-block'>
                    <h2 className='about-block__title'>Лечу зависимость от бритвы </h2>
                    <img src={razor} alt="razor" />
                </div>
                <div className='about-block__block'>
                    <div className='about-block__text'>
                        <h2>Обо мне</h2>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={0.5}>
                            <p>Я - твой самый любимый и лучший мастер по депиляции</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={0.5}>
                            <p>Открыла свою студию по депиляции через 8 месяцев после Базового обучения</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={0.5}>
                            <p>Только <span>самые</span> качественные воски и материалы для депиляции</p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={0.5}>
                            <p>Обучаю. Являюсь технологом итальянского бренда <span>Italwax</span></p>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={0.5}>
                            <p>1000+ депиляций, более 5 обучений</p>
                        </AnimationOnScroll>
                    </div>
                    <div className='about-block__image'>
                        <img src={about} alt="about-irina" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
