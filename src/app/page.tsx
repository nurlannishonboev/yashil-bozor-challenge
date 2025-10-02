"use client";
import React, { useState } from "react";

export default function Page() {
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-[30px] bg-gray-200">
      <div className="bg-white rounded-2xl shadow-lg w-[450px] p-6 relative">
        <button className="absolute top-3 right-6 text-gray-400 hover:text-gray-600">
          ✕
        </button>

        {/* Agar step = phone bo'lsa */}
        {step === "phone" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">
              Войти в <span className="text-green-800">Yashil Bozor</span>
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Мы отправим код или позвоним. Отвечать на звонок не нужно. Код
              может прийти на почту или в СМС
            </p>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm text-gray-500 mb-1"
              >
                Номер телефона
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <span className="pl-3 text-gray-700">+998</span>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="00 000-00-00"
                  className="flex-1 pr-3 ml-1 py-2 focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => setStep("code")}
              className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Получить код
            </button>
          </>
        )}

        {/* Agar step = code bo'lsa */}
        {step === "code" && (
          <>
            <h2 className="text-xl font-bold text-center mb-2">
              Введите код из смс
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Для подтверждения телефона отправили 6-значный код на{" "}
              <span className="font-medium">+998 {phone}</span>
            </p>

            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 text-center border rounded-lg focus:outline-green-500"
                />
              ))}
            </div>

            <button className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Подтвердить
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Не получили код?{" "}
              <span className="text-green-700 font-medium">0:59</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
