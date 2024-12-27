"use client"
import { createContext, useState, useContext } from 'react';

// Create the Product Context
const ProductContext = createContext();

// Create the Product Provider component
export const ProductProvider = ({ children }) => {
    const [currentProduct, setCurrentProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ currentProduct, setCurrentProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

// Create a custom hook for using the Product Context
export const useProduct = () => {
    return useContext(ProductContext);
};
