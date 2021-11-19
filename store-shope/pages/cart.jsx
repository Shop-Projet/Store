import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ALink from "../components/features/alink";
import PageHeader from "../components/features/page-header";
import { product } from "../dummyData";
import { actions as cartAction } from "../store/cart";
import { cartPriceTotal, thePrice } from "../utils/index";

function Cart(props) {
  const [cartList, setCartList] = useState([]);
  const [auth, setAth] = useState(true);
  const [livraison, setLivraison] = useState(7);

  useEffect(() => {
    setCartList(props.cartItems);
  }, [props.cartItems]);

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

  // useEffect(() => {
  //   setLivraison(Math.floor((cartList.length - 1) / 3 + 1) * 7);
  // }, [cartList]);

  return (
    <div className="main">
      <PageHeader title="Mon panier" subTitle="caisse" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="/list">J&apos;achète</ALink>
            </li>
            <li className="breadcrumb-item active">Panier</li>
          </ol>
        </div>
      </nav>
      <div className="page-content pb-5">
        <div className="cart">
          <div className="container">
            {cartList.length > 0 ? (
              <div className="row">
                <div className="col-lg-9">
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Transaction</th>
                        <th>Article</th>
                        <th>Prix de l&apos;article</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartList.length > 0 ? (
                        cartList.map((item, index) => (
                          <tr key={index}>
                            <td>N°{index + 1}</td>
                            <td className="product-col">
                              <div className="product">
                                <h4 className="product-title">
                                  <ALink href={`product/${item.id}`}>
                                    {item.nom_du_produit}
                                  </ALink>
                                </h4>
                              </div>
                            </td>

                            <td className="price-col">
                              {thePrice(item.prix, true)}DT
                            </td>
                            <td className="remove-col">
                              <button
                                className="btn-remove"
                                onClick={() => props.removeFromCart(item)}
                              >
                                <i className="icon-close"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            <p className="pl-2 pt-1 pb-1"> Panier vide </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <span style={{fontSize:'1.2rem'}}>
                    * Chaque panier est composé de 3 transactions maximum
                  </span>
                  <div className="cart-bottom">
                    <button
                      className="btn btn-outline-dark-2"
                      onClick={updateCart}
                    >
                      <span>Rafraîchir</span>
                      <i className="icon-refresh"></i>
                    </button>
                  </div>
                </div>
                <aside className="col-lg-3">
                  {/* <div className="summary summary-cart">
                    <h3 className="summary-title"></h3>
                    <ALink
                      className="btn btn-outline-primary-2 btn-order btn-block"
                      href={auth ? "/paiement" : "/login"}
                    >
                      PASSER À LA CAISSE
                    </ALink>
                  </div>
                  <ALink
                    href="/list"
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUER MES ACHATS</span>
                    <i className="icon-refresh"></i>
                  </ALink> */}
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>

                    <table className="table table-summary">
                      <tbody>
                        <tr className="summary-subtotal">
                          <td>sous-total:</td>
                          <td>
                            {cartPriceTotal(props.cartItems).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                            DT
                          </td>
                        </tr>
                        <tr className="summary-shipping">
                          <td>Livraison:</td>
                          <td>{livraison}DT</td>
                        </tr>

                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>
                            {(
                              cartPriceTotal(props.cartItems) + 7
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                            DT
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <ALink
                      className="btn btn-outline-primary-2 btn-order btn-block"
                      href={auth ? "/paiement" : "/login"}
                    >
                      PASSER À LA CAISSE
                    </ALink>
                    <p>
                      <br />
                    </p>
                    <ALink
                      href="/list"
                      className="btn btn-outline-dark-2 btn-block mb-3 "
                    >
                      <span>CONTINUER MES ACHATS</span>
                      <i className="icon-refresh"></i>
                    </ALink>
                  </div>
                </aside>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="cart-empty-page text-center">
                    <i
                      className="cart-empty icon-shopping-cart"
                      style={{ lineHeight: 1, fontSize: "15rem" }}
                    ></i>
                    <p className="px-3 py-2 cart-empty mb-3">Panier vide</p>
                    <p className="return-to-shop mb-0">
                      <ALink href="/list" className="btn btn-primary">
                        J&apos;achète
                      </ALink>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cartlist.data,
});

export default connect(mapStateToProps, { ...cartAction })(Cart);
