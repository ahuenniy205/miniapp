// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово
tg.ready();

// Пример: можно закрыть приложение
// tg.close();

// Пример: выводим информацию о пользователе
console.log("User info:", tg.initDataUnsafe);
