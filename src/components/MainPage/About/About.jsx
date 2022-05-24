import React from 'react'
import about from '../../../images/about_photo.jpg'

import './About.scss'

export const About = () => {
    return (
        <div className='about-block'>
            <div className="container">
                <h2 className='about-block__title'>Лечу зависимость от бритвы</h2>
                <div className='about-block__block'>
                    <div className='about-block__text'>
                        <h3>Обо мне</h3>
                        <p>Я самая лучшая, самая красивая</p>
                        <p>Провожу обучение</p>
                        <p>Опыт миллион лет</p>
                        <p>Можно цифры: более 1000 депиляций, более 5 обучений</p>
                    </div>
                    <div className='about-block__image'>
                        <img src={about} alt="about-irina" />
                    </div>
                </div>
            </div>
        </div>
    )
}
