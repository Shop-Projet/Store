import React from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../alink';

import { actions as wishlistAction } from '../../../store/wishlist';
import { actions as cartAction } from '../../../store/cart';

import { isInWishlist } from '../../../utils/index';

function ProductEleven ( props ) {
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
        <div className="product product-7 text-center w-100">
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
                <div className="product-action-vertical">
                    {
                        isInWishlist( wishlist, product ) ?
                            <ALink href="/wishlist" className="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"><span>Afficher mes coups de coeur</span></ALink>
                            :
                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>Ajouter à mes coups de coeur</span></a>

                    }
                            
                </div>
                <div className="product-action">
                   
                    <button className="btn-product btn-cart" onClick={ onCartClick }>
                        <span>Ajouter au panier</span>
                    </button>
                </div>
            </figure>
            <div className="product-body">
                <div className="product-cat">
                        { product.categorie }
                </div>
                <div className="product-cat">
                        { product.etat }
                </div>
                <h3 className="product-title">
                    <ALink href={ `product/${product.id}` }>{ product.npm_du_produit }</ALink>
                </h3>
                <div className="product-price">
                <span className="new-price">{ product.prix.toFixed( 2 ) }DT</span>
                </div>
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

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction } )( ProductEleven );