import React from 'react'

import './Navbar.scss'

export const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='container'>
                <nav className='navbar__nav'>
                    <ul className='nav__menu'>
                        <li><a className='menu__link' href='#about'>Услуги</a></li>
                        <li><a className='menu__link' href='#education'>Обучение</a></li>
                        <li><a className='menu__link' href='#contacts'>Контакты</a></li>
                    </ul>
                    <div>
                        <button onClick={() => window.open('https://dikidi.net/448067', '_blank')} className='navbar__button'>Записаться онлайн</button>
                    </div>
                </nav>
            </div>
        </section>
    )
}
