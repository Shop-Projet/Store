import { connect } from "react-redux";

import ALink from "../../features/alink";

import { actions } from "../../../store/cart";
import { cartQtyTotal, cartPriceTotal } from "../../../utils/index";

function CartMenu(props) {
  const { cartlist } = props;

  return (
    <div className="dropdown cart-dropdown">
      <ALink
        href="/cart"
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <i className="icon-shopping-cart"></i>
        <span className="cart-count">{cartQtyTotal(cartlist)}</span>
      </ALink>

      <div
        className={`dropdown-menu dropdown-menu-right ${
          cartlist.length === 0 ? "text-center" : ""
        }`}
      >
        {0 === cartlist.length ? (
          <p>Panier vide.</p>
        ) : (
          <>
            <div className="dropdown-cart-products">
              {cartlist.map((item, index) => (
                <div className="product justify-content-between" key={index}>
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <ALink href={`product/${item.id}`}>
                        {item.nom_du_produit}
                      </ALink>
                    </h4>
                  </div>

                  <figure className="product-image-container ml-2">
                    <ALink
                      href='#'
                      className="product-image"
                    >
                      <img src={item.image[0]} alt="product"/>
                    </ALink>
                  </figure>
                  <button
                    className="btn-remove"
                    title="Remove Product"
                    onClick={() => props.removeFromCart(item)}
                  >
                    <i className="icon-close"></i>
                  </button>
                </div>
              ))}
            </div>
            <div className="dropdown-cart-total">
              <span>Total</span>

              <span className="cart-total-price">
                {cartPriceTotal(cartlist).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}DT
              </span>
            </div>

            <div className="dropdown-cart-action">
              <ALink href="/cart" className="btn btn-primary">
              Voir le panier
              </ALink>
              <ALink
                href="/paiement"
                className="btn btn-outline-primary-2"
              >
                <span>Caisse</span>
                <i className="icon-long-arrow-right"></i>
              </ALink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartlist: state.cartlist.data,
  };
}

export default connect(mapStateToProps, { ...actions })(CartMenu);
