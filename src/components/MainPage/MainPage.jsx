import React, { Suspense } from 'react'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'
// import { About } from './About/About'
import { Services } from './Services/Services'
import { Works } from './Works/Works'
// import { Movie } from './Movie/Movie'
import { Education } from './Education/Education'
import { Footer } from './Footer/Footer'

import './MainPage.scss'

const About = React.lazy(() => import('./About/About'));
const Movie = React.lazy(() => import('./Movie/Movie'));

export const MainPage = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Header />
                <Suspense fallback={<div>Загрузка...</div>}>
                    <About />
                </Suspense>
                <Services />
                <Works />
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Movie />
                </Suspense>
                <Education />
            </main>
            <Footer />
        </>
    )
}
