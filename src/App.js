import './App.css';
import React, { createContext, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const CartContext = createContext()

const App = () => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart([...cart, product])
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  };
  
return (
  <div style={{
    textAlign: 'center'
  }}>
  <CartContext.Provider value={{cart, addCart, removeFromCart}}>
    <h2>Shopping</h2>
    <ProductList/>
    <Cart/>
  </CartContext.Provider>
  </div>
)
}
export { CartContext };
export default App;
