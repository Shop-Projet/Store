import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ALink from "../alink";

function ProductDashboard(props) {
  const { product, remove, setRemovedproductId, removedProductId } = props;

  return (
    <div className="product">
      <figure className="product-media">
        {product.status === "disponible" ? (
          <span className="product-label label-new">{product.status}</span>
        ) : product.status === "en cours" ? (
          <span className="product-label label-top">{product.status}</span>
        ) : product.status === "livré" || product.status === "vendu" ? (
          <span className="product-label label-sale">{product.status}</span>
        ) : (
          <span className="product-label label-out">{product.status}</span>
        )}
        
          <LazyLoadImage
            alt="product"
            src={product.image[0]}
            threshold={500}
            effect="black and white"
            wrapperClassName="product-image"
          />
        
        {remove ? (
          <div className="product-action action-icon-top">
            <button
              className="btn-product icon-minus"
              onClick={() => {
                setRemovedproductId((removedProductId) => [
                  ...removedProductId,
                  product.id,
                ]);
              }}
            >
              <span>Supprimer</span>
            </button>
            <button className="btn-product icon-edit">
              <ALink href={`product/modifier_article/${product.id - 1}`}>
                <span>Modifier</span>
              </ALink>
            </button>
          </div>
        ) : (
          ""
        )}
      </figure>
      <div className="product-body" style={{textAlign:'center' }}>
        <div className="product-cat">{product.categorie}</div>
        <h3 className="product-title">
          <ALink href={`product/${product.id}`}>{product.nom_du_produit}</ALink>
        </h3>
        <div className="pt-1" >
          <span className="product-title" style={{color:'#c96' }}>{product.prix} DT</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductDashboard);
