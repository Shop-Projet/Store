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
        setIsBottomSticky( router.pathname.includes( 'product' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-dark">
            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget widget-about">
                                <img src="/images/home/logo.PNG" className="footer-logo" alt="Footer Logo" width="78" height="24" />
                                <p>Assurer les besoins de son enfant dans une démarché écoresponsable.</p>

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
                                        <ALink href="/list">J&apos;achète</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/login">Connexion</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Mon Compte</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="/monCompte">Mes Articles</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/vendre">Je vends</ALink>
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
                    >Copyright © { new Date().getFullYear() } Kidzy. All Rights Reserved.</p>

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