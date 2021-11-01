import { useRouter } from "next/router";
import WishlistMenu from "./wishlist-menu.jsx";
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
          Accueil
          </ALink>
        </li>
        <li
          className={`megamenu-container ${path === "/comment-ça-marche" ? "active" : ""}`}
          id="menu-home"
        >
          
          <ALink href="/comment_ca_marche" className="pr-2">
          Comment ça marche ?
          </ALink>
        </li>
        <li className={path.indexOf("/list") > -1 ? "active" : ""}>
          <ALink
            href="/list"
            className="pr-2"
            scroll={false}
          >
            J&apos;achète
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
        <WishlistMenu />
      </ul>
    </nav>
  );
}

export default MainMenu;
