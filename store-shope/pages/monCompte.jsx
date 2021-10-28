import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

import ALink from '../componenets/features/alink';
import PageHeader from '../componenets/features/page-header';
import AddProduct from '../componenets/parts/dashboard/addProduct';

function DashBoard () {
    function toOrder ( e ) {
        e.preventDefault();
        document
            .querySelector( '.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(2)' )
            .click();
    }

    function toAddress ( e ) {
        e.preventDefault();
        document
            .querySelector( '.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(4)' )
            .click();
    }

    function toAccount ( e ) {
        e.preventDefault();
        document
            .querySelector( '.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(5)' )
            .click();
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
                        <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
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
                                                <span className="nav-link">Ajouter un article</span>
                                            </Tab>

                                            <Tab className="nav-item">
                                                <span className="nav-link">Détails du compte</span>
                                            </Tab>

                                            <Tab className="nav-item">
                                                <ALink href="/" className="nav-link">Se déconnecter</ALink>
                                            </Tab>
                                        </TabList>
                                    </aside>

                                    <div className="col-md-8 col-lg-9" style={ { marginTop: "1rem" } }>
                                        <div className="tab-pane">
                                            <TabPanel>
                                                <p>À partir du tableau de bord de votre compte, vous pouvez ajouter un produit, consulter vos ventes et vos achats, gérer vos adresses de livraison et de facturation et modifier votre mot de passe et les détails de votre compte.</p>
                                            </TabPanel>

                                            <TabPanel>
                                                <p>No order has been made yet.</p>
                                                <ALink href="#" className="btn btn-outline-primary-2"><span>Boutique</span><i className="icon-long-arrow-right"></i></ALink>
                                            </TabPanel>

                                            <TabPanel>
                                                <p>No downloads available yet.</p>
                                                <ALink href="/" className="btn btn-outline-primary-2"><span>Ajouter un article</span><i className="icon-long-arrow-right"></i></ALink>
                                            </TabPanel>

                                            <TabPanel>
                                            <AddProduct/>
                                            </TabPanel>

                                            <TabPanel>
                                                <form action="#">
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
                                                    <label>Adresse Email *</label>
                                                    <input type="email" className="form-control" required />

                                                    <label>Mot de passe actuel</label>
                                                    <input type="password" className="form-control" />

                                                    <label>Nouveau mot de passe </label>
                                                    <input type="password" className="form-control" />

                                                    <label>Confirmer nouveau mot de passe</label>
                                                    <input type="password" className="form-control mb-2" />

                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SAUVEGARDER LES MODIFICATIONS</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>
                                                </form>
                                            </TabPanel>
                                            <TabPanel>
                                                <div></div>
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
    )
}

export default React.memo( DashBoard );