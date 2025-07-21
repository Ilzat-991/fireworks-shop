'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    area: '',
  });
   
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      let digits = value.replace(/\D/g, '');
      if (digits.length > 10) digits = digits.slice(0, 10);

      let formatted = '';
      if (digits.length > 0) {
        formatted += '(' + digits.slice(0, 3);
      }
      if (digits.length >= 4) {
        formatted += ') ' + digits.slice(3, 6);
      }
      if (digits.length >= 7) {
        formatted += '-' + digits.slice(6, 8);
      }
      if (digits.length >= 9) {
        formatted += '-' + digits.slice(8, 10);
      }

      setForm({ ...form, phone: formatted });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const currentDate = formatDate(new Date()); // Форматируем текущую дату

  const orderData = {
    ...form,
    date: currentDate,
  };

  try {
    const res = await fetch('/api/sendOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (!res.ok) throw new Error();

    alert('🎉 Заказ оформлен и отправлен в Telegram!');
  } catch {
    alert('❌ Ошибка при отправке заказа');
  }
};


  const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
};

  const currentDate = formatDate(new Date());

  return (
    <div className="max-w-xl mx-auto p-6 bg-white/10 rounded-xl shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">🧾 Оформление заказа</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-white">Ваше имя</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-white">Номер телефона</label>
          <div className="flex">
            <span className="bg-gray-300 text-black p-2 rounded-l">+7</span>
            <input
              type="text"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(777) 123-45-67"
              className="w-full p-2 rounded-r bg-white text-black"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-white">Город</label>
          <input
            type="text"
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-white">Район / микрорайон</label>
          <input
            type="text"
            name="area"
            required
            value={form.area}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-white">Дата оформления</label>
          <p className="text-lg font-semibold text-yellow-200">{currentDate} г.</p>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold hover:opacity-90"
        >
          ✅ Подтвердить заказ
        </button>
      </form>
    </div>
  );
}
