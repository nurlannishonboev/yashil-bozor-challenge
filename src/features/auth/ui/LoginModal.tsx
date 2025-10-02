import React, { useState } from "react";
import { PhoneForm } from "./PhoneForm";
import { OTPForm } from "./OTPForm";

export const LoginModal = () => {
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
          <PhoneForm setStep={setStep} phone={phone} setPhone={setPhone} />
        )}

        {/* Agar step = code bo'lsa */}
        {step === "code" && <OTPForm phone={phone} />}
      </div>
    </div>
  );
};
