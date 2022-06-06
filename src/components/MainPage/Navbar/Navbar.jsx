import React from 'react'
import { Link } from "react-scroll";

import './Navbar.scss'

export const Navbar = () => {
    // let { btnClass, setBtnClass } = useState('button-top')

    // const offset = 100;
    // const getTop = () => window.scrollY || document.documentElement.scrollTop;

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const btnVisible = {
        visibility: 'visible',
        opacity: 1
    }

    const btnNotVisible = {
        visibility: 'hidden',
        opacity: 0
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

            <button
                className='button-top button-top--active'
                onScroll={() => {
                    if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
                        console.log('yes')
                    } else {
                        console.log('none')
                    }
                }
                }
                // onScroll={document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
                //     ? style = {btnVisible}
                //     : style = {btnNotVisible}}
                onClick={scrollUp}>
            </button>
            {/* <button className={document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? 'button-top button-top--active' : 'button-top'} onClick={scrollUp}></button> */}
            {/* <button className='button-top button-top--active' onClick={scrollUp}></button> */}
        </section >
    )
}
