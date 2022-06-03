import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import smile_1 from '../../../../icons/smile_1.svg'
import smile_2 from '../../../../icons/smile_2.svg'
import heart from '../../../../icons/heart.png'

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import './ReviewsSlider.scss'

export const ReviewsSlider = () => {
    return (
        <div className='reviews-slider'>
            <Carousel autoPlay infiniteLoop showThumbs={false} showArrows>
                <div>
                    <p>Хочу еще раз поблагодарить Вас за работу. Зуд и покраснения полностью прошли. Результатом я очень довольна))</p>
                </div>
                <div>
                    <p className='reviews-slider__text_two'>Спасибо большое, очень рада, что именно к тебе пришла. С тобой очень комфортно.</p>
                </div>
                <div>
                    <p>Ирина. Огромное спасибо за вашу работу. Руки прелесть, никаких покраснений нет. Спасибо вам огромное.</p>
                </div>
                <div>
                    <p>Покраснение прошло. Ощущение просто супер. Не пожалела, что к вам записалась <img src={smile_1} alt="smile_1" /> Спасибо еще раз.<img src={heart} alt="heart" /></p>
                </div>
                <div>
                    <p className='reviews-slider__text_five'>Здравствуйте, хотела еще раз поблагодарить вас за проделанную работу. У предыдущих мастеров испытывала ужасный дискомфорт, а с вами прошло всё быстро и безболезненно))</p>
                </div>
                <div>
                    <p className='reviews-slider__text_six'>Спасибо большое. Вы лучшая <img src={smile_2} alt="smile_2" /> Очень довольна результатом.</p>
                </div>
            </Carousel >
        </div >
    )
}
