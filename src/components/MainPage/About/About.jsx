import React from 'react'
import about from '../../../images/about_photo.jpg'

import './About.scss'

export const About = () => {
    return (
        <section className='about-block'>
            <div className="container">
                <h2 className='about-block__title'>Лечу зависимость от бритвы</h2>
                <div className='about-block__block'>
                    <div className='about-block__text'>
                        <h3>Обо мне</h3>
                        <p>Я твой самый любимый и лучший мастер по депиляции</p>
                        <p>Открыла свою студию по депиляции через 8 месяцев после Базового обучения</p>
                        <p>Обучаю. Являюсь технологом бренда Italwax</p>
                        <p>+1000 депиляций, более 5 обучений</p>
                    </div>
                    <div className='about-block__image'>
                        <img src={about} alt="about-irina" />
                    </div>
                </div>
            </div>
        </section>
    )
}
