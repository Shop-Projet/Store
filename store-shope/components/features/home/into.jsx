import React from 'react';
import Reveal from 'react-awesome-reveal';
import OwlCarousel from '../owl-carousel';
import {introSlider, fadeInUpShorter } from '../../../utils/data';

export default function Into() {
    return (
        <div>
        <OwlCarousel adClass="intro-slider intro-slider-1 owl-simple owl-light owl-nav-inside" options={ introSlider }>
                                <div className="intro-slide" style={ { backgroundColor: '#b2bec3' } }>
                                        <figure className="slide-image mb-0">
                                            <picture>
                                                <img
                                                    src="images/home/banners/banner4.png"
                                                    alt="Banner"
                                                    style={ { marginLeft: '25%', marginTop: '2%' } }
                                                />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                                <>
                                                    <div className="pb-5 col-10">
                                                        <h3 className="intro-title">  Accompagner son enfant dans son développement. </h3>
                                                    </div>
                                                </>
                                                
                                            </Reveal>
                                        </div>
                                    </div>
                                    <div className="intro-slide" style={ { backgroundColor: '#e77f67' } }>
                                        <figure className="slide-image mb-0">
                                            <picture>
                                                <img
                                                    src="images/home/banners/banner5.png"
                                                    alt="Banner"
                                                    style={ { marginLeft: '38%', marginTop: '1%' } }

                                                />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                            <>
                                                    <div className="pb-4 col-10">
                                                        <h1 className="intro-title">  Gagner de l&apos;argent. </h1>
                                                    </div>
                                                </>
                                            </Reveal>
                                        </div>
                                    </div>
                                    <div className="intro-slide" style={ { backgroundColor: '#cc99cc' } }>
                                        <figure className="slide-image mb-0">
                                            <picture>
                                                <img
                                                    src="images/home/banners/banner14.png"
                                                    alt="Banner"
                                                    style={ { marginLeft: '40%', marginTop: '-2%'} }
                                                />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                            <>
                                                <div className="pt-1 col-10">
                                                    <h3 className="intro-title"> S&apos;inscrire dans une démarche éco-responsable. </h3>
                                                </div>
                                                </>
                                            </Reveal>
                                        </div>
                                    </div>
                                    <div className="intro-slide" style={ { backgroundColor: '#a29bfe' } }>
                                        <figure className="slide-image mb-0">
                                            <picture>
                                                <img
                                                    src="images/home/banners/banner12.png"
                                                    alt="Banner"
                                                    style={ { marginLeft: '40%', marginTop: '2%'} }
                                                />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                                <>
                                                    <div className="pb-5 col-10">
                                                        <h3 className="intro-title">  Désencombrer son intérieur. </h3>
                                                    </div>
                                                </>
                                                
                                            </Reveal>
                                        </div>
                                    </div>
                                </OwlCarousel>
        </div>
    )
}
