import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "آموزشگاه فنی نیاوران | دیپلم رسمی، مهارت‌های کاربردی و ورود به بازار کار",
  description: "آموزشگاه نیاوران ارائه‌دهنده دوره‌های تخصصی، مهارتی و دیپلم رسمی در شمال تهران با امکان اخذ مدرک فنی و حرفه‌ای و ورود سریع به بازار کار.",
  keywords: [
    "دیپلم رسمی",
    "دیپلم کاردانش",
    "آموزشگاه نیاوران",
    "دوره فنی حرفه‌ای",
    "آموزش مهارت",
    "دوره‌های کامپیوتر",
    "برنامه‌نویسی",
    "آموزش گردشگری",
    "پایتون",
    "فرانت اند",
    "تهران",
    "تجریش",
    "دیپلم در شمال تهران",
    "آموزشگاه کامپیوتر شمال تهران",
    "آموزشگاه فنی حرفه‌ای شمال تهران",
    "آموزشگاه برق خودرو",
    "آموزش مکانیک خودرو",
    "آموزش حسابداری",
    "آموزش معماری و عمران",
    "آموزش نقشه‌کشی",
    "آموزش هوش مصنوعی",
    "آموزش بک اند",
    "آموزش فرانت اند",
    "آموزش حسابداری مالیاتی",
    "آموزش حسابداری مالی",
    "آموزش حسابداری عملیاتی",
    "آموزش حسابداری با نرم‌افزار",
    "آموزش حسابداری با اکسل", 
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}

