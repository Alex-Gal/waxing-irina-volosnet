import React, { Suspense } from 'react'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'
import { About } from './About/About'
import Preloader from '../Preloader/Preloader'

import './MainPage.scss'

const Services = React.lazy(() => import('./Services/Services'));
const Works = React.lazy(() => import('./Works/Works'));
const Movie = React.lazy(() => import('./Movie/Movie'));
const Education = React.lazy(() => import('./Education/Education'));
const Footer = React.lazy(() => import('./Footer/Footer'));

export const MainPage = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Header />
                <About />
                <Suspense fallback={<Preloader/>}>
                    <Services />
                    <Works />
                    <Movie />
                    <Education />
                </Suspense>
            </main>
            <Suspense fallback={<Preloader/>}>
                <Footer />
            </Suspense>
        </>
    )
}
