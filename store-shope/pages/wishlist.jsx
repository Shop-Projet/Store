import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { product } from "../dummyData";
import ALink from "../componenets/features/alink.jsx";
import PageHeader from "../componenets/features/page-header";

import { actions as wishlistAction } from "../store/wishlist";
import { actions as cartAction } from "../store/cart";

function Wishlist(props) {
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    setWishItems(
      props.wishlist.reduce((acc, product) => {
        return [
          ...acc,
          {
            ...product,
          },
        ];
      }, [])
    );
  }, [props.wishlist]);

  function moveToCart(product) {
    props.removeFromWishlist(product);
    props.addToCart(product);
  }

  return (
    <main className="main">
      <PageHeader title="Mes coups de coeur" subTitle="Boutique" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="/list">J&apos;achète</ALink>
            </li>
            <li className="breadcrumb-item active">Mes coups de coeur</li>
          </ol>
        </div>
      </nav>

      <div className="page-content pb-5">
        {wishItems.length > 0 ? (
          <div className="container">
            <table className="table table-wishlist table-mobile">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {wishItems.map((product, index) => (
                  <tr key={index}>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <ALink
                            href={`product/${product.id}`}
                            className="product-image"
                          >
                            <img src={product.image[0]} alt="product" />
                          </ALink>
                        </figure>

                        <h4 className="product-title">
                          <ALink href={`product/${product.id}`}>
                            {product.name}
                          </ALink>
                        </h4>
                      </div>
                    </td>
                    <td className="price-col">
                      <div className="product-price d-inline-block mb-0">
                        <span className="out-price">{product.prix}DT</span>
                      </div>
                    </td>
                    <td className="stock-col">
                      <span
                        className={`${
                          product.status == "vendu"
                            ? "out-of-stock"
                            : "in-stock"
                        }`}
                      >
                        {product.status == "vendu"
                          ? "Out of stock"
                          : "In stock"}
                      </span>
                    </td>
                    <td className="action-col">
                      <div className="dropdown">
                        {product.status === "vendu" ? (
                          <ALink
                            href="#"
                            className="btn btn-block btn-outline-primary-2 btn-select"
                          >
                            Visiter la boutique
                          </ALink>
                        ) : (
                          <button
                            className="btn btn-block btn-outline-primary-2"
                            onClick={(e) => moveToCart(product)}
                          >
                            <i className="icon-cart-plus"></i>
                            Ajouter au panier
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="remove-col">
                      <button
                        className="btn-remove"
                        onClick={(e) => props.removeFromWishlist(product)}
                      >
                        <i className="icon-close"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="wishlist-share">
              <div className="social-icons social-icons-sm mb-2">
                <label className="social-label">Partager sur:</label>
                <ALink href="#" className="social-icon" title="Facebook">
                  <i className="icon-facebook-f"></i>
                </ALink>
                <ALink href="#" className="social-icon" title="Instagram">
                  <i className="icon-instagram"></i>
                </ALink>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="text-center">
              <i
                className="icon-heart-o wishlist-empty d-block"
                style={{ fontSize: "15rem", lineHeight: "1" }}
              ></i>
              <span className="d-block mt-2">
                Aucun produit ajouté à la liste de souhaits
              </span>
              <ALink href="/list" className="btn btn-primary mt-2">
                J&apos;achète
              </ALink>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  wishlist: state.wishlist.data,
});

export default connect(mapStateToProps, { ...wishlistAction, ...cartAction })(
  Wishlist
);
