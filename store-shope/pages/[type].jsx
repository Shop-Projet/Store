import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";

import ALink from "../componenets/features/alink";
import PageHeader from "../componenets/features/page-header";
import ShopList from "../componenets/parts/shop/shopListe";
import Pagination from "../componenets/features/pagination";
import ShopSidebarOne from "../componenets/parts/shop/shopSideBar";
import { age, etat, product } from "../dummyData";

import { scrollToPageContent } from "../utils/index";

function Achete() {
  const router = useRouter();
  const type = router.query.type;
  const query = router.query;
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [firstLoading, setFirstLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [toggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [myProduct, setMyProduct] = useState(product);
  //Get  postes
  const indexLastPost = currentPage * perPage;
  const indexFirstPost = indexLastPost - perPage;
  const products = myProduct.slice(indexFirstPost, indexLastPost);
  const totalCount = myProduct.length;
  let filtred_items = [];
  useEffect(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);
    else setToggle(false);
  }

  function filter(variables) {
    filtred_items = product.filter((item, index) => {
      if (variables.age.length && variables.categorie && variables.sexe.length) {
        return (
          (item.categorie === variables.categorie || item.sousCategorie === variables.categorie) &&
          variables.age.includes(item.age) && variables.sexe.includes
        );
      } else if (!variables.age.length && variables.categorie && !variables.sexe.length) {
        return item.categorie === variables.categorie || item.sousCategorie === variables.categorie;
      } else if (variables.age.length && !variables.categorie && !variables.sexe.length) {
        return variables.age.includes(item.age);
      } else if (!variables.age.length && !variables.categorie && variables.sexe.length) {
        return variables.sexe.includes(item.sexe);
      } else if (variables.age.length && !variables.categorie && variables.sexe.length) {
        return (variables.age.includes(item.age) && variables.sexe.includes(item.sexe))
      } else if (variables.age.length && variables.categorie && !variables.sexe.length) {
        return (variables.age.includes(item.age) && (item.categorie === variables.categorie || item.sousCategorie === variables.categorie))
      } else if (!variables.age.length && variables.categorie && variables.sexe.length) {
        return (variables.sexe.includes(item.sexe) && (item.categorie === variables.categorie || item.sousCategorie === variables.categorie))
      } 
    });
    setMyProduct(filtred_items);
  }

  useEffect(() => {
    let variables = {
      age: query.age ? query.age.split(",") : [],
      sexe: query.sexe ? query.sexe.split( ',' ) : [],
      categorie: query.categorie,
      page: query.page ? parseInt(query.page) : 1,
      perPage: perPage,
    };
    console.log(variables);
    if (variables.age.length || variables.categorie || variables.sexe.length) {
      filter(variables);
    } else {
      setMyProduct(product);
    }
    scrollToPageContent();
  }, [query, perPage]);

  useEffect(() => {
    if (products) setFirstLoading(true);
  }, [products]);

  useEffect(() => {
    if (type == "list") {
      setPerPage(5);
    } else if (type == "list2") {
      setPerPage(6);
    } else if (type == "list3") {
      setPerPage(9);
    } else if (type == "list4") {
      setPerPage(12);
    }
  }, [type]);

  function toggleSidebar() {
    if (
      document.querySelector("body").classList.contains("sidebar-filter-active")
    ) {
      document.querySelector("body").classList.remove("sidebar-filter-active");
    } else {
      document.querySelector("body").classList.add("sidebar-filter-active");
    }
  }

  function hideSidebar() {
    document.querySelector("body").classList.remove("sidebar-filter-active");
  }

  if (error) {
    return <div></div>;
  }

  return (
    <main className="main shop">
      <PageHeader title="Boutique" subTitle="Liste des articles" />
      <nav className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Accueil</ALink>
            </li>
            <li className="breadcrumb-item">J&apos;achète</li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row skeleton-body">
            <div
              className={`col-lg-9 skel-shop-products ${
                !loading ? "loaded" : ""
              }`}
            >
              <div className="toolbox">
                <div className="toolbox-left">
                  {!loading && products ? (
                    <div className="toolbox-info">
                      <span> {products.length} </span>produit(s) sur{" "}
                      <span>{totalCount}</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="toolbox-right">
                  <div className="toolbox-layout">
                    <ALink
                      href="/list"
                      className={`btn-layout ${type == "list" ? "active" : ""}`}
                      scroll={false}
                    >
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="10" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="10" height="4" />
                      </svg>
                    </ALink>

                    <ALink
                      href="/list2"
                      className={`btn-layout ${
                        type == "2cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="10" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                      </svg>
                    </ALink>

                    <ALink
                      href="/list3"
                      className={`btn-layout ${
                        type == "3cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="16" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                      </svg>
                    </ALink>

                    <ALink
                      href="/list4"
                      className={`btn-layout ${
                        type == "4cols" ? "active" : ""
                      }`}
                      scroll={false}
                    >
                      <svg width="22" height="10">
                        <rect x="0" y="0" width="4" height="4" />
                        <rect x="6" y="0" width="4" height="4" />
                        <rect x="12" y="0" width="4" height="4" />
                        <rect x="18" y="0" width="4" height="4" />
                        <rect x="0" y="6" width="4" height="4" />
                        <rect x="6" y="6" width="4" height="4" />
                        <rect x="12" y="6" width="4" height="4" />
                        <rect x="18" y="6" width="4" height="4" />
                      </svg>
                    </ALink>
                  </div>
                </div>
              </div>

              <ShopList
                products={products}
                perPage={perPage}
                loading={loading}
              ></ShopList>

              {totalCount > perPage ? (
                <Pagination
                  perPage={perPage}
                  total={totalCount}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                ></Pagination>
              ) : (
                ""
              )}
            </div>

            <aside
              className={`col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${
                !loading || firstLoading ? "loaded" : ""
              }`}
            >
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <div className="skel-widget"></div>
              <StickyBox className="sticky-content" offsetTop={70}>
                <ShopSidebarOne toggle={toggle}></ShopSidebarOne>
              </StickyBox>
              {toggle ? (
                <button
                  className="sidebar-fixed-toggler"
                  onClick={toggleSidebar}
                >
                  <i className="icon-cog"></i>
                </button>
              ) : (
                ""
              )}
              <div
                className="sidebar-filter-overlay"
                onClick={hideSidebar}
              ></div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Achete;
