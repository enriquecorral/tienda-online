import Icon from "@mdi/react";
import { mdiStorefrontOutline, mdiCartOutline, mdiMagnify } from "@mdi/js";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo a la izquierda */}
      <section className="header__section header__section--logo">
        <div className="header__logo-container">
          <div
            onClick={() => console.log("Home clicked")}
            style={{ display: "contents" }}
          >
            <Icon path={mdiStorefrontOutline} size={1.2} />
          </div>
        </div>
      </section>

      {/* Barra de búsqueda centrada */}
      <section className="header__section header__section--search">
        <div className="header__search-container">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button className="header__search-button">
            <Icon path={mdiMagnify} size={1} color="gray" />
          </button>
        </div>
      </section>

      {/* Ícono del carrito a la derecha */}
      <section className="header__section header__section--cart">
        <div className="header__cart-container">
          <div
            onClick={() => console.log("Cart clicked")}
            style={{ display: "contents" }}
          >
            <Icon path={mdiCartOutline} size={1.2} />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
