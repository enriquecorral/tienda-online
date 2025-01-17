import { useSearchParams } from "react-router";
import Header from "../../components/Header";
import { PRODUCTS } from "../../common/data/products";
import Item from "./Item";

function Results() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("query");

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase() === searchText
  );

  return (
    <>
      <Header />
      <div className="results">
        <section className="results__container">
          <div className="results__content">
            <h1 className="results__title">
              {searchText ? `Buscaste: ${searchText}` : "Realiza una búsqueda"}
            </h1>
            {filteredProducts.length === 0 ? (
              <p className="results__message">
                No se encontraron resultados para &quot;{searchText}&quot;.
              </p>
            ) : (
              filteredProducts.map((product) => (
                <Item key={product.id} product={product} />
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Results;
