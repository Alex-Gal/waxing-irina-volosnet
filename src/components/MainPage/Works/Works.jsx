import React from 'react'
import work_1 from '../../../images/work_1.png'
import { Slider } from './Slider/Slider'

import './Works.scss'

export const Works = () => {
    return (
        <section className="works-block" id='works'>
            <div className="container">
                <div className='works-block__images-blocks'>
                    <div className='images__block'>
                        <img src={work_1} alt="work_1" />
                        <div><span>депиляция ног</span></div>
                    </div>
                    <div className='images__block'>
                        <img src={work_1} alt="work_1" />
                        <div><span>депиляция рук</span></div>
                    </div>
                    <div className='images__block'>
                        <img src={work_1} alt="work_1" />
                        <div><span>депиляция подмышек</span></div>
                    </div>
                </div>
                <h2>А что говорят девочки?</h2>
                <Slider />
            </div>
        </section>
    )
}
