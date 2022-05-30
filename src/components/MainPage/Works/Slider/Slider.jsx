import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import './Slider.scss'

export const Slider = () => {
    return (
        <div className='slider'>
            <Carousel autoPlay infiniteLoop showThumbs={false} showArrows>
                <div>
                    <p>Спасибо Ирочке..папапвыпвапывапы...sdffffffffff....аыпавп Ydfgdfgggggggggggggggggf</p>
                </div>
                <div>
                    <p>aasdf</p>
                </div>
                <div>
                    <p>Lsafgfadgdfgsdfg 3</p>
                </div>
            </Carousel >
        </div >
    )
}
