import React, { useState } from "react";
import { ImagePicker } from "../componenets/features/dashboard/JeVends/imagePicker";
import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";

export default function Vendre() {
  const [nomProduit, setNomProduit] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setprix] = useState(0);
  const [categorie, setCategorie] = useState("");
  const [age, setAge] = useState("");
  const [etat, setEtat] = useState("");

  return (
    <div className="main">
      <PageHeader title="Vente" subTitle="Mon article à vendre" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item active">Je vends</li>
          </ol>
        </div>
      </nav>
      <div className="page-content pb-3 ">
        <h2 className="title text-center mb-2">Je vend un article !</h2>
        <div className="container bg-light-2 ">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="about-text text-center mt-3 pb-4">
                <h6 className="mb-1 edit-vente-color pb-2">
                  <i className="icon-long-arrow-down"></i>Prends trois photos
                  chacune d&apos;un angle différent{" "}
                </h6>
                <ImagePicker />
              </div>
              <form>
                <div className="about-text text-center mt-3 ">
                  <h6 className="mb-1 edit-vente-color pb-2">
                    <i className="icon-long-arrow-down"></i>Décris ton article{" "}
                  </h6>
                </div>
                <div>
                  <label htmlFor="name">Objet à vendre </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Ex: Nounours, Robot mécanique, Robe rouge ..."
                    required=""
                    onChange={(e) => setNomProduit(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control validate"
                    rows="3"
                    required=""
                    placeholder="Ex: Je vends cette poussette avec habillage pluie ..."
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <div className="dropdown show">
                    <label htmlFor="etat">Etat</label>
                    <br />
                    <div className="select-box-sell">
                      <select
                        id="etat"
                        onChange={(e) => {
                          setEtat(e.target.value);
                        }}
                      >
                        <option selected="">
                          Séléctionner l&apos;état de l&apos;article
                        </option>
                        <option value="1">Neuf sans étiquette</option>
                        <option value="2">Trés bon état</option>
                        <option value="3">Bon état</option>
                        <option value="4">Satisfaisant</option>
                      </select>
                    </div>
                  </div>
                  <div className="dropdown show">
                    <label htmlFor="category" className="pt-2">
                      Catégorie
                    </label>
                    <br />
                    <div className="select-box-sell">
                      <select
                        id="category"
                        onChange={(e) => {
                          setCategorie(e.target.value);
                        }}
                      >
                        <option selected="">Séléctionner une catégorie</option>
                        <option value="1">Naissance</option>
                        <option value="2">Jeux d&apos;éveil</option>
                        <option value="3">Jeux éducatifs</option>
                        <option value="4">Jeux créatifs</option>
                        <option value="5">Jeux de construction</option>
                        <option value="6">
                          Sport et activités en plein air
                        </option>
                        <option value="7">Média et jeux vidéo</option>
                        <option value="8">Scolaire</option>
                        <option value="9">Décoration</option>
                        <option value="10">Livres</option>
                        <option value="11">Vêtements</option>
                      </select>
                    </div>
                  </div>
                  <div className="dropdown show">
                    <label htmlFor="age" className="pt-2">
                      Age
                    </label>
                    <br />
                    <div className="select-box-sell">
                      <select
                        id="age"
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      >
                        <option selected="">
                          Séléctionner une tranche d&apos;âge
                        </option>
                        <option value="1">De 0 à 6 Mois</option>
                        <option value="2">De 6 Mois à 12 Mois</option>
                        <option value="3">De 12 Mois à 18 Mois</option>
                        <option value="4">De 18 Mois à 24 Mois</option>
                        <option value="5">De 24 Mois à 36 Mois </option>
                        <option value="6">3-4 ans</option>
                        <option value="7">5-7 ans</option>
                        <option value="8">8-11 ans</option>
                        <option value="9">12-14 ans</option>
                        <option value="10">14 +</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="span-vente">
                      *ETAT CATEGORIE ET ÂGE (choisir parmi les listes
                      ci-dessus)
                    </span>
                  </div>
                </div>
                <div className="about-text text-center mt-3">
                  <h6 className="mb-1 edit-vente-color pb-2 pt-4">
                    <i className="icon-long-arrow-down"></i>Fixe ton prix{" "}
                  </h6>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="name">Prix de vente </label> <br />
                  <div className="input-group">
                    <input
                      id="price"
                      name="name"
                      type="number"
                      className="form-control"
                      aria-label="Dollar amount (with dot and two decimal places)"
                      required=""
                      onChange={(e) => setprix(e.target.value)}
                    />
                    <span className="input-group-text">DT</span>
                  </div>
                  <span className="span-vente">
                    Tu gagnes 80% du prix si vendu
                  </span>
                </div>
                <div className="col-12 pb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg  text-uppercase btn-vente-position"
                  >
                    Je vends
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
