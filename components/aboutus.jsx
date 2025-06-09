"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="w-full bg-linear-to-t from-blue-950 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* عنوان */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
        >
          درباره آموزشگاه نیاوران
        </motion.h2>

        {/* محتوا و عکس */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* عکس آموزشگاه */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/classroom.jpeg" // مسیر عکس محیط آموزشگاه
              alt="محیط آموزشگاه نیاوران"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* متن معرفی */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-right text-white text-[15px] leading-8"
          >
            <p className="mb-6">
              مجتمع فنی و آموزشی نیاوران در مهرماه سال 1379 توسط آقای مهندس کامبیز علی‌سیرانی و با مدیریت خود ایشان با اخذ مجوز رسمی از سازمان آموزش فنی و حرفه‌ای کشور در رشته فناوری اطلاعات تأسیس شد و در شمال تهران و در منطقه 1 فعالیت خود را آغاز کرد.
            </p>
            <p className="mb-6">
              همکاری با نهادهای دولتی و غیردولتی از جمله وزارت آموزش و پرورش در طرح کاردانش و طرح ایران مهارت، ستاد کل نیروهای مسلح (ایزایران) در طرح یاوران امید، سازمان برنامه و بودجه در طرح آموزش کارکنان دولت و شرکت سپهرگستر در طرح آموزش کارکنان بانک صادرات برخی از دستاوردهای آموزشی این مرکز در سال‌های گذشته و حال می‌باشد.
            </p>
            <p>
              این مجتمع طی این سال‌ها با بهره‌گیری از اساتید مجرب و مورد تأیید سازمان‌های ناظر و با تمرکز بر کیفیت آموزش و تناسب آن با نیاز روز، حیطه فعالیت آموزشی خود را گسترش داد، به‌طوری‌که اکنون دارای چندین دپارتمان مجزا شامل صنایع خودرو، عمران، امور مالی و بازرگانی، فناوری اطلاعات، گردشگری و مکانیک می‌باشد.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
