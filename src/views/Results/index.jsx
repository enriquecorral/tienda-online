import { useSearchParams } from "react-router";
import Header from "../../components/Header";

function Results() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("query");

  return (
    <>
      <Header />
      <main className="main">
        <section className="main__container">
          <div className="main__content">
            <h1 className="main__title">
              {searchText ? `Buscaste: ${searchText}` : "Realiza una búsqueda"}
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default Results;
