import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext({});

// Proveedor del contexto
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const checkout = () => {
    setPurchasedItems([...purchasedItems, ...cartItems]);
    setCartItems([]);
  };

  const returnProduct = (id) => {
    const returnedItem = purchasedItems.find((item) => item.id === id);
    setPurchasedItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
    setCartItems((prevItems) => [...prevItems, returnedItem]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        purchasedItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        checkout,
        returnProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook para consumir el Context
function useCartContext() {
  return useContext(CartContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { useCartContext, CartProvider };
