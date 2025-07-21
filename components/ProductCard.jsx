'use client';

import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white/10 backdrop-blur p-4 rounded-xl shadow-md border border-yellow-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-white mb-1">{product.name}</h2>
      <p className="text-yellow-300 font-bold mb-2">{product.price} ₸</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-medium transition"
      >
        В корзину
      </button>
    </div>
  );
}
