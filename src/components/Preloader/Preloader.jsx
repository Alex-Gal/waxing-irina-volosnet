import React, { Component } from 'react';
import './Preloader.scss';

export default class Preloader extends Component{
    render(){
        return(
            <div className="preloader">
                <div className="preloader__image_animate"></div>
            </div>
        );
    }
}