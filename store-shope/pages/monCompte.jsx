import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import ProductAccount from "../componenets/parts/dashboard/productAccount";
import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";
import { product } from "../dummyData";
import { achat } from "../dummyData";
import { vente } from "../dummyData";
import productAccount from "../componenets/parts/dashboard/productAccount";
import { utilisateur } from "../dummyData";
import ImageUploading from "react-images-uploading";
import NbrDenfants from "../componenets/parts/dashboard/nbrDenfants";

function DashBoard() {
  const router = useRouter();
  const type = router.query.type;
  const [mesAchat, setAchat] = useState(achat);
  const [mesVente, setVente] = useState(vente);
  const [mesProduits, setMesProduit] = useState(product);
  const [cartList, setCartList] = useState([]);
  const [user, setUser] = useState(utilisateur);

  const [images, setImages] = React.useState([]);
  const maxNumber = 3;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  function toOrder(e) {
    e.preventDefault();
    document
      .querySelector(
        ".nav-dashboard .react-tabs__tab-list .nav-item:nth-child(2)"
      )
      .click();
  }

  function toAddress(e) {
    e.preventDefault();
    document
      .querySelector(
        ".nav-dashboard .react-tabs__tab-list .nav-item:nth-child(4)"
      )
      .click();
  }

  function toAccount(e) {
    e.preventDefault();
    document
      .querySelector(
        ".nav-dashboard .react-tabs__tab-list .nav-item:nth-child(5)"
      )
      .click();
  }

  function updateCart(e) {
    let button = e.currentTarget;
    button.querySelector(".icon-refresh").classList.add("load-more-rotating");

    setTimeout(() => {
      props.updateCart(cartList);
      button
        .querySelector(".icon-refresh")
        .classList.remove("load-more-rotating");
    }, 400);
  }

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
                        <span className="nav-link">Tableau de bord</span>
                      </Tab>

                      <Tab className="nav-item">
                        <span className="nav-link">Mes achats</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Mes ventes</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Mon Profil</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">Compte Bancaire</span>
                      </Tab>
                      <Tab className="nav-item">
                        <span className="nav-link">justicatif d identité</span>
                      </Tab>

                      <Tab className="nav-item">
                        <span className="nav-link">
                          Information supplémentaire
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
                        {!mesProduits.length ? (
                          <p>
                            À partir du tableau de bord de votre compte, vous
                            pouvez ajouter un produit, consulter vos ventes et
                            vos achats, gérer vos adresses de livraison et de
                            facturation et modifier votre mot de passe et les
                            détails de votre compte.
                          </p>
                        ) : (
                          <ProductAccount products={product} remove={true} />
                        )}
                      </TabPanel>
                      <TabPanel>
                        {!mesAchat.length ? (
                          <div></div>
                        ) : (
                          <div className="col-lg-9">
                            <table className="table table-cart table-mobile">
                              <thead>
                                <tr>
                                  <th>Produit</th>
                                  <th>Prix</th>

                                  <th>date</th>
                                  <th>vendeur</th>
                                  <th>numero de livraison</th>
                                </tr>
                              </thead>

                              <tbody>
                                {mesAchat.length > 0 ? (
                                  mesAchat.map((item, index) => (
                                    <tr key={index}>
                                      <td className="product-col">
                                        <div className="product">
                                          <figure className="product-media">
                                            <ALink
                                              href={`/product/default/${item.slug}`}
                                              className="product-image"
                                            >
                                              <img
                                                src={item.image}
                                                alt="product"
                                              />
                                            </ALink>
                                          </figure>

                                          <h4 className="product-title">
                                            <ALink
                                              href={`/product/default/${item.slug}`}
                                            >
                                              {item.nom_du_produit}
                                            </ALink>
                                          </h4>
                                        </div>
                                      </td>

                                      <td className="total-col">
                                        $
                                        {item.prix.toLocaleString(undefined, {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        })}
                                      </td>

                                      <td className="total-col">{item.date}</td>
                                      <td className="total-col">
                                        {item.vendeur}
                                      </td>
                                      <td className="total-col">
                                        {item.numeroDeLivraison}
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td>
                                      <p className="pl-2 pt-1 pb-1">
                                        {" "}
                                        No Products in Cart{" "}
                                      </p>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </TabPanel>

                      <TabPanel>
                        {!mesAchat.length ? (
                          <p>
                            À partir du tableau de bord de votre compte, vous
                            pouvez ajouter un produit, consulter vos ventes et
                            vos achats, gérer vos adresses de livraison et de
                            facturation et modifier votre mot de passe et les
                            détails de votre compte.
                          </p>
                        ) : (
                          //   <ProductAccount products={product} remove={true} />
                          <div className="col-lg-9">
                            <table className="table table-cart table-mobile">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>date</th>
                                  <th>acheteur</th>
                                  <th>gain</th>
                                  <th>progression</th>
                                </tr>
                              </thead>

                              <tbody>
                                {mesVente.length > 0 ? (
                                  mesVente.map((item, index) => (
                                    <tr key={index}>
                                      <td className="product-col">
                                        <div className="product">
                                          <figure className="product-media">
                                            <ALink
                                              href={`/product/default/${item.slug}`}
                                              className="product-image"
                                            >
                                              <img
                                                src={item.image}
                                                alt="product"
                                              />
                                            </ALink>
                                          </figure>

                                          <h4 className="product-title">
                                            <ALink
                                              href={`/product/default/${item.slug}`}
                                            >
                                              {item.nom_du_produit}
                                            </ALink>
                                          </h4>
                                        </div>
                                      </td>

                                      <td className="total-col">
                                        $
                                        {item.prix.toLocaleString(undefined, {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="total-col">{item.date}</td>
                                      <td className="total-col">
                                        {item.acheteur}
                                      </td>
                                      <td className="total-col">{item.gain}</td>
                                      <td className="total-col">
                                        {item.progression}
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td>
                                      <p className="pl-2 pt-1 pb-1">
                                        {" "}
                                        No Products in Cart{" "}
                                      </p>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        )}
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
                            <div className="col-sm-6">
                              <label>Nom D'utilisateur *</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.userName}
                              />
                            </div>
                          </div>

                          <label>Telephone *</label>
                          <input
                            type="number"
                            className="form-control"
                            required
                            placeholder={user.telephone}
                          />
                          <label>Adresse Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            required
                            placeholder={user.mail}
                          />

                          <label>Adresse</label>
                          <input
                            type="string"
                            className="form-control"
                            placeholder={user.adress}
                          />

                          <label>Code Postal </label>
                          <input
                            type="string"
                            className="form-control"
                            placeholder={user.code}
                          />

                          <label>Ville</label>
                          <input
                            type="string"
                            className="form-control mb-2"
                            placeholder={user.ville}
                          />

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
                              <label>Type de compte Rib *</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.TypeRIB}
                              />
                            </div>

                            <div className="col-sm-6">
                              <label>RIB *</label>
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder={user.RIB}
                              />
                            </div>
                            <ImageUploading
                              multiple
                              value={images}
                              onChange={onChange}
                              maxNumber={maxNumber}
                              dataURLKey="data_url"
                            >
                              {({
                                imageList,
                                onImageUpload,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                              }) => (
                                <div>
                                  <button
                                    style={
                                      isDragging ? { color: "red" } : undefined
                                    }
                                    onClick={onImageUpload}
                                    {...dragProps}
                                  >
                                    <img
                                      src="/images/imagePicker/image-picker.PNG"
                                      alt=""
                                    />
                                  </button>
                                  &nbsp;
                                  <div className="d-flex justify-content-center ">
                                    {imageList.map((image, index) => (
                                      <div key={index} className="pr-3 pt-2">
                                        <img
                                          src={image["data_url"]}
                                          alt=""
                                          style={{
                                            width: "180px",
                                            height: "150px",
                                          }}
                                          className="rounded mx-auto d-block img-fluid img-thumbnail"
                                        />
                                        <div className="image-item__btn-wrapper">
                                          <button
                                            className="edit-vente-color"
                                            onClick={() => onImageUpdate(index)}
                                          >
                                            <i className="icon-edit"></i>
                                          </button>
                                          <button
                                            className="edit-vente-color"
                                            onClick={() => onImageRemove(index)}
                                          >
                                            <i className="icon-close"></i>
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </ImageUploading>
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

                          <label>Type D'Identité *</label>
                          <input
                            type="string"
                            className="form-control"
                            required
                            placeholder={user.typeId}
                          />
                          <label>Numéro de CIN *</label>
                          <input
                            type="string"
                            className="form-control"
                            required
                            placeholder={user.CINNum}
                          />

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
                        {" "}
                        <NbrDenfants />{" "}
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
