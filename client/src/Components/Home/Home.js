import React from 'react'
import './Home.css';

export default function Home(){
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slide-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="header-text">
                                        <h2>Get <em>ready</em> for your <br/>business<br/>& upgrade <em>all aspects</em></h2>
                                        <div className="div-dec"></div>
                                        <p>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
                                        <div className="buttons">
                                            <div className="btn btn-success">
                                                <a href="#" className='text-light'>Discover More</a>
                                            </div>
                                            <div className="btn orange-button">
                                                <a href="/create" className='text-light'>Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}