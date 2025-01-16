import { useState } from "react";
import { useNavigate } from "react-router";
import Icon from "@mdi/react";
import { mdiStorefrontOutline, mdiCartOutline, mdiMagnify } from "@mdi/js";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="header__search-button"
            onClick={() => handleSearch()}
          >
            <Icon path={mdiMagnify} size={1} color="gray" />
          </button>
        </div>
      </section>

      {/* Ícono del carrito a la derecha */}
      <section className="header__section header__section--cart">
        <div className="header__cart-container">
          <div
            onClick={() => navigate("/search/")}
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
