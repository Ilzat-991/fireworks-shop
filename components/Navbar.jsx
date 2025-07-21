'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/about', label: 'О нас' },
  { href: '/contact', label: 'Контакты' },
  { href: '/cart', label: 'Корзина' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black/80 backdrop-blur sticky top-0 z-50 border-b border-yellow-500">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-yellow-400 font-bold text-xl">🎆 Fireworks Shop</div>
        <div className="flex gap-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                pathname === href
                  ? 'bg-yellow-400 text-black'
                  : 'text-white hover:text-yellow-400'
                  
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}