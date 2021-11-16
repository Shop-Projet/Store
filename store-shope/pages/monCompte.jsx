/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import ProductAccount from "../components/parts/dashboard/productAccount";
import ALink from "../components/features/alink";
import PageHeader from "../components/features/page-header";
import { achat, utilisateur, vente } from "../dummyData";
import { thePrice } from "../utils";
import Image_profile from "../components/features/dashboard/image";
import NbrDenfants from "../components/parts/dashboard/nbrDenfants";
// comment 

function DashBoard() {
  const [mesAchat, setAchat] = useState(achat);
  const [mesVente, setVente] = useState(vente);
  const [user, setUser] = useState(utilisateur);
  const [images, setImages] = React.useState([]);
  const [image_CIN, setImage_CIN] = React.useState([]);
  const [accountType, setAccountType] = useState("RIB");
  const [idType, setIdType] = useState("CIN");

  return (
    <div className="main">
      <PageHeader title="Mon Compte" subTitle="" />
      <nav className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item active">Mon compte</li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="dashboard">
          <div className="container">
            <ul
              className="nav nav-dashboard flex-column mb-3 mb-md-0"
              role="tablist"
            >
              <Tabs selectedTabClassName="active show">
                <div className="row">
                  <aside className="col-md-4 col-lg-3 mb-md-0 mb-2">
                    <TabList>
                      <Tab className="nav-item">
                        <span className="nav-link">Mon profil</span>
                      </Tab>

                      <Tab className="nav-item">
                        <span className="nav-link">
                          Mes informations bancaires
                        </span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Mes achats</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Mes Ventes</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Mes Articles</span>
                      </Tab>

                      <Tab className="nav-item">
                        <ALink href="/" className="nav-link">
                          Se déconnecter
                        </ALink>
                      </Tab>
                    </TabList>
                  </aside>

                  <div
                    className="col-md-8 col-lg-9"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="tab-pane">
                      <TabPanel>
                        <form action="#">
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Nom </label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.nom ? user.nom : ""}
                              />
                            </div>

                            <div className="col-sm-6">
                              <label>Prénom *</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.prenom}
                              />
                            </div>
                            <div className="col-sm-6">
                              <label>Nom D&apos;utilisateur *</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.userName ? user.userName : ""}
                              />
                            </div>
                            <div className="col-sm-6">
                              <label>Téléphone *</label>
                              <input
                                type="number"
                                className="form-control"
                                required
                                placeholder={
                                  user.telephone ? user.telephone : ""
                                }
                              />
                            </div>
                            <div className="col-sm-12">
                              <NbrDenfants />
                            </div>
                          </div>
                          <label>Adresse Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            required
                            placeholder={user.mail ? user.mail : ""}
                          />

                          <label>Adresse *</label>
                          <input
                            type="string"
                            className="form-control"
                            placeholder={user.adress ? user.adress : ""}
                          />
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Code Postal * </label>
                              <input
                                type="string"
                                className="form-control"
                                placeholder={user.code ? user.code : ""}
                              />
                            </div>
                            <div className="col-sm-6">
                              <label>Ville *</label>
                              <input
                                type="string"
                                className="form-control mb-2"
                                placeholder={user.ville ? user.ville : ""}
                              />
                            </div>
                          </div>
                          <div className="pb-2">
                            <i className="icon-info-circle"></i>
                            <span>
                              {" "}
                              En tant qu&apos;acheteur ce sera votre adresse de
                              livraison et en tant que vendeur ce sera votre
                              adresse de ramassage.{" "}
                            </span>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>SAUVEGARDER LES MODIFICATIONS</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </form>
                      </TabPanel>

                      <TabPanel>
                        <form action="#">
                          <h4
                            style={{ textAlign: "center", color: "#c96" }}
                            className="pb-2"
                          >
                            Compte Bancaire
                          </h4>

                          <div
                            style={{ "box-sizing": "border-box" }}
                            className="row "
                          >
                            <div className="col-sm-6 border-box-Compte ">
                              <div className="col-sm-12">
                                <label>Type du compte *</label>
                                <br />
                                <select
                                  id="type_du_compte"
                                  className="form-control"
                                  onChange={(e) => {
                                    setAccountType(e.target.value);
                                  }}
                                >
                                  <option selected="RIB">RIB</option>
                                  <option value="EDINAR">e-DINAR</option>
                                </select>
                              </div>
                              <div className="col-sm-12">
                                {accountType === "RIB" ? (
                                  <>
                                    <label>RIB *</label>
                                    <input
                                      maxLength="20"
                                      type="tel"
                                      className="form-control"
                                      required
                                      placeholder={
                                        user.RIB
                                          ? user.RIB
                                          : "XX-XXX-XXXXXXXXXXXXX-XX"
                                      }
                                    />{" "}
                                  </>
                                ) : (
                                  <>
                                    <label>EDINAR *</label>
                                    <input
                                      type="tel"
                                      maxLength="16"
                                      className="form-control"
                                      required
                                      placeholder={
                                        user.EDINAR
                                          ? user.EDINAR
                                          : "5359 XXXX XXXX XXXX"
                                      }
                                    />
                                  </>
                                )}
                              </div>
                            </div>
                            <div
                              className="col-lg-6  "
                              style={{
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "center",
                              }}
                            >
                              <div
                                style={{ borderRight: "3px solid #d4dbe0" }}
                              ></div>
                              <div className=" col-lg-12 ">
                                <Image_profile
                                  setImages={setImages}
                                  images={images}
                                  photo={user.RIBPhoto}
                                />
                                <span style={{ fontSize: "1.2rem" }}>
                                  *Photo du RIB avec votre nom et votre numéro
                                  de compte
                                </span>
                              </div>
                            </div>
                          </div>
                          <h4
                            style={{ textAlign: "center", color: "#c96" }}
                            className="pb-2 pt-4"
                          >
                            Justificatif d&apos;identité
                          </h4>

                          <div className="row">
                            <div className="col-sm-6 border-box-Compte ">
                              <div className="col-sm-12">
                                <label>Nom *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder={user.nom ? user.nom : ""}
                                />
                              </div>

                              <div className="col-sm-12">
                                <label>Prénom *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder={user.prenom ? user.prenom : ""}
                                />
                              </div>
                              <div className="">
                                <div className="col-sm-12">
                                  <label>Type d&apos;identité *</label>
                                  <br />
                                  <select
                                    id="type_du_compte"
                                    className="form-control"
                                    onChange={(e) => {
                                      setIdType(e.target.value);
                                    }}
                                  >
                                    <option selected="CIN">CIN</option>
                                    <option value="PASSPORT">PASSEPORT</option>
                                  </select>
                                </div>
                                <div className="col-sm-12">
                                  {idType === "CIN" ? (
                                    <>
                                      <label>Numéro CIN *</label>
                                      <input
                                        type="tel"
                                        className="form-control"
                                        required
                                        placeholder="01234567"
                                        maxLength={8}
                                      />{" "}
                                    </>
                                  ) : (
                                    <>
                                      <label>Numéro Passeport *</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        required
                                        placeholder="E0123456"
                                      />
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-lg-6"
                              style={{
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "center",
                              }}
                            >
                              <div className="col-lg-12  ">
                                <Image_profile
                                  setImages={setImage_CIN}
                                  images={image_CIN}
                                  photo={user.CINPhoto}
                                />
                                <span style={{ fontSize: "1.2rem" }}>
                                  *Photo de la CIN ou du passport
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="pb-2 pt-2">
                            <i className="icon-info-circle"></i>
                            <span>
                              {" "}
                              En cas de vente, vous recevrez votre virement sur
                              ce compte. <br />
                              <i className="icon-info-circle"></i>
                              Vos informations resteront confidentielles.{" "}
                            </span>
                          </div>
                        </form>
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SAUVEGARDER LES MODIFICATIONS</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </TabPanel>
                      <TabPanel>
                        {!mesAchat.length ? (
                          <div>Aucun article.</div>
                        ) : (
                          <div className="col-lg-12">
                            <table className="table table-cart table-mobile ">
                              <thead>
                                <tr style={{ textAlign: "center" }}>
                                  <th>Date</th>
                                  <th className="col-lg-2">
                                    Numéro de livraison
                                  </th>
                                  <th>Article</th>
                                  <th>Prix</th>
                                  <th>Vendeur</th>
                                  <th className="col-lg-2">Progression</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mesAchat.map((item, index) => (
                                  <tr key={index}>
                                    <td className="total-col">{item.date}</td>

                                    <td
                                      className="total-col"
                                      style={{ textAlign: "center" }}
                                    >
                                      N°{item.numeroDeLivraison}
                                    </td>

                                    <td
                                      className="total-col"
                                      style={{ textAlign: "center" }}
                                    >
                                      {item.nom_du_produit}
                                    </td>
                                    <td className="total-col">
                                      {thePrice(item.prix)}
                                      DT
                                    </td>

                                    <td className="total-col">
                                      {item.vendeur}
                                    </td>

                                    <td
                                      className="total-col"
                                      style={{ textAlign: "center" }}
                                    >
                                      {item.progression
                                        ? item.progression
                                        : "en attente"}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </TabPanel>
                      <TabPanel>
                        {!mesVente.length ? (
                          <p>Auncun article.</p>
                        ) : (
                          <div className="col-lg-12">
                            <table className="table table-cart table-mobile">
                              <thead>
                                <tr style={{ textAlign: "center" }}>
                                  <th>Date</th>
                                  <th className="col-lg-2">
                                    Numéro de livraison
                                  </th>
                                  <th>Article</th>
                                  <th>Acheteur</th>
                                  <th>Gain</th>

                                  <th className="col-lg-2">Progression</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mesVente.map((item, index) => (
                                  <tr key={index}>
                                    <td className="total-col">{item.date}</td>

                                    <td
                                      className="total-col"
                                      style={{ textAlign: "center" }}
                                    >
                                      N°
                                      {item.numeroDeLivraison
                                        ? item.numeroDeLivraison
                                        : "12"}
                                    </td>
                                    <td
                                      className="total-col"
                                      style={{ textAlign: "center" }}
                                    >
                                      {item.nom_du_produit}
                                    </td>
                                    <td className="total-col">
                                      {item.acheteur}
                                    </td>
                                    <td className="total-col">
                                      {(item.prix * 0.8).toLocaleString(
                                        undefined,
                                        {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        }
                                      )}
                                      DT
                                    </td>

                                    <td
                                      className="total-col"
                                      style={{ textAlign: "center" }}
                                    >
                                      {item.progression}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </TabPanel>

                      <TabPanel>
                        <ProductAccount />
                      </TabPanel>

                      <TabPanel></TabPanel>
                    </div>
                  </div>
                </div>
              </Tabs>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DashBoard);
