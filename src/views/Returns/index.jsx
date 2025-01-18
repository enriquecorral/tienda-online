import { useCartContext } from "../../app/context/CartContext";
import Header from "../../components/Header";
import MarginContainer from "../../components/MarginContainer";
import "./Returns.css";

function Returns() {
  const { purchasedItems, returnProduct } = useCartContext();

  return (
    <>
      <Header />
      <MarginContainer>
        <h1 className="returns__title">Devoluciones</h1>
        {purchasedItems.length === 0 ? (
          <p className="returns__message">No tienes productos comprados aún.</p>
        ) : (
          <>
            {purchasedItems.map((item) => (
              <div key={item.id} className="returns__item">
                <p>{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio Total: ${item.price * item.quantity}</p>
                <button onClick={() => returnProduct(item.id)}>
                  Devolver producto
                </button>
              </div>
            ))}
          </>
        )}
      </MarginContainer>
    </>
  );
}

export default Returns;
