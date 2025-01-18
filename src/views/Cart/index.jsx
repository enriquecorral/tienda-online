import { useNavigate } from "react-router";
import Header from "../../components/Header";
import { useCartContext } from "../../app/context/CartContext";
import CartItem from "./Item";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="cart">
        <section className="cart__container">
          <div className="cart__content">
            <h1 className="cart__title">Carrito</h1>
            {cartItems.length === 0 ? (
              <>
                <p className="cart__message">Tu carrito está vacío.</p>
                <button className="cart__button" onClick={() => navigate("/")}>
                  Home
                </button>
              </>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    product={item}
                    onRemove={removeFromCart}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                  />
                ))}
                <div className="cart__summary">
                  <p className="cart__subtotal">
                    Subtotal ({cartItems.length} productos):{" "}
                    <strong>${total.toFixed(2)}</strong>
                  </p>
                  <button
                    className="cart__button"
                    onClick={() => alert(`Pagarás ${total.toFixed(2)}`)}
                  >
                    Proceder al pago
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
