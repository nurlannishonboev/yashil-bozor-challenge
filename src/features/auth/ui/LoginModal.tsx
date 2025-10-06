import React, { useState } from "react";
import { PhoneForm } from "./PhoneForm";
import { OTPForm } from "./OTPForm";

interface Props {
  onClose: () => void;
}

export const LoginModal: React.FC<Props> = ({ onClose }) => {
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [phone, setPhone] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[450px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-600 bg-[#F0F1F5] px-2.5 py-1 rounded-4xl mr-2 mb-10 mt-5"
        >
          ✕
        </button>

        {step === "phone" && (
          <PhoneForm setStep={setStep} phone={phone} setPhone={setPhone} />
        )}
        {step === "code" && <OTPForm phone={phone} />}
      </div>
    </div>
  );
};
