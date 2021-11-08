import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductStyle from "../../features/dashboard/productStyle";
import { product } from "../../../dummyData";

function ProductAccount(props) {
  const [products, setProducts] = useState(product);
  const [removedProductId, setRemovedProductId] = useState([]);


  function removeMyProduct() {
    let updateProducts = [];
    updateProducts = products.filter((item, index) => {
      return !removedProductId.includes(item.id);
    });
    setProducts(updateProducts);
  }
  useEffect(() => {
    removeMyProduct();
  }, [removedProductId]);

  return (
    <div
      className={`products mb-3 content-overlay skeleton-body skel-shop-products  loaded'}`}
    >
      {!products.length ? (
        <p>
          À partir du tableau de bord de votre compte, vous pouvez ajouter un
          produit, consulter vos ventes et vos achats, gérer vos adresses de
          livraison et de facturation et modifier votre mot de passe et les
          détails de votre compte.
        </p>
      ) : (
        <div className="row">
          {products.map((product, index) => (
            <div className="col-5 col-md-4 col-lg-4 col-xl-4" key={index}>
              <ProductStyle
                product={product}
                remove={true}
                setRemovedproductId={setRemovedProductId}
                removedProductId={removedProductId}
              ></ProductStyle>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(ProductAccount);
