import React, { useState } from "react";
import { ImagePicker } from "../componenets/features/dashboard/JeVends/imagePicker";
import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";
import { categories } from "../dummyData";

export default function Vendre() {
  const [nomProduit, setNomProduit] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setprix] = useState(0);
  const [categorie, setCategorie] = useState("");
  const [age, setAge] = useState("");
  const [etat, setEtat] = useState("");
  const [sex, setSex] = useState("");
  const [sousCategoriejeux, setSousCategorieJeux] = useState("");
  const [vetements, setSousCategorieVetements] = useState("");

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
                <div className="row">
                  <div className="col-lg-6 col-sm-6 ">
                    <div>
                      <label htmlFor="name">Objet à vendre </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Ex: Nounours, Robot mécanique, Robe rouge ..."
                        required
                        onChange={(e) => setNomProduit(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control validate"
                        rows="10"
                        required
                        placeholder="Ex: Je vends cette poussette avec habillage pluie ..."
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 ">
                    <div>
                      <label htmlFor="etat">Sexe</label>
                      <br />
                      <select
                        id="etat"
                        className="form-control form-select"
                        onChange={(e) => {
                          setSex(e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected hidden>
                          Séléctionner ...
                        </option>
                        <option value="mixte">Mixte</option>
                        <option value="garçon">Garçon</option>
                        <option value="fille">Fille</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="etat">Etat</label>
                      <br />
                      <select
                        id="etat"
                        className="form-control form-select"
                        onChange={(e) => {
                          setEtat(e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected hidden>
                          Séléctionner l&apos;état de l&apos;article
                        </option>
                        <option value="Neuf avec étiquette">
                          Neuf avec étiquette
                        </option>
                        <option value="Neuf sans étiquette">
                          Neuf sans étiquette
                        </option>
                        <option value="Trés bon état">Trés bon état</option>
                        <option value="Bon état">Bon état</option>
                        <option value="Satisfaisant">Satisfaisant</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="category">Catégorie</label>
                      <br />
                      <select
                        id="category"
                        className="form-control form-select"
                        onChange={(e) => {
                          setCategorie(e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected hidden>
                          Séléctionner une catégorie
                        </option>
                        <option value="naissance">Naissance</option>
                        <option value="jouets">Jouets</option>
                        <option value="médiaEtJeux">Média et jeux vidéo</option>
                        <option value="scolaire">Scolaire</option>
                        <option value="décoration">Décoration</option>
                        <option value="livres">Livres</option>
                        <option value="vêtements">Vêtements</option>
                      </select>
                    </div>
                    {categorie === "jouets" ? (
                      <div>
                        <label htmlFor="category">Sous Catégorie</label>
                        <br />
                        <select
                          id="category"
                          className="form-control form-select"
                          onChange={(e) => {
                            setSousCategorieJeux(e.target.value);
                          }}
                          required
                        >
                          <option value="" disabled selected hidden>
                            Séléctionner une Sous Catégorie
                          </option>
                          <option value="jeux d'éveil">
                            Jeux d&apos;éveil
                          </option>
                          <option value="jeux éducatifs">Jeux éducatifs</option>
                          <option value="jeux créatifs">Jeux créatifs</option>
                          <option value="jeux de construction">
                            Jeux de construction
                          </option>
                          <option value="Sport et activités en plein air">
                            Sport et activités en plein air
                          </option>
                        </select>
                      </div>
                    ) : categorie === "vêtements" ? (
                      <div>
                        <label htmlFor="category">Sous Catégorie</label>
                        <br />
                        <select
                          id="category"
                          className="form-control form-select"
                          onChange={(e) => {
                            setSousCategorieVetements(e.target.value);
                          }}
                          required
                        >
                          <option value="" disabled selected hidden>
                            Séléctionner une Sous Catégorie
                          </option>
                          <option value="Vêtements bébé">Vêtements bébé</option>
                          <option value="Manteaux et vestes">
                            Manteaux et vestes
                          </option>
                          <option value="robe">Maillots de bain</option>
                          <option value="hauts">Hauts</option>
                          <option value="bas">Bas</option>
                          <option value="robe">Robe</option>
                          <option value="robe">Pyjama</option>
                          <option value="robe">Chaussures </option>
                          <option value="robe">Accessoires</option>
                        </select>
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                      <label htmlFor="age">Age</label>
                      <br />
                      <select
                        id="age"
                        className="form-control form-select"
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected hidden>
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
                      required
                      onChange={(e) => setprix(e.target.value)}
                    />
                    <span className="input-group-text">DT</span>
                  </div>
                  <div className="pt-2">
                    <i className="icon-long-arrow-right"></i>
                    <span>
                      {" "}
                      Tu gagnes si vendu :{" "}
                      {prix ? (prix * 0.8).toFixed(2) : "0 "} DT (80% du prix)
                    </span>
                  </div>
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
