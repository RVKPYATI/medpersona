import { writeFile, unlink } from "fs/promises";
import { NextResponse } from "next/server";
import { sendMessageTelegram } from "@/app/utils/telegramSend";

export async function POST(req) {
  //const body = await req.json();
  const data = await req.formData();
  const name = data.get("name");
  const phone = data.get("phone");
  const file = data.get("resume");
  const doctor = data.get("doctor");

  if (file.size) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `/tmp/${file.name}`;

    await writeFile(path, buffer); //Запись в файл
    await sendMessageTelegram(path, name, phone, doctor); //Отправка файла в телеграм
    //await unlink(path); //Удаление файла
  }

  await sendMessageTelegram(undefined, name, phone, doctor);

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
