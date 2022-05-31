import React from 'react'
import education from '../../../images/education_photo.jpg'

import './Education.scss'

export const Education = () => {
    return (
        <section className="education">
            <div className="container">
                <div className='education__image'>
                        <img src={education} alt="education" />
                    </div>
                <h2 className='education__title'>Лечу зависимость от бритвы</h2>

                <div className='education__block'>
                    <div className='education__text'>
                        <h2>Хочешь стать мастером</h2>
                        <p>Я обучу</p>
                        <p>Открыла свою студию по депиляции через 8 месяцев после Базового обучения</p>
                        <p>Обучаю. Являюсь технологом бренда Italwax</p>
                        <p>+1000 депиляций, более 5 обучений</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
