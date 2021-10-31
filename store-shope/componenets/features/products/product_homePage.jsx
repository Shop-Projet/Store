import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../alink.jsx';

import { actions as wishlistAction } from '../../../store/wishlist';
import { actions as cartAction } from '../../../store/cart';
import { actions as compareAction } from '../../../store/compare';

import { isInWishlist } from '../../../utils/index';

function ProductHomePage( props ) {
    const router = useRouter();
    const { product, wishlist } = props;
    

    function onCartClick ( e ) {
        e.preventDefault();
        props.addToCart( product );
    }

    function onWishlistClick ( e ) {
        e.preventDefault();
        if ( !isInWishlist( props.wishlist, product ) ) {
            props.addToWishlist( product );
        } else {
            router.push( '/wishlist' );
        }
    }


    return (
        <div className="product product-11 text-center">
            <figure className="product-media">
                <ALink href={ `/product/${product.id}` }>
                    <LazyLoadImage
                        alt="product"
                        src={product.image}
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="product-image"
                    />
                    
                </ALink>
                <div className="product-action-vertical">
                    {
                        isInWishlist( wishlist, product ) ?
                            <ALink href="/wishlist" className="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"><span>Afficher mes favoris</span></ALink>
                            :
                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>Ajouter aux favoris</span></a>

                    }
                </div>
            </figure>

            <div className="product-body">
                <div className="product-cat">
                    { product.categorie }
                </div>
                <h3 className="product-title">
                    <ALink href={ `/product/${product.id}`  }>{ product.nom_du_produit }</ALink>
                </h3>
                <div className="product-price">
                    <span className="product-price">{ product.prix} DT</span>
                </div>
            </div>
            <div className="product-action">
                <button className="btn-product btn-cart" onClick={ onCartClick }>
                    <span>add to cart</span>
                </button>
                        
            </div>
        </div>
        
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.data,
        comparelist: state.comparelist.data
    }
}

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction, ...compareAction } )( ProductHomePage );