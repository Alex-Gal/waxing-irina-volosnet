import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import arrow from '../../../icons/arrow.svg'


import './Services.scss'

export const Services = () => {
    const [showZone, setShowZone] = useState(false);
    const [showComplex, setShowComplex] = useState(false);
    const [showPeeling, setShowPeeling] = useState(false);


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
                                timeout={300}
                                classNames='sub-list__menu'
                                unmountOnExit>

                                <ul className='sub-list__menu'>
                                    <li className='sub-list__item'><p>Бикини классическое</p><span>20 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Бикини глубокое</p><span>27 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Бикини бразильское</p><span>32 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Ноги полностью</p><span>30 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Голень/бедро</p><span>20 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Руки полностью</p><span>20 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Руки до локтя</p><span>15 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Подмышки</p><span>10 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Усики/1 зона на лице</p><span>7 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Полоска на животе</p><span>7 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Ягодицы</p><span>10 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Живот</p><span>10 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Обезболивание зоны бикини</p><span>5 BYN</span></li><hr />
                                </ul>
                            </CSSTransition>
                        </li>

                        <li className='list__menu'>
                            <button onClick={() => setShowComplex(!showComplex)} className="list__menu-btn" style={{ borderBottom: !showComplex ? '3px solid #FEF3FF' : 'none' }} >
                                <p className='list__item'>Комплексы</p>
                                <span className="list__arrow"><img src={arrow} alt="arrow" /></span>
                            </button>

                            <CSSTransition
                                in={showComplex}
                                timeout={300}
                                classNames='sub-list__menu'
                                unmountOnExit>

                                <ul className='sub-list__menu'>
                                    <li className='sub-list__item'><p>Подмышки + ноги полностью + бикини классическое</p><span>55 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Подмышки + ноги полностью + бикини глубокое</p><span>60 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Подмышки + голень/бедро + бикини глубокое</p><span>50 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Подмышки + руки полностью + бикини глубокое</p><span>50 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Подмышки + руки полностью + ноги полностью</p><span>55 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Подмышки + руки полностью + голень/бедро</p><span>45 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Подмышки + руки полностью + ноги полностью + бикини глубокое</p><span>75 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Ноги полностью + бикини глубокое</p><span>55 BYN</span></li><hr />
                                    <li className='sub-list__item'><p>Голень/бедро + бикини глубокое</p><span>45 BYN</span></li><hr />
                                </ul>
                            </CSSTransition>
                        </li>

                        <li className='list__menu'>
                            <button onClick={() => setShowPeeling(!showPeeling)} className="list__menu-btn" style={{ borderBottom: !showPeeling ? '3px solid #FEF3FF' : 'none' }} >
                                <p className='list__item'>Пилинг</p>
                                <span className="list__arrow"><img src={arrow} alt="arrow" /></span>
                            </button>

                            <CSSTransition
                                in={showPeeling}
                                timeout={300}
                                classNames='sub-list__menu'
                                unmountOnExit>
                                <ul className='sub-list__menu'>
                                    <li className='sub-list__item'><p>Химический пилинг бикини + противовоспалительная маска в подарок</p><span>15 BYN</span></li><hr />
                                </ul>
                            </CSSTransition>
                        </li>
                    </ul>
                </div>

                <div className='services-block__shy'>
                    <div className='services-block__shy-block'>
                        <p className='shy-block__shy-title'>Стесняешься?</p>
                        <p className='shy-block__shy-text'>просто постмотри, какую красоту я <br /> дарю клиенткам!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
