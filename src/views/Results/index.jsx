import { useSearchParams } from "react-router";
import Header from "../../components/Header";
import { PRODUCTS } from "../../common/data/products";
import { useCartContext } from "../../app/context/CartContext";
import MarginContainer from "../../components/MarginContainer";
import Item from "./Item";

function Results() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("query");
  const { addToCart } = useCartContext();

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase() === searchText
  );

  return (
    <>
      <Header />
      <MarginContainer>
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
              <Item
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))
          )}
        </div>
      </MarginContainer>
    </>
  );
}

export default Results;
