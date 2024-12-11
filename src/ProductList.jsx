import React, { useContext } from "react";
import { CartContext } from "./App";


const ProductList = () => {
    const {addCart} = useContext(CartContext)
    const products = [
        {id: 1, name: 'Яблоко', price: 2},
        {id: 2, name: 'Бананы', price: 4},
        {id: 3, name: 'Лайм', price: 6},
        {id: 4, name: 'Лимонад', price: 8},
        {id: 5, name: 'Сок вишневый', price: 10}
    ];
    
    return (
        <div style={{
            background: '#ff01',
            maxWidth: '400px',
            margin: 'auto',
            boxShadow: '1px 1px 3px 3px grey',
            borderRadius: '15px'
        }}>
            <h2>Продукты</h2>
            <ul style={{listStyle: 'none'}}>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price.toFixed(2)}
                        <button onClick={() => addCart(product)} style={{
                            padding: '5px 5px',
                            margin: '5px',
                            background: '#090',
                            color: 'white'
                        }}>Добавить в корзину</button>
                    </li>
                ))}
            </ul>
        </div>    
    )
};

export default ProductList;
