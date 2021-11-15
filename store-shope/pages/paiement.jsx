import { useEffect } from "react";
import { connect } from "react-redux";
import ALink from "../components/features/alink";
import PageHeader from "../components/features/page-header";
import { cartPriceTotal, thePrice } from "../utils/index";

function Checkout(props) {
  const { cartlist } = props;

  return (
    <div className="main">
      <PageHeader title="Paiement" subTitle="" />
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="/list">J&apos;achète</ALink>
            </li>
            <li className="breadcrumb-item active">Paiement</li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <form action="#">
              <div className="row">
                <div className="col-lg-9">
                  <h2 className="checkout-title">Détails de la facturation</h2>
                  <div className="row">
                    <div className="col-sm-6">
                      <label>Nom *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-sm-6">
                      <label>Prénom *</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <label>Addresse *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="102 rue des jasmins"
                    required
                  />
                  <div className="row">
                    <div className="col-sm-6">
                      <label>Code Postal *</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="col-sm-6">
                      <label>Numéro de téléphone *</label>
                      <input type="tel" className="form-control" required />
                    </div>
                  </div>
                </div>

                <aside className="col-lg-3">
                  <div className="summary">
                    <h3 className="summary-title">Votre commande</h3>

                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>Article</th>
                          <th>Soustotal</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cartlist.map((item, index) => (
                          <>
                            <tr key={index}>
                              <td style={{ borderBottom: "none" }}>
                                {item.nom_du_produit}
                              </td>
                              <td style={{ borderBottom: "none" }}>
                                {" "}
                                {(thePrice(item.prix, true)).toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                                DT
                              </td>
                            </tr>
                          </>
                        ))}
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>
                            {(
                              cartPriceTotal(cartlist) +
                              7 * cartlist.length
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                            DT
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <span>Paiement à la livraison</span>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                      >
                        <span className="btn-text">Passer la commande</span>
                        <span className="btn-hover-text">
                          Confirmer la commande
                        </span>
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => ({
  cartlist: state.cartlist.data,
});

export default connect(mapStateToProps)(Checkout);
