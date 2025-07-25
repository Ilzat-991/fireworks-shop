// components/CartItem.jsx
'use client';

import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex-1 px-4">
        <h4 className="font-semibold text-lg">{item.name}</h4>
        <p className="text-sm text-gray-500">{item.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="bg-red-100 text-red-600 px-2 rounded hover:bg-red-200"
          >
            -
          </button>
          <span className="font-medium">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="bg-green-100 text-green-600 px-2 rounded hover:bg-green-200"
          >
            +
          </button>
        </div>
        <p className="mt-1 text-green-700 font-bold">{item.price * item.quantity} ₸</p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:underline"
      >
        Удалить
      </button>
    </div>
  );
}
