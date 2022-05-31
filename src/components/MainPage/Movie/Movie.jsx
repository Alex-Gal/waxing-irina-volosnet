import React from 'react'
// import video from '../../../video/movie.mov'
import video from '../../../video/movie_1.mp4'

import './Movie.scss'

export const Movie = () => {
    return (
        <section className='movie'>
            <div className="container">
                <h2 className="movie__title">Почувствуй мою атмосферу</h2>
                <video className="movie__video" autoPlay muted loop controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}
