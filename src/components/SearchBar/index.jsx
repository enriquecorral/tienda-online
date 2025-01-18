import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

export default function SearchBar({ handleSearch, setSearchText, searchText }) {
  return (
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
  );
}
