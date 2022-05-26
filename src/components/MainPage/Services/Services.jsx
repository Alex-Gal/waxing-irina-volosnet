import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import arrow from '../../../icons/arrow.svg'


import './Services.scss'

export const Services = () => {
    const [showZone, setShowZone] = useState(false);
    // const [dropdownComplex, setDropdownComplex] = useState(false);
    // const [dropdownPeeling, setDropdownPeeling] = useState(false);


    return (
        <div className='services-block'>
            <div className="container">
                <h2 className='services-block__title'>Как я подарю тебе уверенность?</h2>

                <div className='services-block__list'>
                    <ul className='list__menu-block'>
                        <li className='list__menu'>
                            <button onClick={() => setShowZone(!showZone)} className="list__menu-btn" style={{ borderBottom: !showZone ? '3px solid #FEF3FF' : 'none' }} >
                                <p className='list__item'>Депиляция зон</p>
                                <span className="list__arrow"><img src={arrow} alt="arrow" /></span>
                            </button>

                            <CSSTransition
                                in={showZone}
                                timeout={5000}
                                classNames='sub-list__menu'
                                unmountOnExit>

                                <ul className='sub-list__menu'>
                                    <li>Бикини классическое 20 руб</li>
                                    <li className='sub-list__item'>Бикини классическое 20 руб</li>
                                    <li className='sub-list__item'>Бикини глубокое 27 руб</li>
                                    <li className='sub-list__item'>Бикини бразильское 32 руб</li>
                                    <li className='sub-list__item'>Ноги полностью 30 руб</li>
                                    <li className='sub-list__item'>Голень/бедро 20 руб</li>
                                    <li className='sub-list__item'>Руки полностью 20 руб</li>
                                    <li className='sub-list__item'>Руки до локтя 15 руб</li>
                                    <li className='sub-list__item'>Подмышки 10 руб</li>
                                    <li className='sub-list__item'>Усики/1 зона на лице 7 руб</li>
                                    <li className='sub-list__item'>Полоска на животе 7 руб</li>
                                    <li className='sub-list__item'>Ягодицы 10 руб</li>
                                    <li className='sub-list__item'>Живот 10 руб</li>
                                    <li className='sub-list__item'>Обезболивание зоны бикини 5 руб</li>
                                </ul>
                            </CSSTransition>
                        </li>
                    </ul>
                </div>


                {/* 
                <div className='services-block__list'>    
                    <ul className='list__menu-block'>
                        <li className='list__menu'>
                            <button onClick={() => setDropdownZone(!dropdownZone)} className="list__menu-btn" style={{ borderBottom: !dropdownZone ? '3px solid #FEF3FF' : 'none' }} >
                                <p className='list__item'>Депиляция зон</p>
                                <span className="list__arrow"><img src={arrow} alt="arrow" /></span>
                            </button>
                            <ul className='sub-list__menu' style={{ display: dropdownZone ? 'block' : 'none' }}>
                                <li className='sub-list__item'>Бикини классическое 20 руб</li>
                                <li className='sub-list__item'>Бикини глубокое 27 руб</li>
                                <li className='sub-list__item'>Бикини бразильское 32 руб</li>
                                <li className='sub-list__item'>Ноги полностью 30 руб</li>
                                <li className='sub-list__item'>Голень/бедро 20 руб</li>
                                <li className='sub-list__item'>Руки полностью 20 руб</li>
                                <li className='sub-list__item'>Руки до локтя 15 руб</li>
                                <li className='sub-list__item'>Подмышки 10 руб</li>
                                <li className='sub-list__item'>Усики/1 зона на лице 7 руб</li>
                                <li className='sub-list__item'>Полоска на животе 7 руб</li>
                                <li className='sub-list__item'>Ягодицы 10 руб</li>
                                <li className='sub-list__item'>Живот 10 руб</li>
                                <li className='sub-list__item'>Обезболивание зоны бикини 5 руб</li>
                            </ul>
                        </li>


                        <li className='list__menu'>
                            <button onClick={buttonHandlerComplex} className="list__menu-btn" style={{ borderBottom: !dropdownComplex ? '3px solid #FEF3FF' : 'none' }} >
                                <p className='list__item'>Комплексы</p>
                                <span className="list__arrow"><img src={arrow} alt="arrow" /></span>
                            </button>
                            <ul className='sub-list__menu' style={{ display: dropdownComplex ? 'block' : 'none' }}>
                                <li className='sub-list__item'>Подмышки + ноги полностью + бикини классическое 55 руб (60 руб)</li>
                                <li className='sub-list__item'>Подмышки + ноги полностью + бикини глубокое 60 руб (67 руб)</li>
                                <li className='sub-list__item'>Подмышки + голень/бедро + бикини глубокое 50 руб (57 руб)</li>
                                <li className='sub-list__item'>Подмышки + руки полностью + бикини глубокое 50 руб (57 руб)</li>
                                <li className='sub-list__item'>Подмышки + руки полностью + ноги полностью 55 руб (60 руб)</li>
                                <li className='sub-list__item'>Подмышки + руки полностью + голень/бедро 45 руб (50 руб)</li>
                                <li className='sub-list__item'>Подмышки + руки полностью + ноги полностью + бикини глубокое 75 руб (87 руб)</li>
                                <li className='sub-list__item'>Ноги полностью + бикини глубокое 55 руб (57 руб)</li>
                                <li className='sub-list__item'>Голень/бедро + бикини глубокое 45 руб (47 руб)</li>
                            </ul>
                        </li>
                        <li className='list__menu'>
                            <button onClick={buttonHandlerPeeling} className="list__menu-btn" style={{ borderBottom: !dropdownPeeling ? '3px solid #FEF3FF' : 'none' }} >
                                <p className='list__item'>Пилинг</p>
                                <span className="list__arrow"><img src={arrow} alt="arrow" /></span>
                            </button>
                            <ul className='sub-list__menu' style={{ display: dropdownPeeling ? 'block' : 'none' }}>
                                <li className='sub-list__item'>Химический пилинг бикини 15 руб</li>
                                <p>+ Противовоспалительная маска в подарок</p>
                            </ul>
                        </li>
                    </ul>
                </div> */}



                {/* <button className='services-block__button'>
                    <p>Стесняешься?</p>
                    <p>просто постмотри, какую красоту я дарю клиенткам!</p>
                </button> */}
            </div>
        </div>
    )
}
