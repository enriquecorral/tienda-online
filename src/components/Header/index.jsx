import { useState } from "react";
import { useNavigate } from "react-router";
import Icon from "@mdi/react";
import { mdiStorefrontOutline, mdiCartOutline, mdiMagnify } from "@mdi/js";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      const encodedSearch = encodeURIComponent(searchText);
      navigate(`/search?query=${encodedSearch}`);
    }
  };

  return (
    <header className="header">
      {/* Logo a la izquierda */}
      <section className="header__section header__section--logo">
        <div className="header__logo-container">
          <div onClick={() => navigate("/")} style={{ display: "contents" }}>
            <Icon path={mdiStorefrontOutline} size={1.2} color="white" />
          </div>
        </div>
      </section>

      {/* Barra de búsqueda centrada */}
      <section className="header__section header__section--search">
        <div className="header__search-container">
          <form onSubmit={handleSearch} className="header__search-form">
            <input
              className="header__search-input"
              type="text"
              placeholder="Buscar.."
              name="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoComplete="off"
            />
            <button className="header__search-button" type="submit">
              <Icon path={mdiMagnify} size={1} color="gray" />
            </button>
          </form>
        </div>
      </section>

      {/* Ícono del carrito a la derecha */}
      <section className="header__section header__section--cart">
        <div className="header__cart-container">
          <button
            className="header__returns-button"
            onClick={() => navigate("/returns")}
          >
            Devoluciones
          </button>
          <div
            onClick={() => navigate("/cart/")}
            className="header__cart-button"
          >
            <Icon path={mdiCartOutline} size={1.2} color="white" />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
