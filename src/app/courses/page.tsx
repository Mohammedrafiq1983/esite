import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Users, Star, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "الدورات التعليمية - eDariss",
  description: "تصفح مئات الدورات التعليمية للمنهج العراقي في الرياضيات، الفيزياء، الكيمياء واللغات",
};

const courses = [
  {
    id: 1,
    title: "الرياضيات - الصف التاسع",
    subject: "الرياضيات",
    teacher: "أ. أحمد محمد الجبوري",
    price: 50000,
    students: 245,
    rating: 4.8,
    duration: 48,
  },
  {
    id: 2,
    title: "الفيزياء - الصف العاشر",
    subject: "الفيزياء",
    teacher: "أ. فاطمة حسن العبيدي",
    price: 55000,
    students: 189,
    rating: 4.9,
    duration: 52,
  },
  {
    id: 3,
    title: "الكيمياء - الصف الحادي عشر (علمي)",
    subject: "الكيمياء",
    teacher: "أ. علي كريم النعيمي",
    price: 60000,
    students: 167,
    rating: 4.7,
    duration: 56,
  },
  {
    id: 4,
    title: "اللغة الإنجليزية - الصف الثامن",
    subject: "اللغة الإنجليزية",
    teacher: "أ. سارة عبد الله",
    price: 45000,
    students: 312,
    rating: 4.9,
    duration: 40,
  },
  {
    id: 5,
    title: "الأحياء - الصف الثاني عشر",
    subject: "الأحياء",
    teacher: "أ. محمد صالح الدليمي",
    price: 65000,
    students: 143,
    rating: 4.8,
    duration: 60,
  },
  {
    id: 6,
    title: "الرياضيات - الصف السابع",
    subject: "الرياضيات",
    teacher: "أ. نور الدين يوسف",
    price: 42000,
    students: 278,
    rating: 4.6,
    duration: 42,
  },
  {
    id: 7,
    title: "اللغة العربية - الصف التاسع",
    subject: "اللغة العربية",
    teacher: "أ. ليلى أحمد الفهداوي",
    price: 48000,
    students: 201,
    rating: 4.9,
    duration: 45,
  },
  {
    id: 8,
    title: "الفيزياء - الصف الثاني عشر",
    subject: "الفيزياء",
    teacher: "أ. حسين علوان",
    price: 68000,
    students: 156,
    rating: 5.0,
    duration: 64,
  },
  {
    id: 9,
    title: "الكيمياء - الصف العاشر",
    subject: "الكيمياء",
    teacher: "أ. زينب محمود",
    price: 52000,
    students: 198,
    rating: 4.7,
    duration: 50,
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            الدورات المتاحة
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            اكتشف الدورات التعليمية في جميع المواد الدراسية
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-lg font-semibold text-gray-900">تصفية حسب:</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">
                جميع المواد
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                الرياضيات
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                الفيزياء
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                الكيمياء
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                اللغات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            لم تجد الدورة المناسبة؟
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا وسنساعدك في إيجاد المعلم والدورة المناسبة لاحتياجاتك
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
          >
            اتصل بنا
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
      {/* Course Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
        <BookOpen className="w-16 h-16 text-white opacity-80" />
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Subject Badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
            {course.subject}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Teacher */}
        <p className="text-gray-600 mb-4 text-sm">{course.teacher}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students} طالب</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration} ساعة</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-2xl font-bold text-primary-600">
              {course.price.toLocaleString()} IQD
            </p>
          </div>
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition">
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  );
}
