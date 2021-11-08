import React from "react";
import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";

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
                src="images/comment_ça_marche/icon1.png"
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
              className="icon-box-icon"
            >
              <img
                src="images/comment_ça_marche/icon2.png"
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
