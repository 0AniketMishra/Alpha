"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            // Retrieve cart state from session storage or return an empty array
            const savedCart = sessionStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Update session storage whenever cartItems state changes
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

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
        setCart(pi);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
