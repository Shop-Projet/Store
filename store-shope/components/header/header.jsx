import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import ALink from "../features/alink";
import LoginModal from "../features/modals/login-modal";
import WishlistMenu from "./partials/wishlist-menu";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import StickyHeader from "../features/sticky-header";
import Notification from "./partials/notification";

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
                  <li>
                  <ALink href="/monCompte">Mon compte</ALink>
                  </li>
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
                  className="pb-2"
                  src="/images/home/logo.PNG"
                  alt="kidzy Logo"
                  width={75}
                  height={18}
                />
              </ALink>
              <MainMenu />
            </div>
            <div className="header-right">
              <Notification/>
              <CartMenu />
            </div>
          </div>
        </div>
      </StickyHeader>
    </header>
  );
}

export default Header;
