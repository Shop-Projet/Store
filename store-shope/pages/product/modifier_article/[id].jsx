import React, { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { ImagePicker } from "../../../components/features/dashboard/JeVends/imagePicker";
import ALink from "../../../components/features/alink";
import PageHeader from "../../../components/features/page-header";
import { product } from "../../../dummyData";
import { thePrice, gain } from "../../../utils";

export default function ModifierArticle() {
  const slug = useRouter().query.id;
  const [nomProduit, setNomProduit] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setprix] = useState(0);
  const [categorie, setCategorie] = useState(product[slug].categorie);
  const [age, setAge] = useState("");
  const [etat, setEtat] = useState("");
  const [sex, setSex] = useState("");
  const [sousCategoriejeux, setSousCategorieJeux] = useState("");
  const [vetements, setSousCategorieVetements] = useState("");

useEffect(() => {
  $('#sexe').val((product[slug].sexe).toLowerCase()).prop('selected', true);
  $('#etat').val((product[slug].etat)).prop('selected', true);
  $('#category').val((product[slug].categorie).toLowerCase()).prop('selected', true);
  if (product[slug].sousCategorie) $('#souscategory').val((product[slug].sousCategorie).toLowerCase()).prop('selected', true);
  $('#age').val((product[slug].age)).prop('selected', true);    
}, [])
    

  return (
    <div className="main">
      <PageHeader title="Mon article" subTitle="" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item active">Je modifie mon article </li>
          </ol>
        </div>
      </nav>
      <div className="page-content pb-3 ">
        <h2 className="title text-center mb-2">Je modifie mon article !</h2>
        <div className="container bg-light-2 ">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="about-text text-center mt-3 pb-4">
                <h6 className="mb-1 edit-vente-color pb-2">
                  <i className="icon-long-arrow-down"></i>Prends trois photos
                  chacune d&apos;un angle diff??rent{" "}
                </h6>
                <ImagePicker imagesToModify={product[slug].image} />
              </div>
              <form>
                <div className="about-text text-center mt-3 ">
                  <h6 className="mb-1 edit-vente-color pb-2">
                    <i className="icon-long-arrow-down"></i>D??cris ton article{" "}
                  </h6>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 ">
                    <div>
                      <label htmlFor="name">Objet ?? vendre </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder={
                          product[slug].nom_du_produit
                            ? product[slug].nom_du_produit
                            : "Ex: Nounours, Robot m??canique, Robe rouge ..."
                        }
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
                        placeholder={
                          product[slug].description
                            ? product[slug].description
                            : "Ex: Je vends cette poussette avec habillage pluie ..."
                        }
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 ">
                    <div>
                      <label htmlFor="etat">Sexe</label>
                      <br />
                      <select
                        id="sexe"
                        name="sexe"
                        className="form-control form-select"
                        onChange={(e) => {
                          setSex(e.target.value);
                        }}
                        required
                      >
                        
                        <option value="" disabled selected hidden>
                          S??l??ctionner ...
                        </option>
                        <option value="mixte" >Mixte</option>
                        <option value="gar??on">Gar??on</option>
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
                          S??l??ctionner l&apos;??tat de l&apos;article
                        </option>
                        <option value="Neuf avec ??tiquette">
                          Neuf avec ??tiquette
                        </option>
                        <option value="Neuf sans ??tiquette">
                          Neuf sans ??tiquette
                        </option>
                        <option value="Tr??s bon ??tat">Tr??s bon ??tat</option>
                        <option value="Bon ??tat">Bon ??tat</option>
                        <option value="Satisfaisant">Satisfaisant</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="category">Cat??gorie</label>
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
                          S??l??ctionner une cat??gorie
                        </option>
                        <option value="naissance">Naissance</option>
                        <option value="jouets">Jouets</option>
                        <option value="m??dia et jeux vid??o">M??dia et jeux vid??o</option>
                        <option value="scolaire">Scolaire</option>
                        <option value="d??coration">D??coration</option>
                        <option value="livres">Livres</option>
                        <option value="v??tements">V??tements</option>
                      </select>
                    </div>
                    {(( product[slug].categorie == "Jouets" || product[slug].categorie ) && categorie.toLowerCase() === "jouets")? (
                      <div>
                        <label htmlFor="souscategory">Sous Cat??gorie</label>
                        <br />
                        <select
                          id="souscategory"
                          className="form-control form-select"
                          onChange={(e) => {
                            setSousCategorieJeux(e.target.value);
                          }}
                          required
                        >
                          <option value="" disabled selected hidden>
                            S??l??ctionner une Sous Cat??gorie
                          </option>
                          <option value="jeux d'??veil">
                            Jeux d&apos;??veil
                          </option>
                          <option value="jeux ??ducatifs">Jeux ??ducatifs</option>
                          <option value="jeux cr??atifs">Jeux cr??atifs</option>
                          <option value="jeux constructifs">
                            Jeux constructifs
                          </option>
                          <option value="Sport et activit??s en plein air">
                            Sport et activit??s en plein air
                          </option>
                        </select>
                      </div>
                    ) : ((product[slug].categorie == "V??tements" || product[slug].categorie) && categorie.toLowerCase() === "v??tements" ) ? (
                      <div>
                        <label htmlFor="souscategory">Sous Cat??gorie</label>
                        <br />
                        <select
                          id="souscategory"
                          className="form-control form-select"
                          onChange={(e) => {
                            setSousCategorieVetements(e.target.value);
                          }}
                          required
                        >
                          <option value="" disabled selected hidden>
                            S??l??ctionner une Sous Cat??gorie
                          </option>
                          <option value="v??tements b??b??">V??tements b??b??</option>
                          <option value="manteaux et vestes">
                            Manteaux et vestes
                          </option>
                          <option value="robe" selected>
                            Maillots de bain
                          </option>
                          <option value="hauts">Hauts</option>
                          <option value="bas">Bas</option>
                          <option value="robe">Robe</option>
                          <option value="pyjama">Pyjama</option>
                          <option value="chaussures">Chaussures </option>
                          <option value="accessoires">Accessoires</option>
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
                          S??l??ctionner une tranche d&apos;??ge
                        </option>
                        <option value="De 0 ?? 6 Mois">De 0 ?? 6 Mois</option>
                        <option value="De 6 Mois ?? 12 Mois">De 6 Mois ?? 12 Mois</option>
                        <option value="De 12 Mois ?? 18 Mois">De 12 Mois ?? 18 Mois</option>
                        <option value="De 18 Mois ?? 24 Mois">De 18 Mois ?? 24 Mois</option>
                        <option value="De 24 Mois ?? 36 Mois">De 24 Mois ?? 36 Mois </option>
                        <option value="3-4 ans">3-4 ans</option>
                        <option value="5-7 ans">5-7 ans</option>
                        <option value="8-11 ans">8-11 ans</option>
                        <option value="12-14 ans">12-14 ans</option>
                        <option value={"14 +"}>14 +</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="about-text text-center mt-3">
                  <h6 className="mb-1 edit-vente-color pb-2 pt-4">
                    <i className="icon-long-arrow-down"></i>Fixe ton prix de
                    vente
                  </h6>
                </div>
                <div className="form-group mb-3">
                  <div className="row pl-4">
                    <label htmlFor="name">Prix de vente </label>
                    <div className="input-group col-lg-2 col-sm-3 col-5 ">
                      <input
                        id="price"
                        name="name"
                        type="number"
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                        required
                        placeholder={
                          product[slug].prix ? product[slug].prix : ""
                        }
                        onChange={(e) => setprix(e.target.value)}
                      />
                      <span className="input-group-text">DT</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="row pl-4">
                      <span> Tu gagnes si vendu</span>
                      <div className=" input-group col-lg-2 col-sm-3 col-5">
                        <input
                          name="name"
                          type="number"
                          className="form-control "
                          aria-label="Dollar amount (with dot and two decimal places)"
                          disabled
                          placeholder={
                            !prix
                              ? gain(+product[slug].prix )
                              : gain(prix) 
                          }
                        />
                      <span className="input-group-text">DT</span>

                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="row pl-4">
                      <span> Le prix affich?? sera</span>
                      <div className="input-group col-lg-2 col-sm-3 col-5">
                        <input
                          name="name"
                          type="number"
                          className="form-control "
                          aria-label="Dollar amount (with dot and two decimal places)"
                          disabled
                          placeholder={
                            !prix ? thePrice(+product[slug].prix ): thePrice(+prix) 
                          }
                        />
                      <span className="input-group-text">DT</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg  text-uppercase btn-vente-position"
                  >
                    Je valide
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
