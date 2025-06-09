import { CheckCircle } from "lucide-react";

const benefits = [
  "اخذ دیپلم رسمی در کوتاه‌ترین زمان ممکن",
  "بدون نیاز به پیش‌دانشگاهی یا کنکور",
  "دارای گواهینامه‌های بین‌المللی فنی و حرفه‌ای",
  "سادگی دروس نسبت به رشته‌های دیگر",
  "امکان ادامه تحصیل در دانشگاه‌های داخلی و خارجی",
  "آمادگی برای ورود به بازار کار",
];

export default function KarDaneshSection() {
  return (
    <section className="w-full bg-gradient-to-t from-gray-900 to-black py-16 px-4 text-white border-t-[1px] border-[#FFFFFF40]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          دیپلم رسمی کاردانش در تهران
        </h2>

        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10 leading-7">
          یکی از سریع‌ترین روش‌ها برای اخذ دیپلم رسمی آموزش و پرورش، ثبت‌نام در رشته‌های مهارتی شاخه کاردانش است. 
          مجتمع فنی نیاوران با سابقه‌ای درخشان، با همکاری آموزش و پرورش و سازمان فنی حرفه‌ای، 
          بهترین مسیر برای گرفتن دیپلم رسمی را به شما پیشنهاد می‌کند.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1" />
              <p className="text-base text-gray-200">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+982122743655"
            className="inline-block border-[1px] border-green-400 hover:bg-green-700 transition px-6 py-3 rounded-xl text-white font-semibold text-lg"
          >
            مشاوره رایگان 📞 22743655-021
          </a>
        </div>
      </div>
    </section>
  );
}
