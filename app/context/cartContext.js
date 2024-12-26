"use client"
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cartItems, item]);
    };

    const removeFromCart = (itemID) => {
        setCart(cartItems.filter(item => item.id !== itemID));
    };

    const clearCart = () => {
        setCart([]);
    };
    const updateCart = (pi) => {
        setCart(pi)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
