import TelegramBot from "node-telegram-bot-api";

import { CHAT_ID } from "./constans";

export async function sendMessageTelegram(path, name, phone, doctor) {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

  const results = `<b>Заявка с сайта med-persona.ru</b>
  <u>Дата: ${new Date().toLocaleDateString("ru")}</u>
  Имя: <b>${name}</b>
  Номер телефона: <b>${phone}</b>
  Специалист: <b>${
    doctor === "undefined" || "null" ? "Не определен" : doctor
  }</b>`;

  bot.sendMessage(CHAT_ID, results, {
    parse_mode: "HTML",
  });
  if (path) bot.sendDocument(CHAT_ID, path);
}
