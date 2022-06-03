import React from 'react'
import footerImg from '../../../images/footer_photo.jpg'
import tap from '../../../icons/tap.png'
import instagram from '../../../icons/instagram.svg'
import telegram from '../../../icons/telegram.svg'
import tiktok from '../../../icons/tiktok.svg'

import './Footer.scss'

export const Footer = () => {
    return (
        <footer className='footer' id='contacts'>
            <div className="container">
                <div className="footer__block">
                    <div className='footer__block-area'>
                        <h2>Хочешь ко мне на депиляцию?</h2>
                        <div className='footer__button'>
                            <button onClick={() => window.open('https://dikidi.net/448067', '_blank')}>
                                <span>Запишись онлайн</span>
                                <img src={tap} alt="tap" />
                            </button>
                        </div>
                        <div className='footer__text'>
                            <h2>Будем на связи</h2>
                            <p>подписывайся на мои соц. сети:</p>
                        </div>
                        <div className='footer__socials'>
                            <button onClick={() => window.open('https://instagram.com/irina_volosnet?igshid=NWRhNmQxMjQ=', '_blank')}>
                                <img src={instagram} alt="instagram" />
                            </button>
                            <button onClick={() => window.open('https://instagram.com/irina_volosnet?igshid=NWRhNmQxMjQ=', '_blank')}>
                                <img src={telegram} alt="telegram" />
                            </button>
                            <button onClick={() => window.open('https://vm.tiktok.com/ZMNJpx8eJ/', '_blank')}>
                                <img src={tiktok} alt="tiktok" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__image'>
                <img src={footerImg} alt="footerImg" />
            </div>
        </footer>
    )
}
