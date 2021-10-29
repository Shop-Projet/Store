import Head from 'next/head'
import Image from 'next/image'
import HomeProduct from '../componenets/parts/home/products.jsx'
import { homeData, introSlider, brandSlider, fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter, fadeIn } from '../utils/data';
import Reveal from 'react-awesome-reveal';
import OwlCarousel from '../componenets/features/owl-carousel.jsx';
import ALink from '../componenets/features/alink.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Home() {


  return (

    <div className="main home-page skeleton-body">
            <div className="intro-section pt-5 pb-4" style={ { backgroundImage: 'url(images/home/sliders/intro-bg.jpg)' } }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0">
                                <OwlCarousel adClass="intro-slider intro-slider-1 owl-simple owl-light owl-nav-inside" options={ introSlider }>
                                    <div className="intro-slide" style={ { backgroundImage: 'url(images/home/banners/banner2.webp)'} }>
                                        <figure className="slide-image mb-0"></figure>
                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                                <>
                                                    <h3 className="intro-subtitle">Bienvenue dans </h3>
                                                    <h1 className="intro-title">
                                                    Votre boutique  d&apos;occasion
                                                    </h1>
                                                    <ALink
                                                        href="/shop/sidebar/list"
                                                        className="btn btn-outline-white"
                                                    >
                                                        <span>Boutique</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </>
                                            </Reveal>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                <div className="intro-banners">
                                    <div className="row row-sm">
                                        <div className="col-md-6 col-lg-12">
                                            <div className="banner lazy-media">
                                                <div className="lazy-overlay" style={ { backgroundColor: 'rgb(243, 235, 218)' } }></div>

                                                <LazyLoadImage
                                                    alt="banner"
                                                    src="images/home/banners/banner1.jpg"
                                                    threshold={ 200 }
                                                    width="370"
                                                    height="auto"
                                                    effect="blur"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12">
                                            <div className="banner lazy-media">
                                                <div className="lazy-overlay" style={ { backgroundColor: 'rgb(229, 231, 218)' } }></div>
                                                <LazyLoadImage
                                                    alt="banner"
                                                    src="images/home/banners/banner3.jpg"
                                                    threshold={ 200 }
                                                    width="370"
                                                    height="auto"
                                                    effect="blur"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                  </div>
                <div className="mb-3"></div>
                </div>
            </div>
            <div className="mb-4"></div>
            <div className="container pt-6">
                <h2 className="title-lg text-center mb-4">Top Catégories</h2>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-display banner-badge lazy-media banner-lg">
                                <figure className="mb-0">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/categories/image-jeux-cat.jpg"
                                        threshold={ 200 }
                                        width="376"
                                        height="auto"
                                        effect="blur"
                                    />
                                </figure>
                                <div className="banner-content banner-content-center">
                                    <ALink className="banner-link" href="/">
                                        <h3 className="banner-title mb-0">Jeux</h3>
                                        <span className="banner-link-text">Boutique<i className="icon-long-arrow-right ml-2"></i> </span>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-sm-6 col-lg-4 order-lg-last">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-display banner-lg banner-badge lazy-media">
                                <figure className="mb-0">
                                    <div className="lazy-overlay"></div>
                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/categories/image-deco-cat.jpg"
                                        threshold={ 200 }
                                        width="376"
                                        height="auto"
                                        effect="blur"
                                    />
                                </figure>
                                <div className="banner-content banner-content-center">
                                    <ALink className="banner-link" href="/">
                                        <h3 className="banner-title mb-0">Décoration</h3>
                                        <span className="banner-link-text">Boutique<i className="icon-long-arrow-right ml-2"></i></span>
                                    </ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="row">
                                <div className="col-lg-12 col-sm-6 col-xs-12">
                                    <div
                                        className="banner banner-display banner-badge banner-sm lazy-media"
                                    >
                                        <figure className="mb-0">
                                            <div className="lazy-overlay"></div>
                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/categories/image-naissance-cat.jpg"
                                                threshold={ 200 }
                                                width="376"
                                                height="auto"
                                                effect="blur"
                                            />
                                        </figure>
                                        <div className="banner-content banner-content-center">
                                            <div className="banner-content banner-content-center">
                                                <ALink className="banner-link" href="/">
                                                    <h3 className="banner-title mb-0">Naissance</h3>
                                                    <span className="banner-link-text">Boutique<i className="icon-long-arrow-right ml-2"></i></span>
                                                </ALink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-6 col-xs-12">
                                    <div
                                        className="banner banner-display banner-badge banner-sm lazy-media"
                                    >
                                        <figure className="mb-0">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/categories/image-scol-cat.jpg"
                                                threshold={ 200 }
                                                width="376"
                                                height="auto"
                                                effect="blur"
                                            />
                                        </figure>
                                        <div className="banner-content banner-content-center">
                                            <ALink className="banner-link" href="/">
                                                <h3 className="banner-title mb-0">Scolaire </h3>
                                                <span className="banner-link-text">Boutique<i className="icon-long-arrow-right ml-2"></i></span>
                                            </ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="container pt-6">
            <HomeProduct/>
            </div>
            <div className="mb-5"></div>
            <div className="container">
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="icon-box px-0 icon-box-card text-center bg-white">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-heartbeat"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Garantie hygiène </h3>
                                    <p>Protocole strict de désinfection de chaque article</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="icon-box px-0 icon-box-card text-center bg-white">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-rotate-left"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Retour et réclamation</h3>
                                    <p>En cas de non conformité, l&apos;acheteur aura 24H pour réclamer a partir de la date de la livraison.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                            <div className="icon-box px-0 icon-box-card text-center bg-white">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-life-ring"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Garantie qualité </h3>
                                    <p>La conformité de l&apos;article par rapport à la description du vendeur est vérifié avant l&apos;envoi à l&apos;acheteur.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
  );
}
