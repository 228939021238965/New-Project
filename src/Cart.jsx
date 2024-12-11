import React, { createContext, useContext } from "react";
import { CartContext } from "./App";

const Cart = () => {
   const {cart, removeFromCart} = useContext(CartContext);

  return (
    <div style={{
            background: '#ffd',
            maxWidth: '400px',
            margin: 'auto',
            boxShadow: '1px 1px 3px 3px grey',
            borderRadius: '15px'
        }}>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
            <p>Корзина пустая</p>
        ) : (
            <ul style={{listStyle: 'none'}}>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price.toFixed(2)}
                        <button onClick={() => removeFromCart(item.id)} style={{
                            padding: '5px 5px',
                            margin: '5px',
                            background: 'red',
                            color: 'white'
                        }}>Убрать из корзины</button>
                    </li>
                ))}
            </ul>
        )}
    </div>    
  );
};

export default Cart;