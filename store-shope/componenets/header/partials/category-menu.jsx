import { useRouter } from "next/router";

import ALink from "~/components/features/alink";

function CategoryMenu() {
  const query = useRouter().query;

  return (
    <div className="dropdown category-dropdown">
      <ALink
        href="/shop/sidebar/list"
        className="dropdown-toggle"
        title="Browse Categories"
      >
        Browse Categories
      </ALink>

      <div className="dropdown-menu">
        <nav className="side-nav">
          <ul className="menu-vertical sf-arrows">
            <li className={query.categorie == "electronics" ? "active" : ""}>
              <ALink
                href="/shop/sidebar/3cols?category=electronics"
                scroll={false}
              >
                Electronics
              </ALink>
            </li>
            <li className={query.categorie == "gift-idea" ? "active" : ""}>
              <ALink
                href="/shop/sidebar/3cols?category=gift-idea"
                scroll={false}
              >
                Gift Ideas
              </ALink>
            </li>
            <li className={query.categorie == "beds" ? "active" : ""}>
              <ALink href="/shop/sidebar/3cols?category=beds" scroll={false}>
                Beds
              </ALink>
            </li>
            <li className={query.categorie == "lighting" ? "active" : ""}>
              <ALink
                href="/shop/sidebar/3cols?category=lighting"
                scroll={false}
              >
                Lighting
              </ALink>
            </li>
            <li
              className={
                query.categorie == "sofas-and-sleeper-sofas" ? "active" : ""
              }
            >
              <ALink
                href="/shop/sidebar/3cols?category=sofas-and-sleeper-sofas"
                scroll={false}
              >
                Sofas & Sleeper sofas
              </ALink>
            </li>
            <li className={query.categorie == "storage" ? "active" : ""}>
              <ALink href="/shop/sidebar/3cols?category=storage" scroll={false}>
                Storage
              </ALink>
            </li>
            <li
              className={
                query.categorie == "armchairs-and-chaises" ? "active" : ""
              }
            >
              <ALink
                href="/shop/sidebar/3cols?category=armchairs-and-chaises"
                scroll={false}
              >
                Armchairs & Chaises
              </ALink>
            </li>
            <li className={query.categorie == "decoration" ? "active" : ""}>
              <ALink
                href="/shop/sidebar/3cols?category=decoration"
                scroll={false}
              >
                Decoration{" "}
              </ALink>
            </li>
            <li
              className={query.categorie == "kitchen-cabinets" ? "active" : ""}
            >
              <ALink
                href="/shop/sidebar/3cols?category=kitchen-cabinets"
                scroll={false}
              >
                Kitchen Cabinets
              </ALink>
            </li>
            <li
              className={query.categorie == "coffee-and-tables" ? "active" : ""}
            >
              <ALink
                href="/shop/sidebar/3cols?category=coffee-and-tables"
                scroll={false}
              >
                Coffee & Tables
              </ALink>
            </li>
            <li className={query.categorie == "furniture" ? "active" : ""}>
              <ALink
                href="/shop/sidebar/3cols?category=furniture"
                scroll={false}
              >
                Outdoor Furniture{" "}
              </ALink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default CategoryMenu;
