'use client';

import { useState } from 'react';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = [
  'Все',
  'Батарея салютов',
  'Римские свечи',
  'Ракеты',
  'Петарды',
  'Фонтаны',
  'Другие товары',
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts =
    selectedCategory === 'Все'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">🎇 Топовые товары</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${
                selectedCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white/20 text-white border border-yellow-400'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
