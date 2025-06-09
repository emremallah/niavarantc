"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const courses = [
  { title: "مکانیک و برق خودرو", description: "یاد بگیر چطور سیستم‌های خودرو را عیب‌یابی، تعمیر و ارتقاء بدهی؛ مناسب ورود سریع به بازار کار." },
  { title: "معماری و عمران", description: "از طراحی پلان تا اجرای پروژه‌های عمرانی؛ با آموزش‌های کاربردی وارد دنیای ساخت‌وساز شو." },
  { title: "حسابداری", description: "تسلط کامل به حسابداری مالی، نرم‌افزارهای حسابداری و قوانین مالیاتی؛ مناسب بازار کار و استخدام." },
  { title: "کامپیوتر", description: "آموزش مهارت‌های کاربردی ویندوز، آفیس، شبکه و عیب‌یابی؛ پایه‌ای محکم برای ورود به دنیای دیجیتال." },
  { title: "گردشگری", description: "آموزش تخصصی راهنمای تور، رزرو هتل، فروش بلیت و ارتباط با مشتری؛ برای علاقه‌مندان به سفر و گردش." },
  { title: "دیپلم رسمی کاردانش", description: "اخذ دیپلم رسمی آموزش و پرورش در شاخه‌های فنی؛ فرصت ادامه تحصیل و ورود به دانشگاه یا بازار کار." },
  { title: "هوش مصنوعی", description: "مفاهیم پایه تا پیشرفته هوش مصنوعی، یادگیری ماشین و شبکه‌های عصبی با پروژه‌های واقعی." },
  { title: "برنامه نویسی", description: "آموزش قدم‌به‌قدم برنامه‌نویسی برای ساخت اپلیکیشن‌ها و وب‌سایت‌های حرفه‌ای؛ از مبتدی تا پیشرفته." },
  { title: "پایتون", description: "یادگیری زبان محبوب پایتون برای دیتا، وب، اسکریپت‌نویسی و هوش مصنوعی؛ ساده، قدرتمند، کاربردی." },
  { title: "فرانت اند", description: "طراحی و ساخت رابط کاربری مدرن با HTML, CSS, JavaScript و React؛ مناسب ورود به بازار طراحی وب." },
  { title: "بک اند", description: "ساخت سرور، مدیریت دیتابیس و امنیت اطلاعات با Node.js و Express؛ تبدیل شدن به یک برنامه‌نویس کامل." },
  { title: "نقشه کشی", description: "طراحی نقشه‌های فنی و صنعتی با نرم‌افزارهای تخصصی؛ پایه‌ای قوی برای ورود به بازار مهندسی." },
];

export default function Courses() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-950 to-black border-t-[1px] border-[#FFFFFF40] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center">
          دوره‌های تخصصی آموزشگاه نیاوران
        </h2>

        <Swiper
          dir="rtl"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={false} // حذف فلش‌ها
          pagination={false} // حذف دایره‌ها
          modules={[Autoplay]}
          className="pb-10"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.title}>
              <div className="bg-[#FFFFFF20] border border-green-500 rounded-2xl text-white p-6 h-full flex flex-col justify-between shadow-md hover:shadow-xl transition duration-300" dir="rtl">
                <div>
                  <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                  <p className="text-sm text-gray-300 leading-6">{course.description}</p>
                </div>
                <a
                  href="tel:+982122743655"
                  className="mt-6 inline-block text-center text-white text-base border border-green-400 px-4 py-2 rounded-xl hover:bg-[#FFFFFF20] transition duration-700"
                >
                  مشاوره رایگان
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
