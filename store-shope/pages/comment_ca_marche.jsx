import React from "react";
import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";

export default function CommentCaMarche() {
  return (
    <>
      <div className="main">
        <PageHeader
          title="Comment ça marche ?"
          subTitle="Les   étapes   à   suivre"
        />
        <nav className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <ALink href="/">Accueil</ALink>
              </li>
              <li className="breadcrumb-item active">Comment ça marche ?</li>
            </ol>
          </div>
        </nav>
      </div>
    </>
  );
}
