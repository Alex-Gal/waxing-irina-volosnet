import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from "react-scroll"
import { AnimationOnScroll } from 'react-animation-on-scroll';

import arrow from '../../../icons/arrow.svg'
import './Services.scss'

const Services = () => {
    const [showZone, setShowZone] = useState(false);
    const [showComplex, setShowComplex] = useState(false);
    const [showPeeling, setShowPeeling] = useState(false);


    return (
        <section className='services-block' id='services-block'>
            <div className="container">
                <h2 className='services-block__title'>Как я подарю тебе уверенность?</h2>

                <div className='services-block__list'>
                    <ul className='list__menu-block'>
                        <li className='list__menu'>
                            <button onClick={() => setShowZone(!showZone)} className="list__menu-btn" style={{ borderBottom: !showZone ? '2px solid #FEF3FF' : 'none' }} >
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
                            <button onClick={() => setShowComplex(!showComplex)} className="list__menu-btn" style={{ borderBottom: !showComplex ? '2px solid #FEF3FF' : 'none' }} >
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
                            <button onClick={() => setShowPeeling(!showPeeling)} className="list__menu-btn" style={{ borderBottom: !showPeeling ? '2px solid #FEF3FF' : 'none' }} >
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
                <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight" animateOnce={true}>

                    <div className='services-block__shy'>
                        <Link
                            className='services-block__shy-link'
                            activeClass="active"
                            to="works"
                            smooth={true}
                            offset={-20}
                            duration={350}
                        >
                            <p className='shy-link__title'>Стесняешься?</p>
                            <p className='shy-link__text'>просто постмотри, какую красоту я <br /> дарю клиенткам!</p>
                        </Link>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Services;
