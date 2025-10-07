"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ProductCard() {
  const [count, setCount] = useState(0);
  const [isFav, setIsFav] = useState(false);

  const product = {
    id: 1,
    name: "Тополь пирамидальный",
    price: "120 000 UZS",
    oldPrice: "170 000 UZS",
    discount: "-45%",
    img: "/assets/icons/IMG.svg",
  };

  return (
    <div className="max-w-[1400px] m-auto p-4">
      <div className="w-[264px] h-[440px] bg-white rounded-[14px] overflow-hidden shadow-sm hover:shadow-md transition relative">
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm"
        >
          <FaHeart
            size={18}
            className={isFav ? "text-red-500" : "text-gray-400"}
          />
        </button>

        <div className="w-full h-[320px] flex items-center justify-center bg-[#F7F7F7]">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[320px] object-cover rounded-t-[14px] h-[320px]"
          />
        </div>

        <div className="px-3 mt-3">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-semibold">
              {product.price}
              <span className="text-[14px] text-gray-400 line-through">
                {product.oldPrice}
              </span>
            </span>

            <span className="text-[12px] bg-red-500 text-white font-bold px-2 py-[2px] rounded">
              {product.discount}
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-700">{product.name}</p>
        </div>

        {count === 0 ? (
          <button
            onClick={() => setCount(1)}
            className="w-full mt-3 bg-[#006241] text-white rounded-b-[14px] py-2 flex items-center justify-center hover:bg-[#008f61] transition"
          >
            <img
              src="/assets/icons/Component 47 (1).svg"
              alt="cart"
              className="w-4 h-4 mr-2"
            />
            В корзину
          </button>
        ) : (
          <div className="w-full mt-3 bg-[#F7F5EF] rounded-b-[14px] py-2 flex items-center justify-center gap-6">
            <button
              onClick={() => setCount(count - 1)}
              className="text-xl text-gray-700 hover:text-black"
            >
              –
            </button>
            <span className="font-semibold">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="text-xl text-gray-700 hover:text-black"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
