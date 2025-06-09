import { Phone, MapPin, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-6 px-4 border-t-[1px] border-[#FFFFFF40]" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-right" dir="rtl">

        {/* بخش تماس */}
        <div>
          <h3 className="text-xl font-bold mb-4">ارتباط با ما</h3>
          <ul className="text-sm text-gray-300 space-y-3 leading-6">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-400 mt-1" />
              <span>
                تهران - تجریش (میدان قدس) - خیابان باهنر (نیاوران) - خیابان دزاشیب (شهید کبیری) - نرسیده به آتش‌نشانی - پلاک ۳۲ - طبقه همکف - واحد ۱۰۴
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a href="tel:+982122743665" className="hover:underline">021-22743665</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a href="tel:+989121727102" className="hover:underline">0912-1727102</a>
            </li>
          </ul>
        </div>

        {/* لینک‌های سریع */}
        <div>
          <h3 className="text-xl font-bold mb-4">لینک‌های مهم</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/courses" className="hover:underline">دوره‌ها</a></li>
            <li><a href="/diploma" className="hover:underline">دیپلم کاردانش</a></li>
            <li><a href="/about" className="hover:underline">درباره ما</a></li>
            <li><a href="/contact" className="hover:underline">تماس با ما</a></li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h3 className="text-xl font-bold mb-4">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="https://instagram.com" target="_blank" className="hover:text-white"><Instagram /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-white"><Facebook /></a>
            <a href="https://youtube.com" target="_blank" className="hover:text-white"><Youtube /></a>
          </div>
          <p className="text-xs text-gray-400 mt-6">© {new Date().getFullYear()} آموزشگاه نیاوران. تمامی حقوق محفوظ است.</p>
        </div>

      </div>
    </footer>
  );
}
