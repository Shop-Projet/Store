import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import ALink from "../features/alink";
import LoginModal from "../features/modals/login-modal";
import HeaderSearch from "../header/partials/header-search";
import WishlistMenu from "../header/partials/wishlist-menu";
import CartMenu from "../header/partials/cart-menu";
import MainMenu from "../header/partials/main-menu";
import StickyHeader from "../features/sticky-header";

function Header() {
  const router = useRouter();
  const [containerClass, setContainerClass] = useState("container");

  function openMobileMenu() {
    document.querySelector("body").classList.add("mmenu-active");
  }

  useEffect(() => {
    setContainerClass(
      router.asPath.includes("fullwidth") ? "container-fluid" : "container"
    );
  }, [router.asPath]);

  return (
    <header className="header">
      <div className="header-top pt-1">
        <div className={containerClass}>
          <div className="header-right">
            <ul className="top-menu pb-1">
              <li>
                <ALink href="#">Links</ALink>
                <ul>
                  <WishlistMenu />
                  <LoginModal />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <StickyHeader>
        <div className="header-middle sticky-header">
          <div className={containerClass}>
            <div className="header-left">
              <button className="mobile-menu-toggler" onClick={openMobileMenu}>
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>
              <ALink href="/" className="logo">
                <img
                  src="images/logo.png"
                  alt="Sghyrna Logo"
                  width={105}
                  height={24}
                />
              </ALink>
              <MainMenu />
            </div>
            <div className="header-right">
              {/* <HeaderSearch /> */}
              <CartMenu />
            </div>
          </div>
        </div>
      </StickyHeader>
    </header>
  );
}

export default Header;
