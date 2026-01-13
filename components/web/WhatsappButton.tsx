"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsappButtonProps {
  phoneNumber: string; // Include country code, e.g., 15551234567
  message?: string;
}

export default function WhatsappButton({ phoneNumber, message = "Hello!" }: WhatsappButtonProps) {
  const handleClick = () => {
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
}
