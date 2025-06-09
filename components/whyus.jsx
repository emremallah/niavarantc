import { ShieldCheck, BookOpenCheck, GraduationCap, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="text-green-400 w-6 h-6" />,
    title: "سابقه درخشان",
    description: "بیش از ۲۵ سال فعالیت آموزشی موفق و همکاری رسمی با آموزش و پرورش.",
  },
  {
    icon: <GraduationCap className="text-green-400 w-6 h-6" />,
    title: "مدارک معتبر",
    description: "صدور دیپلم رسمی و گواهینامه بین‌المللی از سازمان فنی‌ و حرفه‌ای.",
  },
  {
    icon: <BookOpenCheck className="text-green-400 w-6 h-6" />,
    title: "تنوع دوره‌ها",
    description: "ارائه دوره‌های تخصصی در رشته‌های متنوع مهارتی و کاربردی.",
  },
  {
    icon: <Users className="text-green-400 w-6 h-6" />,
    title: "مشاوره و پشتیبانی",
    description: "از ثبت‌نام تا دریافت مدرک در کنار شما هستیم؛ با پشتیبانی کامل و رایگان.",
  },
];

export default function WhyNiavaran() {
  return (
    <section className="w-full bg-[#0f172a] py-16 px-4 text-white border-t-[1px] border-[#FFFFFF40]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          چرا آموزشگاه نیاوران؟
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              dir="rtl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-6">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
