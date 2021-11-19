import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { product } from '../../dummyData';

import ALink from './alink';

function MobileMenu () {
    const router = useRouter();
    const [ searchTerm, setSearchTerm ] = useState( "" );


    useEffect( () => {
        router.events.on( 'routeChangeComplete', hideMobileMenu );
    }, [] )

    function hideMobileMenu () {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange ( e ) {
        setSearchTerm( e.target.value );
    }

    function onSubmitSearchForm ( e ) {
        let item;
        e.preventDefault();
        item = product.filter((item, index)=> {
            if (item.nom_du_produit.toLocaleLowerCase() === searchTerm.toLocaleLowerCase()) return item.id
        })
        
        if (item.length) {
            console.log(Math.floor(Math.random() * (item.length)));
        router.push( {
            pathname: `/product/${item[Math.floor(Math.random() * (item.length))].id}`,
        } );
        } else {
            setSearchTerm('aucun résultat')
        }
    }

    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close" onClick={ hideMobileMenu }><i className="icon-close"></i></span>

                <form action="#" method="get" onSubmit={ onSubmitSearchForm } className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="text" className="form-control" value={ searchTerm } onChange={ onSearchChange } name="mobile-search" id="mobile-search" placeholder="Recherche ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>
                <nav className="mobile-nav">
                    <ul className="mobile-menu">
                        <li>
                            <ALink href="/">
                            Accueil
                            <span className="mmenu-btn"></span>
                            </ALink>
                        </li>
                        <li>
                            <ALink href="/comment_ca_marche">
                            Comment ça marche ?
                            <span className="mmenu-btn"></span>
                            </ALink>
                        </li>
                        <li>
                            <ALink href="/list">
                            J&apos;achète
                            <span className="mmenu-btn"></span>
                            </ALink>
                        </li>
                        <li>
                            <ALink href="/vendre">
                            Je vends
                            <span className="mmenu-btn"></span>
                            </ALink>
                        </li>
                        <li>
                            <ALink href="/wishlist">
                            Mes coups de coeur
                            <span className="mmenu-btn"></span>
                            </ALink>
                        </li>
                        
                                   
                        
                      
                      
                    </ul>
                </nav>

                <div className="social-icons">
                    <ALink href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                    <ALink href="#" className="social-icon" title="Instagram"><i className="icon-instagram"></i></ALink>
                </div>
            </div>
        </div>
    )
}

export default React.memo( MobileMenu );