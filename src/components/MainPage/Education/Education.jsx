import React from 'react'
import education from '../../../images/education_photo.jpg'

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
                        <p>Я обучу</p>
                        <p>Мое обучение включает</p>
                        <p>Обучаю. Являюсь технологом бренда Italwax</p>
                        <p>+1000 депиляций, более 5 обучений</p>
                        <div className='education__button'>
                            <button>Подробнее про обучение...</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
