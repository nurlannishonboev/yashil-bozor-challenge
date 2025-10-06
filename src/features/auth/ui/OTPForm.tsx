import React, { FC, useRef } from "react";

interface Props {
  phone: string;
}

export const OTPForm: FC<Props> = ({ phone }) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 mt-15">Введите код из смс</h2>
      <p className="text-gray-500  mb-8">
        Для подтверждения телефона отправили <br />
        6-значный код на <span className="font-medium">+998 {phone}</span>
      </p>

      <div className="flex justify-center gap-6 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            ref={(el) => {
              if (el) inputsRef.current[i] = el;
            }}
            onChange={(e) => handleChange(e, i)}
            className="w-[48px]  h-[48px] text-2xl text-center border bg-[#F0F1F5] rounded-lg "
          />
        ))}
      </div>

      <button className="w-full bg-[#F0F1F5] py-4 rounded-lg mb-10 ">
        Подтвердить
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Не получили код?{" "}
        <span className="text-green-800 font-medium">0:59</span>
      </p>
    </div>
  );
};
