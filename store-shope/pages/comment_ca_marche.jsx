/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageHeader from "../componenets/features/page-header";
import Reveal from "react-awesome-reveal";
import { fadeInLeftShorter, fadeInRightShorter, fadeIn } from "../utils/data";

export default function CommentCaMarche() {
  return (
    <>
      <PageHeader title="Comment ça marche ?" />

      <nav className="breadcrumb-nav">
        <div className="container"></div>
      </nav>
      <div className="main">
        <nav className="breadcrumb-nav border-0 mb-0"></nav>

        <div className="page-content pb-0">
          <div className="mb-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <h2 className="title mb-1">VENDEZ </h2>
            <p className="mb-3">
              1/ Prenez votre article en photo, décrivez le et fixer son prix .
              <br />
              2/ Commande confirmée : Emballez-le et un livreur va le récupérer
              devant chez vous. <br />
              3/ Encaisser : Vous serez encaissé 24H après la réception du
              colis.
            </p>
          </div>
          <div className="col-lg-6">
            <h2 className="title mb-1">ACHETEZ</h2>
            <p className="mb-2">
              1/ Faites votre choix ! <br />
              2/ Commande confirmée : Recevez à domicile. <br />
              3/ Vous aurez 24H pour réclamer en cas de non conformité à la
              description, et le retour sera effectué devant votre porte.
            </p>
          </div>
        </div>

        <hr className="mt-4 mb-5" />
      </div>
      <Reveal
        keyframes={fadeInRightShorter}
        delay={150}
        duration={1000}
        triggerOnce
      >
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="icon-box icon-box-sm text-center">
              <span className="icon-box-icon">
                <img
                  className="icon-trial"
                  src="images/comment_ça_marche/computer.png"
                />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">FAITES VOTRE CHOIX </h3>
                <p>Choisissez selon votre besoin</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="icon-box icon-box-sm text-center">
              <span className="icon-box-icon">
                <img
                  src="images/comment_ça_marche/icon14.png"
                  className="icon-trial"
                />
              </span>

              <div className="icon-box-content">
                <h3 className="icon-box-title">RECEVEZ VOTRE COLIS </h3>
                <p>Recevez votre colis chez vous</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="icon-box icon-box-sm text-center">
              <span className="icon-box-icon">
                <img
                  className="icon-trial"
                  src="images/comment_ça_marche/icon12.png"
                />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">PROFITEZ </h3>
                <p>
                Profitez-en le temps que votre enfant en a besoin
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon-box icon-box-sm text-center">
              <span className="icon-box-icon">
                <img
                  className="icon-trial"
                  src="images/comment_ça_marche/refresh.png"
                />
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">RECOMMENCEZ </h3>
                <p>Vendez et/ou achetez de nouveau</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="page-content pb-0"></div>
    </>
  );
}
