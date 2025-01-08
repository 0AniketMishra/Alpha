import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CartProvider } from './context/cartContext'
import { ProductProvider } from './context/ProductContext'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shadow Trade',
  description: 'Buy & Sell with Annoymity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
   <CartProvider>
    <Header/>
          {children}
   </CartProvider>
   </ProductProvider>
        <SpeedInsights/>
        </body>
    </html>
  )
}
