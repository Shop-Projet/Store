import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '../features/alink.jsx';

function Footer () {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-dark">
            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget widget-about">
                                <img src="images/home/logo.PNG" className="footer-logo" alt="Footer Logo" width="85" height="25" />
                                <p>Permettre aux parents de fournir plus de  jouets pour leurs enfants à moindre coût dans une démarche responsable.</p>

                                <div className="social-icons">
                                    <ALink href="#" className="social-icon" title="Facebook">
                                        <i className="icon-facebook-f"></i>
                                    </ALink>
                                    <ALink href="#" className="social-icon" title="Twitter">
                                        <i className="icon-twitter"></i>
                                    </ALink>
                                    <ALink href="#" className="social-icon" title="Instagram">
                                        <i className="icon-instagram"></i>
                                    </ALink>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Liens rapides</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="/">Accueil</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">About us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/contact">Contact</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/login">Log in</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Mon Compte</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#">Mes Produits</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Mes achats</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Mes ventes</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/cart">Panier</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Autres</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#"> Politique de confidentialité</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Termes et conditions</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">FAQ</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ `pb-2 pt-2 ${containerClass}` }>
                    <p
                        className="footer-copyright"
                    >Copyright © { new Date().getFullYear() } Sghyrna. All Rights Reserved.</p>

                </div>
            </div>

            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );