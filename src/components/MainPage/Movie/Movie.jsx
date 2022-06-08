import React from 'react'
import video from '../../../video/movie_1.mp4'

import './Movie.scss'

const Movie = () => {
    return (
        <section className='movie'>
            <div className="container">
                <h2 className="movie__title">Почувствуй мою атмосферу</h2>
                <div className='movie__block'>
                    <video className="movie__video" autoPlay playsInline muted loop controls>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Movie;
