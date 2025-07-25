// components/Notification.jsx
'use client';

export default function Notification({ show }) {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg animate-fade-in-out z-50">
      ✅ Товар добавлен в корзину!
    </div>
  );
}
