"use client"
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "./header";

export default function Hero() {
  const title = "آموزشگاه نیاوران";
  const subtitle =
    "یادگیری مهارت‌های آینده مثل برنامه‌نویسی، معماری، آفیس، طراحی وب و هوش مصنوعی";
  const buttonText = "مشاوره رایگان";

  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  const controls = useAnimation();

  useEffect(() => {
    async function typeText(text, setter, delay = 100) {
      for (let i = 0; i <= text.length; i++) {
        setter(text.slice(0, i));
        await new Promise((r) => setTimeout(r, delay));
      }
    }

    async function sequence() {
      await controls.start({ opacity: 1, y: 0 });
      await typeText(title, setTypedTitle, 100);
      await new Promise((r) => setTimeout(r, 400));
      await typeText(subtitle, setTypedSubtitle, 40);
    }

    sequence();
  }, [controls]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg1.png')",
      }}
    >
      <Header />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-5xl md:text-5xl font-bold leading-tight"
        >
          {typedTitle}
          <span className="blinking-cursor">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="md:text-xl max-w-2xl text-2xl font-bold"
        >
          {typedSubtitle}
        </motion.p>

        <motion.a
          href="tel:+982122743655"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-white text-2xl border-[1px] border-green-500 font-semibold px-6 py-3 rounded-xl hover:bg-[#FFFFFF20] transition duration-700 cursor-pointer"
        >
          {buttonText}
        </motion.a>
      </div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: white;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
