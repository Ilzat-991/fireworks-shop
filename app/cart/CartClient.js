'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">🛒 Ваша корзина</h1>

      {cartItems.length === 0 ? (
        <p className="text-white text-center">Корзина пуста.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white/10 backdrop-blur p-4 rounded-lg"
            >
              <div>
                <h2 className="text-white font-semibold">{item.name}</h2>
                <p className="text-yellow-300">{item.price} ₸ × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-400"
              >
                Удалить
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full"
          >
            Очистить корзину
          </button>
        </div>
      )}
    </div>
  );
}
