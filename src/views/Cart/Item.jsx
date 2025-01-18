import { mdiCar } from "@mdi/js";
import Icon from "@mdi/react";

function CartItem({ product, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">
      <div className="item__icon-small">
        <Icon path={mdiCar} size={3} color="#333" />
      </div>
      <div className="cart-item__info">
        <h2 className="cart-item__name">{product.name}</h2>
        <p className="cart-item__price">${product.price.toFixed(2)}</p>
        <p
          className={`cart-item__status ${
            product.inStock ? "available" : "unavailable"
          }`}
        >
          {product.inStock ? "Disponible" : "Agotado"}
        </p>
      </div>
      <div className="cart-item__actions">
        <button
          onClick={() => onRemove(product.id)}
          className="cart-item__button cart-item__button--remove"
        >
          🗑️
        </button>
        <div className="item__quantity-selector">
          <button onClick={() => onDecrease(product.id)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => onIncrease(product.id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
