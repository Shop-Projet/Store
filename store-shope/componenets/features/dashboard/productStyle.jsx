import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ALink from '../../../componenets/features/alink';

function ProductDashboard ( props ) {
    const {product, remove, productId} = props
    const router = useRouter();
    

    return (
        <div className="product">
            <figure className="product-media">
                {
                    product.status === 'disponible'?
                        <span className="product-label label-new">{product.status}</span>
                        :  product.status === 'en cours' ? 
                        <span className="product-label label-top">{product.status}</span>  
                        : product.status === 'livré' || product.status === 'vendu' ? 
                        <span className="product-label label-sale">{product.status}</span> 
                        : <span className="product-label label-out">{product.status}</span> 
                }
                <ALink href={ `/product/${product.id}` }>
                    <LazyLoadImage
                        alt="product"
                        src={ product.image }
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="product-image"
                    />
                </ALink>
                {
                    remove ? 
                    <div className="product-action action-icon-top">
                        <button className="btn-product icon-minus" onClick={()=>{productId(product.id)}}>
                        <span>Supprimer</span>
                        </button>
                   </div>
                : ""
                }
                   
            </figure>
            <div className="product-body product-action-inner">
                <div className="product-cat">
                    { product.categorie }
                </div>
                <h3 className="product-title">
                    <ALink href={ `/product/${product.id}` }>{ product.nom_du_produit }</ALink>
                </h3>
                <div className="product-price">
                    <span className="out-price">{ product.prix.toFixed( 2 ) }DT</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ProductDashboard );

