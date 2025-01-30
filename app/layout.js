"use client";  // Add this line to make the component a Client Component

import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from './context/cartContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import { ThemeProvider } from './context/themeContext';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'Shadow Trade',
  description: 'Buy & Sell with Anonymity',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const storedTheme = sessionStorage.getItem('theme');
    if (storedTheme) {
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = sessionStorage.getItem('theme');
                if (storedTheme) {
                  if (storedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ProductProvider>
            <CartProvider>
              <Header />
              {children}
            </CartProvider>
          </ProductProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
