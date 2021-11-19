import React from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../alink';

import { actions as wishlistAction } from '../../../store/wishlist';
import { actions as cartAction } from '../../../store/cart';

import { isInWishlist, thePrice } from '../../../utils/index';

function ProductShop1 ( props ) {
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
            router.push( '/pages/wishlist' );
        }
    }


    return (
        <div className="product product-list">
            <div className="row pr-2">
                <div className="col-lg-3 col-md-3 col-6">
                    <figure className="product-media">
                    <span className="product-label label-new">{product.etat}</span>
                        <ALink href={ `product/${product.id}` }>
                            <LazyLoadImage
                                alt="product"
                                src={ product.image[0]}
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image"
                            />
                        </ALink>
                    </figure>
                </div>
                <div className="col-md-6 order-last">
                    <div className="product-body product-action-inner">
                        <div className="product-cat">
                                { product.categorie }
                        </div>

                        <h3 className="product-title">
                            <ALink href={ `product/${product.id}` }>{ product.nom_du_produit }</ALink>
                        </h3>

                        <div className="product-content">
                            <p>{ product.description }</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-6 order-md-last order-lg-last">
                    <div className="product-list-action " >
                        <div className="product-price "  >
                            <span >{ thePrice(product.prix) }DT</span>
                        </div>
                        <div className="product-action ">
                            {
                                isInWishlist( wishlist, product ) ?
                                    <ALink href="/wishlist" className="btn-product btn-wishlist added-to-wishlist" style={{maxWidth:"100%", justifyContent:"left"}}><span>Mes coups de coeur</span></ALink>
                                    :
                                    <a href="#" className="btn-product btn-wishlist " style={{maxWidth:"100%",justifyContent:"left"}} onClick={ onWishlistClick }><span>Mes coups de coeur </span></a>
                            }
                        </div>
                        <button className="btn-product btn-cart" onClick={ onCartClick }>
                            <span>Ajouter au panier</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.data,
        comparelist: state.comparelist.data
    }
}

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction } )( ProductShop1 );
