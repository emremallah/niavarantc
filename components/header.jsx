"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone } from "lucide-react";

const navItems = [
  { label: "خانه", href: "#" },
  { label: "دوره‌ها", href: "#" },
  { label: "درباره ما", href: "#" },
  { label: "اساتید", href: "#" },
  { label: "تماس با ما", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white border-b-[1px] border-[#FFFFFF45]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">آموزشگاه نیاوران</div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group text-lg transition"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-400 transition-all duration-700 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+982122743655"
            className="flex items-center gap-2 border border-green-400 px-4 py-2 rounded-xl hover:bg-[#FFFFFF20] hover:text-white transition duration-700"
          >
            <Phone size={18} />
            تماس
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 px-4 pb-4 text-center"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 border-b border-white/10 hover:text-green-400 duration-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+982122743655"
                className="mt-4 inline-flex items-center justify-center gap-2 border border-green-400 px-4 py-2 rounded-xl hover:bg-[#FFFFFF20] hover:text-white transition duration-700"
              >
                <Phone size={18} />
                تماس
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
