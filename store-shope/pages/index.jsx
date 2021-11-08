import HomeProduct from "../componenets/parts/home/products.jsx";
import { fadeInLeftShorter, fadeInRightShorter, fadeIn } from "../utils/data";
import Reveal from "react-awesome-reveal";
import Into from "../componenets/features/home/into.jsx";
import ALink from "../componenets/features/alink.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  return (
    <div className="main home-page skeleton-body">
      <div
        className="intro-section pt-5 pb-4"
        style={{ backgroundImage: "url(images/home/sliders/intro-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0">
                <Into />
              </div>
            </div>
            <div className="col-lg-4">
              <Reveal
                keyframes={fadeInLeftShorter}
                delay={150}
                duration={1000}
                triggerOnce
              >
                <div className="intro-banners">
                  <div className="row row-sm">
                    <div className="col-md-6 col-lg-12">
                      <div className="banner lazy-media">
                        <div
                          className="lazy-overlay"
                          style={{ backgroundColor: "rgb(243, 235, 218)" }}
                        ></div>

                        <LazyLoadImage
                          alt="banner"
                          src="images/home/banners/banner9.jpg"
                          threshold={200}
                          width="370"
                          height="auto"
                        />

                        <div className="btn-product-gallery2 ">
                          <ALink href="/vendre" className="btn btn-white">
                            <span>JE VENDS</span>
                            <i className="icon-long-arrow-right"></i>
                          </ALink>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-12">
                      <div className="banner lazy-media">
                        <div
                          className="lazy-overlay"
                          style={{ backgroundColor: "rgb(229, 231, 218)" }}
                        ></div>

                        <LazyLoadImage
                          alt="banner"
                          src="images/home/banners/banner8.jpg"
                          threshold={200}
                          width="370"
                          height="auto"
                        />

                        <div className="btn-product-gallery2 ">
                          <ALink href="/list" className="btn btn-white">
                            <span>J&apos;ACHÈTE</span>
                            <i className="icon-long-arrow-right"></i>
                          </ALink>
                        </div>
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
        <h2 className="title-lg text-center mb-4">Catégories</h2>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <Reveal
              keyframes={fadeInLeftShorter}
              delay={150}
              duration={1000}
              triggerOnce
            >
              <div className="banner banner-display banner-badge lazy-media banner-lg">
                <figure className="mb-0">
                  <div className="lazy-overlay"></div>
                  <LazyLoadImage
                    alt="banner"
                    src="images/home/categories/image-jeux-cat.jpg"
                    threshold={200}
                    width="376"
                    height="auto"
                    effect="blur"
                  />
                </figure>
                <div className="btn-product-gallery3">
                  <ALink
                    className="banner-link"
                    href="/list?categorie=Jeux+d%27éveil"
                  >
                    <h3 className="banner-title mb-0">Jouets</h3>
                    <span className="banner-link-text">
                      Boutique<i className="icon-long-arrow-right ml-2"></i>{" "}
                    </span>
                  </ALink>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-sm-6 col-lg-4 order-lg-last">
            <Reveal keyframes={fadeIn} delay={150} duration={1000} triggerOnce>
              <div className="">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <div className="banner banner-display banner-badge banner-sm lazy-media">
                    <figure className="mb-0">
                      <div className="lazy-overlay"></div>
                      <LazyLoadImage
                        alt="banner"
                        src="images/home/categories/image-vet-cat.PNG"
                        threshold={200}
                        width="376"
                        height="auto"
                        effect="blur"
                      />
                    </figure>
                    <div className="btn-product-gallery3">
                      <ALink
                        className="banner-link"
                        href="/list?categorie=Vêtements"
                      >
                        <h3 className="banner-title mb-0">Vêtements</h3>
                        <span className="banner-link-text">
                          Boutique<i className="icon-long-arrow-right ml-2"></i>
                        </span>
                      </ALink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <div className="banner banner-display banner-badge banner-sm lazy-media">
                    <figure className="mb-0">
                      <div className="lazy-overlay"></div>
                      <LazyLoadImage
                        alt="banner"
                        src="images/home/categories/image-deco-cat.jpg"
                        threshold={200}
                        width="376"
                        height="auto"
                        effect="blur"
                      />
                    </figure>
                    <div className="btn-product-gallery3">
                      <ALink
                        className="banner-link"
                        href="/list?categorie=Décoration"
                      >
                        <h3 className="banner-title mb-0">Décoration</h3>
                        <span className="banner-link-text">
                          Boutique<i className="icon-long-arrow-right ml-2"></i>
                        </span>
                      </ALink>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <Reveal keyframes={fadeIn} delay={150} duration={1000} triggerOnce>
              <div className="row">
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <div className="banner banner-display banner-badge banner-sm lazy-media">
                    <figure className="mb-0">
                      <div className="lazy-overlay"></div>
                      <LazyLoadImage
                        alt="banner"
                        src="images/home/categories/image-naissance-cat.jpg"
                        threshold={200}
                        width="376"
                        height="auto"
                        effect="blur"
                      />
                    </figure>
                    <div className="btn-product-gallery3">
                      <ALink
                        className="banner-link"
                        href="/list?categorie=Naissance"
                      >
                        <h3 className="banner-title mb-0">Naissance</h3>
                        <span className="banner-link-text">
                          Boutique<i className="icon-long-arrow-right ml-2"></i>
                        </span>
                      </ALink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <div className="banner banner-display banner-badge banner-sm lazy-media">
                    <figure className="mb-0">
                      <div className="lazy-overlay"></div>

                      <LazyLoadImage
                        alt="banner"
                        src="images/home/categories/image-scol-cat.jpg"
                        threshold={200}
                        width="376"
                        height="auto"
                        effect="blur"
                      />
                    </figure>
                    <div className="btn-product-gallery3">
                      <ALink
                        className="banner-link"
                        href="/list?categorie=Scolaire"
                      >
                        <h3 className="banner-title mb-0">Scolaire </h3>
                        <span className="banner-link-text">
                          Boutique<i className="icon-long-arrow-right ml-2"></i>
                        </span>
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
        <HomeProduct />
      </div>
      <div className="mb-5"></div>
      <div className="container">
        <hr />
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-6">
            <Reveal
              keyframes={fadeInRightShorter}
              delay={150}
              duration={1000}
              triggerOnce
            >
              <div className="icon-box px-0 icon-box-card text-center bg-white">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rotate-left"></i>
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Retour et réclamation</h3>
                  <p>
                    En cas de non conformité, l&apos;acheteur aura 24H pour
                    réclamer a partir de la date de la livraison.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-md-4 col-sm-6">
            <Reveal
              keyframes={fadeInRightShorter}
              delay={150}
              duration={1000}
              triggerOnce
            >
              <div className="icon-box px-0 icon-box-card text-center bg-white">
                <span className="icon-box-icon text-dark">
                  <i className="icon-life-ring"></i>
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Garantie qualité </h3>
                  <p>
                    La conformité de l&apos;article par rapport à la description
                    du vendeur est vérifié avant l&apos;envoi à l&apos;acheteur.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
