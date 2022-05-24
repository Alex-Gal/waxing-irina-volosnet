import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { MainBlock } from './MainBlock/MainBlock'
import { AboutBlock } from './AboutBlock/AboutBlock'

import './MainPage.scss'

export const MainPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <MainBlock />
                <AboutBlock />
            </main>
            <Footer />
        </>
    )
}
