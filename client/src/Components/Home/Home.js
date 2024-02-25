import React from 'react'
import Header from '../Header/Header';
import './Home.css';

export default function Home(){
    return (
        <div>
            <Header/>
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
                                            <p>A business website can be as simple as a page with your business's brand and contact details to a complete online store. Some benefits of having a website for your business include: having a digital shopfront for your business. reaching a global audience.</p>
                                            <div className="buttons">
                                                <div className="btn btn-success">
                                                    <a href="#" className='text-light my-5'>Discover More</a>
                                                </div>
                                                <div className="btn orange-button">
                                                    <a href="/create" className='text-light my-2'>Contact Us</a>
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
        </div>
    )
}