import React, { useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import ProductAccount from "../componenets/parts/dashboard/productAccount";
import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";
import { achat } from "../dummyData";
import { vente } from "../dummyData";
import { utilisateur } from "../dummyData";
import ImageUploading from "react-images-uploading";
import Image_profile from "../componenets/features/dashboard/image";

function DashBoard() {
  const [mesAchat, setAchat] = useState(achat);
  const [mesVente, setVente] = useState(vente);
  const [user, setUser] = useState(utilisateur);
  const [images, setImages] = React.useState([]);
  const [image_CIN, setImage_CIN] = React.useState([]);
  const [accountType, setAccountType] = useState("RIB");
  const [idType, setIdType] = useState("CIN");

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
    <div className="main">
      <PageHeader title="Mon Compte" subTitle="" />
      <nav className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="/shop/sidebar/list">Boutique</ALink>
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
                        <span className="nav-link">Mes Articles</span>
                      </Tab>

                      <Tab className="nav-item">
                        <span className="nav-link">Mes Achats</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Mes Ventes</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Mon Profil</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Compte Bancaire</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">
                          Justificatif D&apos;identité
                        </span>
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
                        <ProductAccount />
                      </TabPanel>
                      <TabPanel>
                        {!mesAchat.length ? (
                          <div>Aucun article.</div>
                        ) : (
                          <div className="col-lg-12">
                            <table className="table table-cart table-mobile ">
                              <thead>
                                <tr style={{ textAlign: "center" }}>
                                  <th>Article</th>
                                  <th>Prix</th>
                                  <th>Date</th>
                                  <th>Vendeur</th>
                                  <th className="col-lg-2">
                                    Numéro de livraison
                                  </th>
                                  <th className="col-lg-2">Progression</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mesAchat.map((item, index) => (
                                  <tr key={index}>
                                    <td className="product-col">
                                      <div className="product">
                                        <figure className="product-media">
                                          <img src={item.image} alt="product" />
                                        </figure>
                                        <h4 className="product-title">
                                          {item.nom_du_produit}
                                        </h4>
                                      </div>
                                    </td>
                                    <td className="total-col">
                                      {item.prix.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      })}
                                      DT
                                    </td>

                                    <td className="total-col">{item.date}</td>
                                    <td className="total-col">
                                      {item.vendeur}
                                    </td>
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
                        {!mesAchat.length ? (
                          <p>Auncun article.</p>
                        ) : (
                          <div className="col-lg-12">
                            <table className="table table-cart table-mobile">
                              <thead>
                                <tr style={{ textAlign: "center" }}>
                                  <th>Article</th>
                                  <th>Date</th>
                                  <th>Acheteur</th>
                                  <th>Gain</th>
                                  <th className="col-lg-2">
                                    Numéro de livraison
                                  </th>
                                  <th className="col-lg-2">Progression</th>
                                </tr>
                              </thead>
                              <tbody>
                                {mesVente.map((item, index) => (
                                  <tr key={index}>
                                    <td className="product-col">
                                      <div className="product">
                                        <figure className="product-media">
                                          <img src={item.image} alt="product" />
                                        </figure>
                                        <h4 className="product-title">
                                          {item.nom_du_produit}
                                        </h4>
                                      </div>
                                    </td>
                                    <td className="total-col">{item.date}</td>
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
                                      N°
                                      {item.numeroDeLivraison
                                        ? item.numeroDeLivraison
                                        : "12"}
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
                        <form action="#">
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Nom </label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.nom}
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
                                placeholder={user.userName}
                              />
                            </div>
                            <div className="col-sm-6">
                              <label>Téléphone *</label>
                              <input
                                type="number"
                                className="form-control"
                                required
                                placeholder={user.telephone}
                              />
                            </div>
                          </div>
                          <label>Adresse Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            required
                            placeholder={user.mail}
                          />

                          <label>Adresse *</label>
                          <input
                            type="string"
                            className="form-control"
                            placeholder={user.adress}
                          />
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Code Postal * </label>
                              <input
                                type="string"
                                className="form-control"
                                placeholder={user.code}
                              />
                            </div>
                            <div className="col-sm-6">
                              <label>Ville *</label>
                              <input
                                type="string"
                                className="form-control mb-2"
                                placeholder={user.ville}
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
                          <div className="row">
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
                              {accountType === "RIB" ? (
                                <>
                                  <label>RIB *</label>
                                  <input
                                    maxLength="20"
                                    type="tel"
                                    className="form-control"
                                    required
                                    placeholder="XX-XXX-XXXXXXXXXXXXX-XX"
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
                                    placeholder="5359 XXXX XXXX XXXX"
                                  />
                                </>
                              )}
                            </div>
                            <div className=" col-lg-12">
                              <Image_profile
                                setImages={setImages}
                                images={images}
                              />
                              <span style={{ fontSize: "0.8rem" }}>
                                *Photo du RIB avec votre nom et votre numéro de
                                compte
                              </span>
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
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Nom *</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.nom}
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
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
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
                            <div className=" col-lg-12 pb-1">
                              <Image_profile
                                setImages={setImage_CIN}
                                images={image_CIN}
                              />
                            </div>
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
