import React from "react";

export default function Text() {
  return (
    <div className=" max-w-[1400px] m-auto p-4 flex">
      <span className="mr-[20px] text-[#6D6F72] cursor-pointer">
        Комнатные растения
      </span>
      <span className="mr-[20px] text-[#6D6F72] cursor-pointer">
        Офисные растения
      </span>
      <span className="mr-[20px] text-[#6D6F72] cursor-pointer">
        Садовые растения
      </span>
      <span className="mr-[20px] text-[#6D6F72] cursor-pointer">
        Модульное озеленение
      </span>
      <span className="mr-[20px] text-[#6D6F72] cursor-pointer">
        Горшки и Кашпо
      </span>
      <span className="mr-[20px] text-[#6D6F72] cursor-pointer">
        Грунты, удобрения и препараты
      </span>
      <span className="mr-[20px] text-[#6D6F72] cursor-pointer items-center justify-around flex">
        Ещё <img src="/assets/icons/arrow-down.svg" alt="" className="ml-2" />
      </span>
    </div>
  );
}
