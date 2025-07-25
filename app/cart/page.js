'use client';

import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <div className="text-center text-2xl py-10">🛒 Ваша корзина пуста</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Корзина</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price} ₸</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-yellow-200 rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-yellow-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Удалить
                </button>
              </div>
            </div>
            <div className="text-lg font-bold">
              {item.price * item.quantity} ₸
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6 text-xl font-semibold">
        Итого: {total} ₸
      </div>

      <div className="mt-6 text-right">
        <Link href="/checkout">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow">
            Перейти к оформлению
          </button>
        </Link>
      </div>
    </div>
  );
}
