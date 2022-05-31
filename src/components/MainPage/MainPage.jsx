import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'
import { About } from './About/About'
import { Services } from './Services/Services'
import { Works } from './Works/Works'
import { Movie } from './Movie/Movie'
import { Education } from './Education/Education'
import { Footer } from './Footer/Footer'

import './MainPage.scss'

export const MainPage = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Header />
                <About />
                <Services />
                <Works />
                <Movie />
                <Education />
            </main>
            <Footer />
        </>
    )
}
