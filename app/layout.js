import './globals.css';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fireworks Shop',
  description: 'Лучшие салюты и пиротехника!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`bg-black text-white ${inter.className}`}>
        <CartProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
