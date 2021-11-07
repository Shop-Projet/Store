import React from "react";
import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";

export default function CommentCaMarche() {
  return (
    <>
      <PageHeader title="Comment ça marche" />

      <nav className="breadcrumb-nav">
        <div className="container"></div>
      </nav>
      <div className="main">
        <nav className="breadcrumb-nav border-0 mb-0"></nav>

        <div className="page-content pb-0">
          <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 mb-3 mb-lg-0">
                  <h2 className="title">Who We Are</h2>
                  <p className="lead text-primary mb-3">
                    Pellentesque odio nisi, euismod pharetra a ultricies <br />
                    in diam. Sed arcu. Cras consequat
                  </p>
                  <p className="mb-2">
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor
                    libero sodales leo, eget blandit nunc tortor eu nibh.
                    Suspendisse potenti. Sed egestas, ante et vulputate
                    volutpat, uctus metus libero eu augue.{" "}
                  </p>

                  <ALink
                    href="/"
                    className="btn btn-sm btn-minwidth btn-outline-primary-2"
                  >
                    <span>Retour à la page d'accueil</span>
                    <i className="icon-long-arrow-right"></i>
                  </ALink>
                </div>

                <div className="col-lg-6 offset-lg-1">
                  <div className="about-images">
                    <img
                      src="images/about/img-1.jpg"
                      alt=""
                      className="about-img-front"
                    />
                    <img
                      src="images/about/img-2.jpg"
                      alt=""
                      className="about-img-back"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <h2 className="title mb-1">VENDEZ </h2>
            <p className="mb-3">
              1/ prenez votre article en photo, décrivez le et fixer son prix{" "}
              <br />
              2/COMMANDE CONFIRME : emballez-le et un livreur va le récupérer
              devant chez vous <br />
              3/Encaisser : vous serez encaissé 24H après la réception du colis
            </p>
          </div>
          <div className="col-lg-6">
            <h2 className="title mb-1">ACHETEZ</h2>
            <p className="mb-2">
              1/faites votre choix <br />
              2/commande confirmé : Recevez à domicile <br />
              3/Vous aurez 24H pour réclamer en cas de non confirmé a la
              description, et le retour sera effectué devant votre porte
            </p>
          </div>
        </div>

        <hr className="mt-4 mb-5" />
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-sm-6">
          <div className="icon-box icon-box-sm text-center">
            <span className="icon-box-icon">
              <img
                className="icon-trial"
                src="https://cdn-icons-png.flaticon.com/512/3067/3067260.png"
              />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Faites votre choix</h3>
              <p>Faites votre choix de 5, 10 ou 15 jouets a louer.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          <div className="icon-box icon-box-sm text-center">
            <span
              src=" https://cdn-icons-png.flaticon.com/512/650/650953.png"
              className="icon-box-icon"
            >
              <img
                src=" https://cdn-icons-png.flaticon.com/512/650/650953.png"
                className="icon-trial"
              />
            </span>

            <div className="icon-box-content">
              <h3 className="icon-box-title">Recevez votre box</h3>
              <p>
                Ensuite, vous recevez partout en Tunisie <br />
                votre demande Sghirna en point relais.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          <div className="icon-box icon-box-sm text-center">
            <span className="icon-box-icon">
              <img
                className="icon-trial"
                src="https://cdn-icons.flaticon.com/png/512/2546/premium/2546055.png?token=exp=1636121956~hmac=d6b2656168e131dc2a98e54dfe27989d"
              />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">profitez des jouets!</h3>
              <p>
                Vous provitez de jouets le temps <br />
                que vou voulez. Les frais de casse et la
                <br />
                désinfection sont inclus!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="icon-box icon-box-sm text-center">
            <span className="icon-box-icon">
              <img
                className="icon-trial"
                src="https://cdn-icons.flaticon.com/png/512/2805/premium/2805355.png?token=exp=1636123523~hmac=5775ad7fd7d0e7af1336d35bf4bd9a8c"
              />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">profitez des jouets!</h3>
              <p>
                Vous provitez de jouets le temps <br />
                que vou voulez. Les frais de casse et la
                <br />
                désinfection sont inclus!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content pb-0"></div>
    </>
  );
}
