// app/api/sendOrder/route.js
export async function POST(req) {
  const body = await req.json();

  const message = `
🛒 Новый заказ:

👤 Имя: ${body.name}
📞 Телефон: +7 ${body.phone}
🏙 Город: ${body.city}
📍 Район: ${body.area}
📅 Дата: ${body.date}
`;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const sendURL = `https://api.telegram.org/bot${token}/sendMessage`;

  const res = await fetch(sendURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  if (!res.ok) {
    return new Response('Ошибка отправки в Telegram', { status: 500 });
  }

  return new Response('Успешно отправлено в Telegram', { status: 200 });
}

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
