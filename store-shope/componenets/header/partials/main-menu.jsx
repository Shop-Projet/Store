import { useRouter } from "next/router";

import ALink from "../../../componenets/features/alink.jsx";

function MainMenu() {
  const router = useRouter();
  let path = router.asPath;
  let query = router.query;

  function showAllDemos(e) {
    let demoItems = document.querySelectorAll(".demo-item.hidden");

    for (let i = 0; i < demoItems.length; i++) {
      demoItems[i].classList.toggle("show");
    }

    document
      .querySelector(".view-all-demos")
      .classList.toggle("disabled-hidden");
    e.preventDefault();
  }

  return (
    <nav className="main-nav">
      <ul className="menu sf-arrows">
        <li
          className={`megamenu-container ${path === "/" ? "active" : ""}`}
          id="menu-home"
        >
          <ALink href="/" className="pr-2">
            Home
          </ALink>
        </li>
        <li className={path.indexOf("/shop") > -1 ? "active" : ""}>
          <ALink
            href="/shop/"
            className="pr-2"
            scroll={false}
          >
            Shop
          </ALink>
        </li>
        <li className={path.indexOf("/monCompte") > -1 ? "active" : ""}>
          <ALink
            href="/monCompte"
            className="pr-2"
            scroll={false}
          >
            Mon compte
          </ALink>
        </li>
        <li className={path.indexOf("/vendre") > -1 ? "active" : ""}>
          <ALink
            href="/vendre"
            className="pr-2"
            scroll={false}
          >
            Je vends
          </ALink>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
