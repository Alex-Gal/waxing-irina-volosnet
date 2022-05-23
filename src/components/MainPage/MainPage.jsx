import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { MainBlock } from './MainBlock/MainBlock'

import './MainPage.scss'

export const MainPage = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <MainBlock />
            </main>
            <Footer />
        </>
    )
}