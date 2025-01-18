import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCar } from "@mdi/js";
import "./Results.css";

function Item({ product, onAddToCart = () => null }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    alert(`Agregado al carrito`);
    onAddToCart(product, quantity);
  };

  return (
    <div className="item">
      {/* Imagen simulada */}
      <div className="item__icon-small">
        <Icon path={mdiCar} size={3} color="#333" />
      </div>

      {/* Contenido del producto */}
      <div className="item__details">
        <h2 className="item__name">{product.name}</h2>
        <p className="item__price">${product.price}</p>

        {product.shipping_cost === 0 ? (
          <p className="item__free-shipping">Envío gratis</p>
        ) : (
          <p className="item__shipping-cost">
            Costo de envío: ${product.shipping_cost}
          </p>
        )}

        <p className="item__rating">
          {product.rating} ⭐ ({product.reviews} opiniones)
        </p>
        <p className="item__seller">Vendido por: {product.seller}</p>
      </div>

      {/* Selector de cantidad y botón de agregar */}
      <div className="item__actions">
        <div className="item__quantity-selector">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button className="item__add-to-cart" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Item;
