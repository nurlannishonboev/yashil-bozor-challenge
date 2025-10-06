import React, { FC, useState } from "react";

// interface Props {
//   setStep: (step: "phone" | "code") => void;
// }
// export const PhoneForm = ({ setStep }: Props) => {

// export const PhoneForm = ({
//   setStep,
// }: {
//   setStep: (step: "phone" | "code") => void;
// }) => {

interface Props {
  setStep: (step: "phone" | "code") => void;
  phone: string;
  setPhone: (phoneNumber: string) => void;
}

export const PhoneForm: FC<Props> = ({ setStep, phone, setPhone }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4 mt-10">
        Войти в <span className="">Yashil Bozor</span>
      </h2>
      <p className="text-[#6D6F72] text-sm text-center mb-6">
        Мы отправим код или позвоним. Отвечать на звонок не нужно. Код может
        прийти на почту или в СМС
      </p>

      <div className="mb-4">
        <label htmlFor="phone" className="block  text-gray-500 mb-1">
          Номер телефона
        </label>
        <div className="flex items-center border border-gray-200 bg-[#F0F1F5] rounded-lg overflow-hidden">
          <span className="pl-3 text-gray-700">+998</span>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              // faqat raqamlarni qoldiramiz
              const onlyNums = e.target.value.replace(/\D/g, "");
              // faqat 9 ta raqamdan oshmasin
              if (onlyNums.length <= 9) {
                setPhone(onlyNums);
              }
            }}
            placeholder="00 000-00-00"
            maxLength={9}
            className="flex-1 pr-3 ml-1 py-3 focus:outline-none bg-[#F0F1F5]"
          />
        </div>
      </div>

      <button
        onClick={() => setStep("code")}
        className="w-full bg-[#006241] text-white py-3 rounded-lg hover:bg-green-700 transition"
      >
        Получить код
      </button>
    </div>
  );
};
