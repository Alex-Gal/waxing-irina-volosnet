import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { MainBlock } from './MainBlock/MainBlock'
import { About } from './About/About'
import { Services } from './Services/Services'

import './MainPage.scss'

export const MainPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <MainBlock />
                <About />
                <Services />
            </main>
            <Footer />
        </>
    )
}
