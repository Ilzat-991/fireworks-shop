# Используем официальный Node.js образ
FROM node:18-alpine

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь проект
COPY package*.json ./

# Собираем проект (если Next.js)
RUN npm install  #

COPY . .

# Устанавливаем переменную окружения
ENV NODE_ENV=production

# Команда запуска
CMD ["npm", "run", "dev"]

# Пробрасываем порт
EXPOSE 3000
