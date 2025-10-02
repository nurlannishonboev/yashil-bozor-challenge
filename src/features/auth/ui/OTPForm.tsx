import React, { FC } from "react";

interface Props {
  phone: string;
}
export const OTPForm: FC<Props> = ({ phone }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-2">Введите код из смс</h2>
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
    </div>
  );
};
