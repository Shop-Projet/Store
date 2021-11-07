import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
// import { product } from '../../../dummyData';
import ProductStyle from "../../features/dashboard/productStyle";
import { actions as myProductAction } from "../../../store/myProduct";

function ProductAccount(props) {
  const { products = [], remove, loading } = props;
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const [cols, setCols] = useState("");
  const [removedProductId, setRemovedProductId] = useState(null);
  const query = useRouter().query;

  useEffect(() => {
    setCols(
      query.type == "boxed"
        ? "col-6 col-md-4 col-lg-4 col-xl-3"
        : "col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2"
    );
  }, [query]);

  useEffect(() => {
    function moveToCart(removedProductId) {
      props.removeFromMyProduct(removedProductId);
    }
  }, [removedProductId]);

  return (
    <div
      className={`products mb-3 content-overlay skeleton-body skel-shop-products ${
        loading ? "" : "loaded"
      }`}
    >
      {products.length == 0 && !loading ? (
        <p className="no-results">Aucun produit.</p>
      ) : (
        <div className="row">
          {loading
            ? fakeArray.map((item, index) => (
                <div className={cols} key={index}>
                  <div className="skel-pro"></div>
                </div>
              ))
            : products.map((product, index) => (
                <div className={`col-5 col-md-4 col-lg-4 col-xl-4`} key={index}>
                  <ProductStyle
                    product={product}
                    remove={remove}
                    productId={setRemovedProductId}
                  ></ProductStyle>
                </div>
              ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(ProductAccount);
