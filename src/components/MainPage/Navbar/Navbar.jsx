import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './Navbar.scss'

export const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <section className='navbar'>
            <div className='container'>
                <nav className='navbar__nav'>
                    <ul className='nav__menu'>
                        <li className='menu__link'>
                            <Link
                                activeClass="active"
                                to="services-block"
                                smooth={true}
                                offset={-20}
                                duration={350}
                            >Услуги</Link>
                        </li>

                        <li><a className='menu__link' href='#education'>Обучение</a></li>

                        <li className='menu__link'>
                            <Link
                                activeClass="active"
                                to="contacts"
                                smooth={true}
                                offset={-20}
                                duration={700}
                            >Контакты</Link>
                        </li>
                    </ul>
                    <div>
                        <button onClick={() => window.open('https://dikidi.net/448067', '_blank')} className='navbar__button'>Записаться онлайн</button>
                    </div>
                </nav>
            </div>
            <button className='button-top' onClick={scrollToTop}></button>
        </section>
    )
}
