"use client";
import { useState } from "react";
import { LoginModal } from "@/features/auth";
import Carusel from "./home/Corusel";
import Text from "./home/Text";
import Praduct from "./home/Praduct";
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
      <header className="w-full max-w-[1400px] m-auto p-4">
        <div className=" rounded-[14px] bg-[#F9FAFB] mx-auto px-4 py-[12.5px] flex items-center h-[73px]">
          <div className="text-2xl font-bold text-gray-800  ml-[20px] mr-[70px]">
            <img
              src="/assets/icons/logo.svg"
              alt="Logo"
              className="w-[82px] h-[56px]"
            />
          </div>
          <div className="w-[131px] h-[48px] bg-[#D4E9E2] text-[#006241] rounded-[14px] mr-[20px] flex items-center justify-center">
            <img src="/assets/icons/Vector.svg" alt="" className="mr-2" />
            Каталог
          </div>

          <div className="flex items-center w-240 h-[48px] border-black/8 border rounded-full mr-[10px] overflow-hidden">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Найти продукты"
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-black/4 text-white px-9 py-3.5">
              <img src="/assets/icons/Vector2.svg" alt="" />
            </button>
          </div>
          <div className="flex items-center w-[308px] gap-2">
            <div className="flex flex-col w-[96px] h-[65px] mt-[10px] mr-[10px] items-center cursor-pointer ">
              <img
                src="/assets/icons/user.svg"
                alt="Войти"
                className="w-6 h-6 mb-1 "
              />
              <span onClick={() => setIsOpen(true)}>Войти</span>
            </div>
            <div className="flex flex-col w-[96px] h-[65px] mt-[10px] mr-[10px]  items-center cursor-pointer">
              <img
                src="/assets/icons/Component 47.svg"
                alt="Избранное"
                className="w-6 h-6 mb-1"
              />
              <span>Избранное</span>
            </div>

            <div className="flex flex-col w-[96px] h-[65px] mt-[10px] mr-[10px]  items-center cursor-pointer">
              <img
                src="/assets/icons/Component 47 (1).svg"
                alt="Корзина"
                className="w-6 h-6 mb-1"
              />
              <span>Корзина</span>
            </div>
          </div>
        </div>
      </header>
      <Text />
      <Carusel />
      <Praduct />
    </>
  );
}
