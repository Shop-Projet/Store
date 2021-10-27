import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import ALink from '../../features/alink';
import { actions as wishlistAction } from '../../../store/wishlist';
import { actions as cartAction } from '../../../store/cart';
import { canAddToCart, isInWishlist } from '../../../utils/index';

function DetailTwo ( props ) {
    const router = useRouter();
    const { product } = props;

    function onWishlistClick ( e ) {
        e.preventDefault();
        if ( !isInWishlist( props.wishlist, product ) ) {
            props.addToWishlist( product );
        } else {
            router.push( '/wishlist' );
        }
    }


    function onCartClick ( e ) {
        e.preventDefault();
        if ( e.currentTarget.classList.contains( 'btn-disabled' ) ) return;
        let newProduct = { ...product };
        props.addToCart(
            newProduct
        );
    }

    if ( !product ) {
        return <div></div>;
    }

    return (
        <div className="product-details product-details-centered">
            <h1 className="product-title">{ product.nom_du_produit }</h1>
            {
                product.status == "disponible" ?
                    <div className="product-price">
                        <span className="out-price">
                            <span>${ product.prix.toFixed( 2 ) }</span>
                        </span>
                    </div>
                    :
                    ""
            }
            <div className="product-content">
                <p>{ product.description }</p>
            </div>
            <div className="product-details-action">
                <div className="details-action-col">
                    <a
                        href="#"
                        className={ `btn-product btn-cart ${( !canAddToCart( props.cartlist, product ) || ( product.status == "vendu" ) ) ? 'btn-disabled' : ''}` }
                        onClick={ onCartClick }
                    >
                        <span>Ajouter au panier</span>
                    </a>
                </div>
                <div className="details-action-wrapper">
                    {
                        isInWishlist( props.wishlist, product ) ?
                            <ALink href="/wishlist" className="btn-product btn-wishlist added-to-wishlist"><span>Afficher mes favoris</span></ALink>
                            :
                            <a href="#" className="btn-product btn-wishlist" onClick={ onWishlistClick }><span>Ajouter aux favoris</span></a>

                    }
                </div>
            </div >

            <div className="product-details-footer">
                <div className="product-cat">
                    <span>Categorie:</span>
                    { product.categorie }
                </div >

                <div className="social-icons social-icons-sm">
                    <span className="social-label">Partager sur:</span>
                    <ALink href="#" className="social-icon" title="Facebook">
                        <i className="icon-facebook-f"></i>
                    </ALink>
                    <ALink href="#" className="social-icon" title="Instagram">
                        <i className="icon-instagram"></i>
                    </ALink>
                </div>
            </div >
        </div >
    )
}

const mapStateToProps = ( state ) => {
    return {
        cartlist: state.cartlist.data,
        wishlist: state.wishlist.data,
    }
}

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction } )( DetailTwo );
