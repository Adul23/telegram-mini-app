const TelegramBot = require('node-telegram-bot-api');

const token = "7585113669:AAE0G5e8l_1cEEMBWJrbq0mJfI8xjjagnfg";
const bot = new TelegramBot(token, {polling: true});
const web_app_url = "https://google.com/";
bot.on("polling_error", (msg) => console.log(msg));
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже кнопка', {
      reply_markup: {
        keyboard: [
          [{text: 'Заполнить форму', web_app: {url: web_app_url}}]
        ]
      }
    });
  }
});
