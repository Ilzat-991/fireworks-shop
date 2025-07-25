import '../style/globals.css';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fireworks Shop',
  description: 'Фейерверки от лучшего производителя!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
       
        <Providers>
           <CartProvider>
            <Navbar/>
            {children}
            </CartProvider>
          </Providers>
        
      </body>
    </html>
  );
}
