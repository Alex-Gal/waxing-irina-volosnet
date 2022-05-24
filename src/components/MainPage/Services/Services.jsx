import React, { useState } from 'react'
import arrow from '../../../icons/arrow.svg'


import './Services.scss'

export const Services = () => {
    const [dropdownVisible, setDropdownVisible] = useState(true);

    const buttonHandler = () => {
        setDropdownVisible(!dropdownVisible)
    }


    return (
        <div className='services-block'>
            <div className="container">
                <h2 className='services-block__title'>Как я подарю тебе уверенность?</h2>

                <div className='services-block__list'>


                    <ul className='list__menu-block'>
                        <li className='list__menu'>
                            <button onClick={buttonHandler} className="list__menu-btn" >
                                <p className='list__item'>Депиляция зон</p>
                                <span className="list__arrow"><img src={arrow} alt="arrow" /></span>
                            </button>
                            <ul className='sub-list__menu' style={{ display: dropdownVisible ? 'block' : 'none' }}>
                                <li className='sub-list__item'>Депиляци ног</li>
                                <li className='sub-list__item'>Бикини</li>
                                <li className='sub-list__item'>Подмышки</li>
                            </ul>

                        </li>
                    </ul>


                </div>



                <button className='services-block__button'>
                    <p>Стесняешься?</p>
                    <p>просто постмотри, какую красоту я дарю клиенткам!</p>
                </button>
            </div>
        </div>
    )
}
