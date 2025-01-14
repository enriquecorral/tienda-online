import Header from "../../components/Header";
import "./Main.css";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="main__container">
          <img
            className="main__image"
            src="https://cdn-icons-png.flaticon.com/512/2250/2250401.png"
          />
          <div className="main__content">
            <h1 className="main__title">
              ¡Bienvenido a nuestra tienda online!
            </h1>
            <p className="main__description">
              Descubre los mejores productos al mejor precio. ¡Explora nuestro
              catálogo y encuentra lo que necesitas!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
