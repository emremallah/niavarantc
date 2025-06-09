"use client";

import { Phone } from "lucide-react";

export default function CallFloatingButton() {
  return (
    <a
      href="tel:+982122743665"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="تماس تلفنی"
    >
      <Phone className="w-5 h-5" />
    </a>
  );
}
