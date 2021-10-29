import { useEffect } from 'react';
import { connect } from 'react-redux';
import SlideToggle from 'react-slide-toggle';

import ALink from '../componenets/features/alink';
import Accordion from '../componenets/features/accordion/accordion';
import Card from '../componenets/features/accordion/card';
// import PageHeader from '~/components/features/page-header';

import { cartPriceTotal } from '../utils/index';

function Checkout ( props ) {
    const { cartlist } = props;

    return (
        <div className="main">
            {/* <PageHeader title="Checkout" subTitle="Shop" /> */}
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Accueil</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/sidebar/list">Boutique</ALink>
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
                                    <label>Région *</label>
                                    <input type="text" className="form-control" required />

                                    <label>Addresse *</label>
                                    <input type="text" className="form-control" placeholder="House number and Street name" required />
                                    <input type="text" className="form-control" placeholder="Appartments, suite, unit etc ..." required />
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

                                    <label>Address Email  *</label>
                                    <input type="email" className="form-control" required />
                                    <label>Notes (optionnel)</label>
                                    <textarea className="form-control" cols="30" rows="4" placeholder="Notes sur votre commande, par ex. notes spéciales pour la livraison"></textarea>
                                </div>

                                <aside className="col-lg-3">
                                    <div className="summary">
                                        <h3 className="summary-title">Votre commande</h3>

                                        <table className="table table-summary">
                                            <thead>
                                                <tr>
                                                    <th>Produit</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                { cartlist.map( ( item, index ) =>
                                                    <tr key={ index }>
                                                        <td>{ item.nom_du_produit}</td>
                                                        <td> { item.prix.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }DT</td>
                                                    </tr>
                                                ) }
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>{ cartPriceTotal( cartlist ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }DT</td>
                                                </tr>
                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>{ cartPriceTotal( cartlist ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }DT</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <Accordion type="checkout">
                                            <Card title=" Paiement à la livraison" expanded={ true }>
                                                Payez en espèces à la réception de votre colis                                                
                                            </Card>

                                            <Card title=" Carte e-dinar">
                                                Le moyen le plus simple, sécurisé et rapide
                                                </Card>

                                            <Card title="Carte bancaire">
                                                Le moyen le plus fiable, sécurisé et rapide
                                                </Card>
                                        </Accordion>

                                        <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
                                            <span className="btn-text">Passer la commande</span>
                                            <span className="btn-hover-text">Confirmer la commande</span>
                                        </button>
                                    </div>
                                </aside>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const mapStateToProps = ( state ) => ( {
    cartlist: state.cartlist.data,
} )

export default connect( mapStateToProps )( Checkout );